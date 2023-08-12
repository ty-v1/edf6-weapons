import { dynamoDbClient } from '~/server/drop/createDynamoDbClient';
import { DeleteItemCommand } from '@aws-sdk/client-dynamodb';
import process from 'process';
import { findDrop } from '~/server/drop/findDrop';
import { isNil } from 'lodash';

type Args = {
  readonly weaponId: string;
  readonly mission: number;
};

export const deleteDrop = async ({ weaponId, mission }: Args) => {

  const drops = await findDrop(weaponId);
  const target = drops.find((e) => e.mission === mission);

  if (isNil(target)) {
    return;
  }

  if (target.isNew && drops.length > 1) {
    throw new Error('先にUpをすべて消す');
  }

  await dynamoDbClient.send(new DeleteItemCommand({
    TableName: process.env.CYCLIC_DB,
    Key: {
      'pk': { S: weaponId },
      'sk': { S: mission.toString() },
    },
  }));
};
