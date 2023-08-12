import { ActionArgs, json, LoaderArgs, redirect } from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { isNil, keyBy } from 'lodash';
import { Drop } from '~/server/drop/Drop';
import { Weapon } from '~/server/weapon/Weapon';
import { searchWeapon } from '~/server/weapon/searchWeapon';
import { WeaponCategory } from '~/server/weapon/WeaponCategory';
import { findDrop } from '~/server/drop/findDrop';
import React from 'react';
import {
  Alert,
  Box,
  Icon,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { formatMission } from '~/util/formatMission';
import { DropLabel } from '~/component/DropLabel';
import { deleteDrop } from '~/server/drop/deleteDrop';

type DropResponse = {
  readonly id: string;
  readonly name: string;
  readonly mission: number;
  readonly level: number;
  readonly isNew: boolean;
};

const createResponse: (drops: ReadonlyArray<Drop>, weapons: ReadonlyArray<Weapon>) => ReadonlyArray<DropResponse> = (
  drops, weapons,
) => {
  const idToWeapon = keyBy(weapons, 'id');

  return drops.map((e) => ({
    id: e.weaponId,
    isNew: e.isNew,
    mission: e.mission,
    level: idToWeapon[e.weaponId]?.level ?? 0,
    name: idToWeapon[e.weaponId].name ?? '',
  }));
};

export async function action({ request, params }: ActionArgs) {
  const body = await request.formData();

  try {
    await deleteDrop({
      weaponId: body.get('weaponId') as string,
      mission: parseInt(body.get('mission') as string),
    });

  } catch (e) {
    return json({
      message: e.message as string | undefined,
      isError: true
    });
  }


  return redirect('/drop');
}

export const loader = async ({ params }: LoaderArgs) => {
  const category = (params.category ?? 'RANGER') as WeaponCategory;
  const name = params.name ?? '';

  const weapons = await searchWeapon(name, category);
  const drops = (await Promise.all(
    weapons.map(e => e.id)
      .map(e => findDrop(e)),
  )).flat();

  return json({
    drops: createResponse(drops, weapons),
  });
};

export const DropListPage = () => {
  const { drops } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      {
        !isNil(actionData?.message) &&
        <Snackbar open
                  autoHideDuration={6000}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert severity={actionData?.isError ? 'error' : 'success'}
                 color={actionData?.isError ? 'error' : 'success'}
                 sx={{ width: '800px' }}
                 variant="outlined">
            {actionData?.message}
          </Alert>
        </Snackbar>
      }

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ミッション</TableCell>
              <TableCell>名前</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {drops.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {formatMission(row.mission)}
                </TableCell>
                <TableCell>
                  <DropLabel isNew={row.isNew}/><Box component="span" sx={{ ml: 1 }}>Lv{row.level} {row.name}</Box>
                </TableCell>
                <TableCell>
                  <Form method="post">
                    <input type="hidden" name="weaponId" value={row.id}/>
                    <input type="hidden" name="mission" value={row.mission}/>
                    <IconButton type="submit">
                      <Icon color="error">delete_forever</Icon>
                    </IconButton>
                  </Form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DropListPage;
