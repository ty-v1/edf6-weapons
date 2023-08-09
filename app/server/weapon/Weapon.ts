import { WeaponCategory } from '~/server/weapon/WeaponCategory';

/**
 * 武器VO
 * 本来はエンティティにすべきだが，変更することはないのでVOにする
 */
export type Weapon = {
  readonly id: string;
  readonly name: string;
  readonly level: number;
  readonly category: WeaponCategory;
}
