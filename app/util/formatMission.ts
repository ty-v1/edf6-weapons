/**
 * ミッションの通し番号を人がわかる形にする
 *
 * @example [1, 147]: そのまま
 * @example [148, 167]: DLC1 1-19
 * @example [168, 208]: DLC2 1-40
 */
export const formatMission = (mission: number) => {
  if (mission <= 147) {
    return mission.toString();
  }

  if (mission <= 167) {
    return `DLC1 ${mission - 147}`;
  }

  return `DLC2 ${mission - 167}`;
};
