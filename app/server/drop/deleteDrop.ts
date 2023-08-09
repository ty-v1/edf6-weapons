import { dynamoDbClient } from '~/server/drop/createDynamoDbClient';
import { DeleteItemCommand } from '@aws-sdk/client-dynamodb';
import process from 'process';

type Args = {
  readonly weaponId: string;
  readonly mission: number;
};

export const deleteDrop = async ({ weaponId, mission }: Args) => {

  await dynamoDbClient.send(new DeleteItemCommand({
    TableName: process.env.CYCLIC_DB,
    Key: {
      'pk': { S: weaponId },
      'sk': { S: mission.toString() },
    },
  }));
};
