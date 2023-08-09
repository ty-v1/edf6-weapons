import { WeaponCategory } from '~/server/weapon/WeaponCategory';
import { dynamoDbClient } from '~/server/drop/createDynamoDbClient';
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import process from 'process';
import { findDrop } from '~/server/drop/findDrop';
import { isEmpty, minBy } from 'lodash';
import { formatMission } from '~/util/formatMission';
import * as crypto from 'crypto';

type Args = {
  readonly weaponId: string;
  readonly mission: number;
  readonly isNew: boolean;
  readonly category: WeaponCategory;
};

export const addDrop = async ({ weaponId, mission, isNew, category }: Args) => {
  const drops = await findDrop(weaponId);

  if (isEmpty(drops) && !isNew) {
    throw new Error('1回もドロップしていない');
  }

  const oldestMission = minBy(drops, 'mission').mission;

  if (isNew && !isEmpty(drops)) {
    throw new Error('ドロップ済み');
  }

  if (!isNew && mission < oldestMission) {
    throw new Error(`最初のドロップは${formatMission(oldestMission)}`);
  }

  if (drops.some((e) => e.mission === mission)) {
    throw new Error('登録済み');
  }

  await dynamoDbClient.send(new PutItemCommand({
    TableName: process.env.CYCLIC_DB,
    Item: {
      /**
       * @see https://docs.cyclic.sh/concepts/database#using-dynamodb-directly
       */
      pk: { S: weaponId },
      keys_gsi: { S: weaponId },
      sk: { S: mission.toString() },
      keys_gsi_sk: { S: mission.toString() },
      isNew: { BOOL: isNew },
      category: { S: category },
      gsi_prj: { S: crypto.randomUUID() },
      prj: { S: crypto.randomUUID() },
    },
  }));
};
