import { SelectObjectContentCommand } from '@aws-sdk/client-s3';
import process from 'process';
import { s3Client } from '~/server/weapon/createS3Client';
import { isNil } from 'lodash';
import { Weapon } from '~/server/weapon/Weapon';

export const sendS3SelectQuery = async (query: string) => {

  const command = new SelectObjectContentCommand({
    Key: 'weapon.csv',
    Bucket: process.env.CYCLIC_BUCKET_NAME,
    Expression: query,
    ExpressionType: 'SQL',
    InputSerialization: {
      CSV: {
        FileHeaderInfo: 'USE',
        RecordDelimiter: '\r\n',
        FieldDelimiter: ',',
      },
    },
    OutputSerialization: {
      JSON: {
        RecordDelimiter: '\n',
      },
    },
  });
  const { Payload } = await s3Client.send(command);

  const weapons: Weapon[] = [];

  for await (const payload of Payload) {
    if (isNil(payload.Records?.Payload)) {
      continue;
    }

    new TextDecoder()
      .decode(payload.Records.Payload)
      .split('\n')
      .filter((e) => e !== '')
      .map((e) => JSON.parse(e))
      .forEach((e) => weapons.push(e));
  }

  return weapons;
};
