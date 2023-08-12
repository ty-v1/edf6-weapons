import { WeaponCategory } from '~/server/weapon/WeaponCategory';
import { sendS3SelectQuery } from '~/server/weapon/sendS3SelectQuery';
import { sortBy } from 'lodash';

export const listWeapons = async (category: WeaponCategory) => {
  const weapons = await sendS3SelectQuery(`SELECT *
                                  FROM S3Object s3
                                  WHERE s3.category = '${category}'`);
  return sortBy(weapons, "level", "name");
};
