import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WeaponCategory } from '@prisma/client';

@Injectable()
export class RangerService {
  constructor(private prisma: PrismaService) {
  }

  async searchWeapons(name: string) {
    return (await this.prisma.weapon.findMany({
      where: {
        name: {
          contains: this.normalizeName(name),
        },
        category: WeaponCategory.RANGER,
      },
    }));
  }

  async findDropByWeaponId(weaponId: number | null) {
    if (weaponId === null) {
      return await this.prisma.drop.findMany({
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
      });
    }

    return await this.prisma.drop.findMany({
      include: {
        weapon: true,
      },
      where: {
        weaponId,
        weapon: {
          category: WeaponCategory.RANGER,
        },
      },
      orderBy: {
        mission: 'desc',
      },
    });
  }

  async findDropByMission(mission: number | null) {
    if (mission === null) {
      return await this.prisma.drop.findMany({
        include: {
          weapon: true,
        },
        orderBy: {
          mission: 'desc',
        },
      });
    }

    return await this.prisma.drop.findMany({
      include: {
        weapon: true,
      },
      where: {
        mission,
      },
      orderBy: {
        mission: 'desc',
      },
    });
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
    });
  }
}
