import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateDropDto } from './create-drop.dto';
import { isNil } from '@nestjs/common/utils/shared.utils';
import { WeaponCategory } from './weapon-category';

@Injectable()
export class RangerService {
  constructor(private prisma: PrismaService) {
  }

  async findAllWeapons() {
    return (await this.prisma.weapon.findMany({
      where: {
        category: WeaponCategory.ranger,
      },
      orderBy: {
        name: 'desc',
      },
    }));
  }

  async findAllDrops() {
    return (await this.prisma.drop.findMany({
      include: {
        weapon: true,
      },
      where: {
        weapon: {
          category: WeaponCategory.ranger,
        },
      },
      orderBy: {
        mission: 'desc',
      },
    })).map((e) => ({
      mission: e.mission,
      weaponName: `Lv${e.weapon.level} ${e.weapon.name}`,
      isNew: e.isNew,
      id: e.id,
    }));
  }

  async findDropByWeaponName(weaponName: string) {

    const normalizedName = this.normalizeName(weaponName);


    if (normalizedName === '') {
      return await this.findAllDrops();
    }
    return (await this.prisma.drop.findMany({
      include: {
        weapon: true,
      },
      where: {
        weapon: {
          category: WeaponCategory.ranger,
          name: {
            contains: normalizedName,
          },
        },
      },
      orderBy: {
        mission: 'desc',
      },
    })).map((e) => ({
      mission: e.mission,
      weaponName: `Lv${e.weapon.level} ${e.weapon.name}`,
      isNew: e.isNew,
      id: e.id,
    }));
  }

  async register(dto: CreateDropDto): Promise<true | string> {

    const oldestDrop = await this.findOldestDrop(dto.weaponId);

    if (dto.isNew && !isNil(oldestDrop)) {
      return `M${oldestDrop.mission}でドロップ済み`;
    }

    if (!dto.isNew && isNil(oldestDrop)) {
      return `一度もドロップしていない`;
    }

    if (!dto.isNew && oldestDrop.mission <= dto.mission) {
      return `M${oldestDrop.mission}でドロップ済み`;
    }

    await this.prisma.drop.create({
      data: {
        ...dto,
      },
    });

    return true;
  }

  async delete(id: string): Promise<true | string> {
    const drop = await this.prisma.drop.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!drop.isNew) {
      await this.prisma.drop.delete({
        where: {
          id: drop.id,
        },
      });
      return true;
    }

    const updateDrops = await this.prisma.drop.count({
      where: {
        weaponId: drop.weaponId,
        isNew: false,
      },
    });

    if (updateDrops > 0) {
      return 'さきにUpを削除';
    }

    await this.prisma.drop.delete({
      where: {
        id: drop.id,
      },
    });
    return true;
  }

  private async findOldestDrop(weaponId: number) {
    return (await this.prisma.drop.findFirst({
      where: {
        weaponId,
        isNew: true,
      },
    }));
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
