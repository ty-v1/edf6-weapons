import { WeaponCategory } from '~/server/weapon/WeaponCategory';
import { sendS3SelectQuery } from '~/server/weapon/sendS3SelectQuery';

export const listWeapons = async (category: WeaponCategory) => {
  const weapons = await sendS3SelectQuery(`SELECT *
                                  FROM S3Object s3
                                  WHERE s3.category = '${category}'`);

  weapons.sort((a, b) => {
    if (a.level !== b.level) {
      return a.level - b.level;
    }

    return a.name.localeCompare(b.name);
  });

  return weapons;
};
