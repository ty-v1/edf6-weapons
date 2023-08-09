import { sendS3SelectQuery } from '~/server/weapon/sendS3SelectQuery';

export const findWeaponById = async (ids: ReadonlyArray<string>) => {

  if (ids.length === 0) {
    return [];
  }

  const query = `SELECT *
                 FROM S3Object s3
                 WHERE s3.id IN (${ids.map((e) => `'${e}'`).join(',')})`;
  return sendS3SelectQuery(query);
};
