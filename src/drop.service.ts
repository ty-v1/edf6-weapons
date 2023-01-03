import { Injectable } from '@nestjs/common';
import { CreateDropDto } from './create-drop.dto';
import { isNil } from '@nestjs/common/utils/shared.utils';
import { WeaponCategory } from './weapon-category';
import { Base, Deta } from 'deta';
import { DropDto } from './drop-dto';
import { Weapon } from './weapon';

const dropComparator = (a: DropDto, b: DropDto) => {
  if (a.mission === b.mission) {
    return 0;
  }

  return a.mission < b.mission ? -1 : 1;
};

@Injectable()
export class DropService {

  private readonly weaponBase: ReturnType<typeof Base>;

  constructor() {
    const deta = Deta();
    this.weaponBase = deta.Base('weapon');
  }

  async findAllDrops(category: WeaponCategory): Promise<readonly DropDto[]> {
    const { items } = await this.weaponBase.fetch({
      category,
    });
    const weapons = items as unknown as Weapon[];

    return weapons.reduce((p, c) => [
        ...p,
        ...this.convertToDto(c),
      ],
      [],
    ).sort(dropComparator);
  }

  async findDropByName(name: string, category: WeaponCategory): Promise<readonly DropDto[]> {
    if (name === '' || /^\s+$/.test(name)) {
      return this.findAllDrops(category);
    }

    const { items } = await this.weaponBase.fetch({
      category,
      'name?contains': this.normalizeName(name),
    });
    const weapons = items as unknown as Weapon[];

    return weapons.reduce((p, c) => [
        ...p,
        ...this.convertToDto(c),
      ],
      [],
    ).sort(dropComparator);
  }

  private convertToDto({ key, level, name, drops }: Weapon) {
    return drops.map((e) => ({
      weaponKey: key,
      weaponName: `Lv${level} ${name}`,
      mission: e.mission,
      isNew: e.isNew,
    }));
  };

  async register(dto: CreateDropDto): Promise<true | string> {
    const item = await this.weaponBase.get(dto.weaponId);

    if (isNil(item)) {
      return true;
    }

    const weapon = item as unknown as Weapon;
    const oldestDrop = weapon.drops.find((e) => e.isNew);

    if (dto.isNew && !isNil(oldestDrop)) {
      return `M${oldestDrop.mission}でドロップ済み`;
    }

    if (!dto.isNew && isNil(oldestDrop)) {
      return `一度もドロップしていない`;
    }

    if (!dto.isNew && oldestDrop.mission > dto.mission) {
      return `M${oldestDrop.mission}でドロップ済み`;
    }

    await this.weaponBase.put({
      ...weapon,
      drops: [
        ...weapon.drops,
        {
          mission: dto.mission,
          isNew: dto.isNew,
        },
      ],
    });

    return true;
  }

  async delete(weaponId: string, mission: number): Promise<true | string> {
    const item = await this.weaponBase.get(weaponId);

    if (isNil(item)) {
      return true;
    }

    const weapon = item as unknown as Weapon;
    const dropIndex = weapon.drops.findIndex((e) => e.mission === mission);

    if (dropIndex === -1) {
      return true;
    }

    const drop = weapon.drops[dropIndex];

    if (!drop.isNew) {
      await this.removeDrop(weapon, dropIndex);
      return true;
    }

    const updateDrops = weapon.drops.filter((e) => !e.isNew)
      .length;

    if (updateDrops > 0) {
      return 'さきにUpを削除';
    }

    await this.removeDrop(weapon, dropIndex);
    return true;
  }

  private async removeDrop(weapon: Weapon, index: number) {
    const updatedDrops = [...weapon.drops];
    updatedDrops.splice(index, 1)

    await this.weaponBase.put({
      ...weapon,
      drops: updatedDrops,
    }, weapon.key);
  }

  private normalizeName(name: string) {
    return name.replace(/[Ａ-Ｚ]/g, (e) => {
      const delta = 'Ａ'.charCodeAt(0) - 'A'.charCodeAt(0);
      return String.fromCharCode(e.charCodeAt(0) - delta);
    }).replace(/[ａ-ｚ]/g, (e) => {
      const delta = 'ａ'.charCodeAt(0) - 'a'.charCodeAt(0);
      return String.fromCharCode(e.charCodeAt(0) - delta);
    }).replace(/[あ-ゖ]/g, (e) => {
      const delta = 'ア'.charCodeAt(0) - 'あ'.charCodeAt(0);
      return String.fromCharCode(e.charCodeAt(0) + delta);
    }).replace(/[０-９]/g, (e) => {
      const delta = '０'.charCodeAt(0) - '0'.charCodeAt(0);
      return String.fromCharCode(e.charCodeAt(0) - delta);
    }).replace(/　/g, '')
      .replace(/\s/g, '');
  }
}
