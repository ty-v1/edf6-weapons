import { Weapon } from '~/server/weapon/Weapon';

export const WeaponComparator = ((a: Weapon, b: Weapon) => {
  if (a.level !== b.level) {
    return a.level - b.level;
  }

  return a.name.localeCompare(b.name);
});
