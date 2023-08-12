import { dynamoDbClient } from './createDynamoDbClient';
import { QueryCommand } from '@aws-sdk/client-dynamodb';
import * as process from 'process';
import { Drop } from '~/server/drop/Drop';
import { WeaponCategory } from '~/server/weapon/WeaponCategory';

export const findDrop: (weaponId: string) => Promise<ReadonlyArray<Drop>> = async (weaponId: string) => {

  const { Items } = await dynamoDbClient.send(new QueryCommand({
    TableName: process.env.CYCLIC_DB,
    Select: 'ALL_ATTRIBUTES',
    KeyConditionExpression: 'pk = :weaponId',
    ExpressionAttributeValues: {
      ':weaponId': { S: weaponId },
    },
  }));

  const drops: Array<Drop> = [];
  for (const { pk, sk, isNew, category } of Items) {
    drops.push({
      weaponId: pk.S,
      mission: parseInt(sk.S),
      isNew: isNew.BOOL,
      category: category.S as WeaponCategory,
    });
  }

  return drops;
};
