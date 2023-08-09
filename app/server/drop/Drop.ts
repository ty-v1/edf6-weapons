import { WeaponCategory } from '~/server/weapon/WeaponCategory';

export type Drop = {
  readonly weaponId: string;
  readonly mission: number;
  readonly isNew: boolean;
  readonly category: WeaponCategory;
}
