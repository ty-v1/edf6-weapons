export const WeaponCategory = {
  ranger: 'RANGER',
  wingDiver: 'WING_DIVER',
  airRaider: 'AIR_RAIDER',
  fencer: 'FENCER',
} as const;

export type WeaponCategory = typeof WeaponCategory[keyof typeof WeaponCategory];
