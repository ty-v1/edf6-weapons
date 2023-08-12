import { sendS3SelectQuery } from '~/server/weapon/sendS3SelectQuery';
import { WeaponCategory } from '~/server/weapon/WeaponCategory';
import { isEmpty, sortBy } from 'lodash';
import { listWeapons } from '~/server/weapon/listWeapons';

export const searchWeapon = async (name: string, category: WeaponCategory) => {

  if (isEmpty(name)) {
    return await listWeapons(category);
  }

  const query = `SELECT *
                 FROM S3Object s3
                 WHERE s3.name LIKE '%${name}%'
                   AND s3.category = '${category}'`;

  const weapons = await sendS3SelectQuery(query)
  return sortBy(weapons, "level", "name");
};
