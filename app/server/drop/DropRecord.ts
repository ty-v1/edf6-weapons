import { WeaponCategory } from '~/server/weapon/WeaponCategory';

/**
 * @see https://docs.cyclic.sh/concepts/database#using-dynamodb-directly
 */
export type DropRecord = {
  /**
   * 武器ID
   */
  readonly pk: string;
  readonly keys_gsi: string;
  /**
   * ミッション
   * DLCも含めて連番とする
   *
   * @example DLC1-1 -> `148`
   */
  readonly sk: string;
  readonly keys_gsi_sk: string;
  /**
   * 新しくドロップしたか
   */
  readonly isNew: boolean;
  /**
   * カテゴリ
   */
  readonly category: WeaponCategory;
};

type Args = {
  readonly weaponId: string;
  readonly mission: number;
  readonly isNew: boolean;
  readonly category: WeaponCategory;
}

export const createRecord = ({ weaponId, isNew, category, mission }: Args): DropRecord => ({
  pk: weaponId,
  keys_gsi: weaponId,
  sk: mission.toString(),
  keys_gsi_sk: mission.toString(),
  isNew,
  category,
});
