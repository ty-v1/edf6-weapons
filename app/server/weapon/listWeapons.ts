import { WeaponCategory } from '~/server/weapon/WeaponCategory';
import { sendS3SelectQuery } from '~/server/weapon/sendS3SelectQuery';

export const listWeapons = async (category: WeaponCategory) => {
  return await sendS3SelectQuery(`SELECT *
                                  FROM S3Object s3
                                  WHERE s3.category = '${category}'
                                  ORDER BY s3.level ASC`);
};
