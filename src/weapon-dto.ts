import { WeaponCategory } from './weapon-category';

export type WeaponDto = {
  readonly id: string;
  readonly name: string;
  readonly level: number;
  readonly category: WeaponCategory;
};
