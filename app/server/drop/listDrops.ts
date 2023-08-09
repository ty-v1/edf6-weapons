import { dynamoDbClient } from '~/server/drop/createDynamoDbClient';
import { ScanCommand } from '@aws-sdk/client-dynamodb';
import * as process from 'process';
import { WeaponCategory } from '~/server/weapon/WeaponCategory';
import { Drop } from '~/server/drop/Drop';

export const listDrops: (category: WeaponCategory) => Promise<ReadonlyArray<Drop>> = async (category) => {
  const { Items } = await dynamoDbClient.send(new ScanCommand({
    TableName: process.env.CYCLIC_DB,
    Select: 'ALL_ATTRIBUTES',
    FilterExpression: 'category = :category',
    ExpressionAttributeValues: {
      ':category': { S: category },
    },
  }));

  const drops: Array<Drop> = [];
  for (const { pk, sk, isNew, category: itemCategory } of Items) {
    drops.push({
      weaponId: pk.S,
      mission: parseInt(sk.S),
      isNew: isNew.BOOL,
      category: itemCategory.S as WeaponCategory,
    });
  }

  return drops;
};
