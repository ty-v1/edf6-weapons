import type { ActionArgs, LoaderArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { listWeapons } from '~/server/weapon/listWeapons';
import {
  Alert,
  Autocomplete,
  Box,
  Button, Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select, Snackbar, Stack,
  TextField
} from '@mui/material';
import { isEmpty, isNil, isString, range } from 'lodash';
import React, { useState } from 'react';
import { formatMission } from '~/util/formatMission';
import { addDrop } from '~/server/drop/addDrop';
import { Params } from '@remix-run/router';

const getCategory = (params: Params) => {
  switch (params.category) {
    case 'ranger':
      return 'RANGER';
    case 'air-raider':
      return 'AIR_RAIDER';
  }
  return undefined;
};

export const loader = async ({ params, context }: LoaderArgs) => {

  const category = getCategory(params);

  if (isNil(category)) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return json({
    weapons: await listWeapons(category),
  });
};


export async function action({ request, params }: ActionArgs) {
  const body = await request.formData();
  const category = getCategory(params);

  if (isNil(category)) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  try {
    await addDrop({
      isNew: body.get('isNew') === 'on',
      weaponId: body.get('weaponId') as string,
      category,
      mission: parseInt(body.get('mission') as string),
    });
  } catch (e) {
    return json({
      message: e.message as string | undefined,
      isError: true
    });
  }

  return json({
    message: 'Success',
    isError: false
  });
}

const DropRegisterPage = () => {
  const { weapons } = useLoaderData<typeof loader>();
  const [selectedWeapon, setSelectedWeapon] = useState(weapons[0]);
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
      <Stack component={Form} method="post" spacing={4}>
        <Autocomplete
          id="weapon"
          freeSolo
          value={selectedWeapon}
          options={weapons}
          onChange={(event, item) => {
            if (isString(item)) {
              return;
            }

            setSelectedWeapon(item);
          }}
          getOptionLabel={(option) => {
            if (isString(option)) {
              return option;
            }

            return option.name ?? '';
          }}
          renderInput={(params) => <TextField {...params} label="武器"/>}
          renderOption={(props, option) => (
            <Box component="li" {...props}>Lv{option.level} {option.name}</Box>
          )}
        />
        <input type="hidden" name="weaponId" value={selectedWeapon?.id}/>

        <FormControl fullWidth>
          <InputLabel htmlFor="mission">ミッション</InputLabel>
          <Select
            id="mission"
            name="mission"
            native
            defaultValue={1}
            label="ミッション"
          >
            <optgroup label="本編">
              {
                range(1, 147 + 1).map((e) => (
                  <option key={e} value={e}>{formatMission(e)}</option>
                ))
              }
            </optgroup>
            <optgroup label="DLC">
              {
                range(147 + 1, 147 + 19 + 1).map((e) => (
                  <option key={e} value={e}>{formatMission(e)}</option>
                ))
              }
            </optgroup>
            <optgroup label="DLC">
              {
                range(167 + 1, 167 + 40 + 1).map((e) => (
                  <option key={e} value={e}>{formatMission(e)}</option>
                ))
              }
            </optgroup>
          </Select>
        </FormControl>

        <FormControlLabel control={<Checkbox defaultChecked name="isNew"/>}
                          label="新規ドロップ"/>

        <Button type="submit"
                disabled={isNil(selectedWeapon)}
                variant="outlined">
          登録
        </Button>
      </Stack>
    </>
  );
};

export default DropRegisterPage;
