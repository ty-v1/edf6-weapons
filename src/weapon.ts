import { WeaponCategory } from './weapon-category';
import { Drop } from './drop';

export type Weapon = {
  readonly key: string;
  readonly name: string;
  readonly level: number;
  readonly category: WeaponCategory;
  readonly drops: readonly Drop[];
};
