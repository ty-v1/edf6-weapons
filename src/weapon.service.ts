import { Injectable } from '@nestjs/common';
import { WeaponCategory } from './weapon-category';
import { Base, Deta } from 'deta';
import { Weapon } from './weapon';
import { WeaponDto } from './weapon-dto';

@Injectable()
export class WeaponService {
  private readonly weaponBase: ReturnType<typeof Base>;

  constructor() {
    const deta = Deta();
    this.weaponBase = deta.Base('weapon');
  }

  async findAllWeapons(category: WeaponCategory): Promise<readonly WeaponDto[]> {
    const { items } = await this.weaponBase.fetch({ category });
    const weapons = items as unknown as Weapon[];
    return weapons.map((e) => ({
      ...e,
      id: e.key,
    })).sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      }

      return a.name < b.name ? -1 : 1;
    });
  }
}
