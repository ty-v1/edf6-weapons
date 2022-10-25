import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WeaponCategory } from '@prisma/client';

@Injectable()
export class RangerService {
  constructor(private prisma: PrismaService) {
  }

  async findAllDrops() {
    return (await this.prisma.drop.findMany({
      include: {
        weapon: true,
      },
      where: {
        weapon: {
          category: WeaponCategory.RANGER,
        },
      },
      orderBy: {
        mission: 'desc',
      },
    })).map((e) => ({
      mission: e.mission,
      weaponName: `Lv${e.weapon.level} ${e.weapon.name}`,
      isNew: e.isNew,
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
          category: WeaponCategory.RANGER,
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
