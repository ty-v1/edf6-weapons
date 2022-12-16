import { Deta } from 'deta';
import { Weapon } from '../src/weapon';
import { WeaponCategory } from '../src/weapon-category';

const deta = Deta();
const weaponBase = deta.Base('weapon');

const weapons: Omit<Weapon, 'category' | 'drops' | 'key'>[] = [
  {
    'level': 0,
    'name': 'PA-11 Broken',
  },
  {
    'level': 1,
    'name': 'PA-11LS',
  },
  {
    'level': 5,
    'name': 'PA-11SLS',
  },
  {
    'level': 6,
    'name': 'T1ストーク',
  },
  {
    'level': 14,
    'name': 'T1ストークS',
  },
  {
    'level': 19,
    'name': 'T1ストークLS',
  },
  {
    'level': 23,
    'name': 'T2ストーク',
  },
  {
    'level': 26,
    'name': 'T2ストークKF',
  },
  {
    'level': 31,
    'name': 'T3ストーク',
  },
  {
    'level': 36,
    'name': 'T3ストーク バースト',
  },
  {
    'level': 51,
    'name': 'T4ストーク',
  },
  {
    'level': 58,
    'name': 'T4ストークAE',
  },
  {
    'level': 69,
    'name': 'T4ストークMK2',
  },
  {
    'level': 75,
    'name': 'T5ストーク',
  },
  {
    'level': 84,
    'name': 'TZストーク',
  },
  {
    'level': 3,
    'name': 'M1レイヴン',
  },
  {
    'level': 12,
    'name': 'M1レイヴンLS',
  },
  {
    'level': 22,
    'name': 'M2レイヴン',
  },
  {
    'level': 26,
    'name': 'M2Rレイヴン',
  },
  {
    'level': 31,
    'name': 'M2RERレイヴン',
  },
  {
    'level': 42,
    'name': 'MXRシリウス',
  },
  {
    'level': 55,
    'name': 'M3レイヴン',
  },
  {
    'level': 64,
    'name': 'M4レイヴン',
  },
  {
    'level': 73,
    'name': 'M3レイヴンSLS',
  },
  {
    'level': 82,
    'name': 'M5レイヴン',
  },
  {
    'level': 1,
    'name': 'スラッガーNN1',
  },
  {
    'level': 24,
    'name': 'スラッガーNN2',
  },
  {
    'level': 34,
    'name': 'スラッガーNN3',
  },
  {
    'level': 47,
    'name': 'スラッガーNN3SLS',
  },
  {
    'level': 57,
    'name': 'X400-オーキッド',
  },
  {
    'level': 62,
    'name': 'スラッガーNN4',
  },
  {
    'level': 71,
    'name': 'X500-オーキッド',
  },
  {
    'level': 80,
    'name': 'X900-オーキッド',
  },
  {
    'level': 0,
    'name': 'ミニオンバスター',
  },
  {
    'level': 10,
    'name': 'ミニオンバスターバースト',
  },
  {
    'level': 21,
    'name': 'ミニオンバスターMK2',
  },
  {
    'level': 39,
    'name': 'ミニオンバスターMK3',
  },
  {
    'level': 49,
    'name': 'ミニオンブラスト',
  },
  {
    'level': 76,
    'name': 'ミニオンバスターMKX',
  },
  {
    'level': 2,
    'name': 'G&M-21S',
  },
  {
    'level': 7,
    'name': 'G&M-22S',
  },
  {
    'level': 16,
    'name': 'G&M-A23',
  },
  {
    'level': 29,
    'name': 'G&M-A23LS',
  },
  {
    'level': 44,
    'name': 'G&M-24S',
  },
  {
    'level': 67,
    'name': 'G&M-A25',
  },
  {
    'level': 79,
    'name': 'G&M-A29',
  },
  {
    'level': 20,
    'name': 'ブレイザー',
  },
  {
    'level': 68,
    'name': 'オメガ ブレイザー',
  },
  {
    'level': 95,
    'name': 'EXAブレイザー',
  },
  {
    'level': 0,
    'name': 'スローターE20',
  },
  {
    'level': 4,
    'name': 'スローターE20LS',
  },
  {
    'level': 9,
    'name': 'スローターE21LS',
  },
  {
    'level': 14,
    'name': 'スローターE22',
  },
  {
    'level': 21,
    'name': 'スローターE22GA',
  },
  {
    'level': 31,
    'name': 'スローターE22TS',
  },
  {
    'level': 40,
    'name': 'スローターE23',
  },
  {
    'level': 50,
    'name': 'スローターE23DA',
  },
  {
    'level': 68,
    'name': 'スローターE23SAS',
  },
  {
    'level': 85,
    'name': 'スローターEZ',
  },
  {
    'level': 1,
    'name': 'SGN-7',
  },
  {
    'level': 17,
    'name': 'SGN-8',
  },
  {
    'level': 43,
    'name': 'SGN-K9',
  },
  {
    'level': 82,
    'name': 'SGN-K12',
  },
  {
    'level': 6,
    'name': 'G1ヘリング',
  },
  {
    'level': 52,
    'name': 'SGN-10A',
  },
  {
    'level': 65,
    'name': 'SGN-11A',
  },
  {
    'level': 24,
    'name': 'モンスーン',
  },
  {
    'level': 46,
    'name': 'モンスーンM2',
  },
  {
    'level': 60,
    'name': 'モンスーンM3',
  },
  {
    'level': 77,
    'name': 'モンスーンMZ',
  },
  {
    'level': 11,
    'name': 'D35ブリーチャー',
  },
  {
    'level': 29,
    'name': 'D55ブリーチャー',
  },
  {
    'level': 72,
    'name': 'D79ブリーチャー',
  },
  {
    'level': 80,
    'name': 'D110ブリーチャー',
  },
  {
    'level': 2,
    'name': 'スラッグショット',
  },
  {
    'level': 12,
    'name': 'スラッグショット2',
  },
  {
    'level': 36,
    'name': 'スラッグショット3',
  },
  {
    'level': 55,
    'name': 'スラッグショット4',
  },
  {
    'level': 74,
    'name': 'スラッグショット5',
  },
  {
    'level': 83,
    'name': 'スラッグショットZ6',
  },
  {
    'level': 45,
    'name': 'デストラクション ブレイザー',
  },
  {
    'level': 90,
    'name': 'デストラクション ブレイザーG',
  },
  {
    'level': 0,
    'name': 'KFF50',
  },
  {
    'level': 6,
    'name': 'KFF50LS',
  },
  {
    'level': 23,
    'name': 'KFF51LS',
  },
  {
    'level': 32,
    'name': 'KFF60LS',
  },
  {
    'level': 41,
    'name': 'KFF60RE',
  },
  {
    'level': 80,
    'name': 'KFF70',
  },
  {
    'level': 1,
    'name': 'NP3-A',
  },
  {
    'level': 17,
    'name': 'NP3-B',
  },
  {
    'level': 49,
    'name': 'NP3-C',
  },
  {
    'level': 75,
    'name': 'NP4-SA',
  },
  {
    'level': 4,
    'name': '試作型ライサンダー',
  },
  {
    'level': 19,
    'name': 'ライサンダー',
  },
  {
    'level': 56,
    'name': 'ライサンダーF',
  },
  {
    'level': 82,
    'name': 'ライサンダーZ',
  },
  {
    'level': 3,
    'name': 'MR98ファング Broken',
  },
  {
    'level': 10,
    'name': 'MR98ファング',
  },
  {
    'level': 34,
    'name': 'MR99ファング',
  },
  {
    'level': 69,
    'name': 'MR100ファング',
  },
  {
    'level': 90,
    'name': 'MR111ファング',
  },
  {
    'level': 12,
    'name': 'ドゥンケルN202',
  },
  {
    'level': 27,
    'name': 'ドゥンケルN213',
  },
  {
    'level': 47,
    'name': 'ドゥンケルN224',
  },
  {
    'level': 62,
    'name': 'ドゥンケルN236',
  },
  {
    'level': 37,
    'name': 'ターミガンHA1',
  },
  {
    'level': 66,
    'name': 'ターミガンHA2',
  },
  {
    'level': 84,
    'name': 'ターミガンHAZ',
  },
  {
    'level': 14,
    'name': 'イーグルG1',
  },
  {
    'level': 30,
    'name': 'イーグルG2',
  },
  {
    'level': 2,
    'name': 'フラウンダー4',
  },
  {
    'level': 25,
    'name': 'フラウンダー8',
  },
  {
    'level': 72,
    'name': 'フラウンダー12',
  },
  {
    'level': 45,
    'name': 'パイロンA1',
  },
  {
    'level': 52,
    'name': 'ペネトレイター',
  },
  {
    'level': 77,
    'name': 'ペネトレイターF',
  },
  {
    'level': 0,
    'name': 'グラントM31',
  },
  {
    'level': 8,
    'name': 'グラントM32',
  },
  {
    'level': 11,
    'name': 'グラントM33',
  },
  {
    'level': 20,
    'name': 'グラントM40',
  },
  {
    'level': 32,
    'name': 'グラントM41',
  },
  {
    'level': 41,
    'name': 'グラントMA50',
  },
  {
    'level': 55,
    'name': 'グラントM42S',
  },
  {
    'level': 73,
    'name': 'グラントMT51',
  },
  {
    'level': 81,
    'name': 'グラントMTX',
  },
  {
    'level': 2,
    'name': 'レパード誘導ロケット',
  },
  {
    'level': 18,
    'name': 'レパード誘導ロケットM2',
  },
  {
    'level': 28,
    'name': 'レパード誘導ロケットM3',
  },
  {
    'level': 37,
    'name': 'アイビス誘導ロケット',
  },
  {
    'level': 45,
    'name': 'レパード誘導ロケットM4',
  },
  {
    'level': 65,
    'name': 'レパード誘導ロケットM9',
  },
  {
    'level': 76,
    'name': 'レパード誘導ロケット零式',
  },
  {
    'level': 5,
    'name': 'ゴリアスD1',
  },
  {
    'level': 23,
    'name': 'ゴリアスD2',
  },
  {
    'level': 35,
    'name': 'ゴリアスD3',
  },
  {
    'level': 70,
    'name': 'ゴリアスDMX',
  },
  {
    'level': 80,
    'name': 'ゴリアスZD',
  },
  {
    'level': 1,
    'name': 'カスケード0',
  },
  {
    'level': 10,
    'name': 'カスケード1',
  },
  {
    'level': 30,
    'name': 'カスケード2',
  },
  {
    'level': 50,
    'name': 'カスケード3',
  },
  {
    'level': 74,
    'name': 'カスケードFA',
  },
  {
    'level': 13,
    'name': 'E9ホーネット',
  },
  {
    'level': 24,
    'name': 'E10ホーネット',
  },
  {
    'level': 40,
    'name': 'E11ホーネット',
  },
  {
    'level': 63,
    'name': 'E12ホーネット',
  },
  {
    'level': 78,
    'name': 'E20ホーネット',
  },
  {
    'level': 15,
    'name': 'ボルケーノ6',
  },
  {
    'level': 25,
    'name': 'ボルケーノV12',
  },
  {
    'level': 58,
    'name': 'ボルケーノW20',
  },
  {
    'level': 79,
    'name': 'ボルケーノW30',
  },
  {
    'level': 0,
    'name': 'ME1エメロード',
  },
  {
    'level': 3,
    'name': 'ME2エメロード',
  },
  {
    'level': 17,
    'name': 'ME3エメロード',
  },
  {
    'level': 35,
    'name': 'ME4エメロード',
  },
  {
    'level': 52,
    'name': 'ME4RエメロードS',
  },
  {
    'level': 77,
    'name': 'MEX5エメロード',
  },
  {
    'level': 0,
    'name': 'エアトータス01',
  },
  {
    'level': 7,
    'name': 'エアトータス02',
  },
  {
    'level': 43,
    'name': 'エアトータスME',
  },
  {
    'level': 1,
    'name': 'MLRA',
  },
  {
    'level': 9,
    'name': 'MLRA-2',
  },
  {
    'level': 21,
    'name': 'MLRA-30',
  },
  {
    'level': 47,
    'name': 'MLRA-TW',
  },
  {
    'level': 75,
    'name': 'MLRA-TF',
  },
  {
    'level': 4,
    'name': 'FORK-A15',
  },
  {
    'level': 29,
    'name': 'FORK-A20',
  },
  {
    'level': 68,
    'name': 'FORK-X20',
  },
  {
    'level': 13,
    'name': 'プロミネンスM1',
  },
  {
    'level': 23,
    'name': 'プロミネンスM2',
  },
  {
    'level': 61,
    'name': 'プロミネンスM3',
  },
  {
    'level': 82,
    'name': 'プロミネンスMA',
  },
  {
    'level': 0,
    'name': 'グレネードランチャーUM1',
  },
  {
    'level': 3,
    'name': 'グレネードランチャーUM2',
  },
  {
    'level': 7,
    'name': 'グレネードランチャーUM3',
  },
  {
    'level': 15,
    'name': 'グレネードランチャーUMRA',
  },
  {
    'level': 21,
    'name': 'グレネードランチャーUM4',
  },
  {
    'level': 28,
    'name': 'グレネードランチャーUM5',
  },
  {
    'level': 46,
    'name': 'グレネードランチャーUMAX',
  },
  {
    'level': 67,
    'name': 'グレネードランチャーUMAZ',
  },
  {
    'level': 91,
    'name': 'グレネードランチャーUMFF',
  },
  {
    'level': 2,
    'name': 'グレネードランチャーUM1-J',
  },
  {
    'level': 11,
    'name': 'グレネードランチャーUM3-J',
  },
  {
    'level': 19,
    'name': 'グレネードランチャーUM4-J',
  },
  {
    'level': 31,
    'name': '3連GランチャーBRUTEJ',
  },
  {
    'level': 41,
    'name': '3連GランチャーBRUTE',
  },
  {
    'level': 52,
    'name': '2連GランチャーCRUMBLE',
  },
  {
    'level': 5,
    'name': 'スタンピードM1',
  },
  {
    'level': 48,
    'name': 'スタンピードM2',
  },
  {
    'level': 71,
    'name': 'スタンピードXM',
  },
  {
    'level': 22,
    'name': 'スプラッシュグレネード',
  },
  {
    'level': 38,
    'name': 'スプラッシュグレネードα',
  },
  {
    'level': 25,
    'name': 'スティッキーグレネード試作型',
  },
  {
    'level': 43,
    'name': 'スティッキーグレネード',
  },
  {
    'level': 61,
    'name': 'スティッキーグレネードα',
  },
  {
    'level': 1,
    'name': 'ヴァラトル・ナパーム',
  },
  {
    'level': 13,
    'name': 'ヴァラトル・ナパームB',
  },
  {
    'level': 39,
    'name': 'ヴァラトル・ナパームD',
  },
  {
    'level': 54,
    'name': 'ヴォルカニック・ナパーム',
  },
  {
    'level': 79,
    'name': 'ヴァラトル・ナパームZD',
  },
  {
    'level': 27,
    'name': 'フレイム・ガイザー',
  },
  {
    'level': 69,
    'name': 'フレイム・ガイザーDA',
  },
  {
    'level': 8,
    'name': 'アシッド・シャワー試作型',
  },
  {
    'level': 20,
    'name': 'アシッドガン',
  },
  {
    'level': 38,
    'name': 'アシッド・シャワー',
  },
  {
    'level': 53,
    'name': 'ワイド・アシッドガン',
  },
  {
    'level': 58,
    'name': 'スーパー・アシッドガン',
  },
  {
    'level': 0,
    'name': 'バーナー',
  },
  {
    'level': 1,
    'name': '火炎放射器',
  },
  {
    'level': 5,
    'name': '二式 火炎放射器',
  },
  {
    'level': 15,
    'name': '三式 火炎放射器',
  },
  {
    'level': 29,
    'name': '火炎放射器α',
  },
  {
    'level': 56,
    'name': '火炎砲',
  },
  {
    'level': 83,
    'name': 'マグマ砲',
  },
  {
    'level': 3,
    'name': 'H88バウンドガン',
  },
  {
    'level': 10,
    'name': 'H89バウンドガン',
  },
  {
    'level': 33,
    'name': 'HL90バウンドガン',
  },
  {
    'level': 59,
    'name': 'HS99バウンドガン',
  },
  {
    'level': 73,
    'name': 'HX50バウンドショット',
  },
  {
    'level': 0,
    'name': 'プロト・リバーサー',
  },
  {
    'level': 1,
    'name': 'リバーサー',
  },
  {
    'level': 28,
    'name': 'リバーサーM2',
  },
  {
    'level': 42,
    'name': 'リバーサーM3',
  },
  {
    'level': 70,
    'name': 'リバーサーX',
  },
  {
    'level': 13,
    'name': 'リバースガン',
  },
  {
    'level': 36,
    'name': 'リバースシューターT1',
  },
  {
    'level': 48,
    'name': 'リバースボンバー',
  },
  {
    'level': 63,
    'name': 'リバースシューターT2',
  },
  {
    'level': 78,
    'name': 'リバースシューターX',
  },
  {
    'level': 21,
    'name': 'ハイサイクル・リバーサー',
  },
  {
    'level': 51,
    'name': 'ハイサイクル・リバーサーD',
  },
  {
    'level': 81,
    'name': 'ハイサイクル・リバーサーZD',
  },
  // バックパック
  {
    'level': 0,
    'name': 'MG11',
  },
  {
    'level': 5,
    'name': 'MG12',
  },
  {
    'level': 8,
    'name': 'MG13',
  },
  {
    'level': 14,
    'name': 'MG14',
  },
  {
    'level': 22,
    'name': 'MG15',
  },
  {
    'level': 27,
    'name': 'MG20',
  },
  {
    'level': 40,
    'name': 'MG21',
  },
  {
    'level': 48,
    'name': 'MG22',
  },
  {
    'level': 54,
    'name': 'MG30',
  },
  {
    'level': 70,
    'name': 'MG40',
  },
  {
    'level': 78,
    'name': 'MG50',
  },
  {
    'level': 0,
    'name': 'MG11J',
  },
  {
    'level': 12,
    'name': 'MG13JA',
  },
  {
    'level': 17,
    'name': 'MG14J',
  },
  {
    'level': 38,
    'name': 'MG21J',
  },
  {
    'level': 52,
    'name': 'バウンド・グレネード',
  },
  {
    'level': 1,
    'name': 'T5マウス',
  },
  {
    'level': 10,
    'name': 'T44マウス',
  },
  {
    'level': 20,
    'name': 'T6マウス',
  },
  {
    'level': 30,
    'name': 'TJ444マウス',
  },
  {
    'level': 55,
    'name': 'TJOマウス',
  },
  {
    'level': 72,
    'name': 'TZ6マウス',
  },
  {
    'level': 80,
    'name': 'TZ8マウス',
  },
  {
    'level': 2,
    'name': 'DNG1',
  },
  {
    'level': 21,
    'name': 'DNG2',
  },
  {
    'level': 41,
    'name': 'DNG3',
  },
  {
    'level': 63,
    'name': 'DNG9',
  },
  {
    'level': 76,
    'name': 'DNG10',
  },
  {
    'level': 4,
    'name': '1号弾',
  },
  {
    'level': 18,
    'name': '2号弾',
  },
  {
    'level': 25,
    'name': '3号弾',
  },
  {
    'level': 44,
    'name': '4号弾',
  },
  {
    'level': 59,
    'name': '零号弾',
  },
  {
    'level': 79,
    'name': '千号弾',
  },
  {
    'level': 2,
    'name': 'エリアル リバーサーM0',
  },
  {
    'level': 5,
    'name': 'エリアル リバーサーM1',
  },
  {
    'level': 11,
    'name': 'エリアル リバーサーM2',
  },
  {
    'level': 21,
    'name': 'エリアル リバーサーM3',
  },
  {
    'level': 32,
    'name': 'エリアル リバーサーM4',
  },
  {
    'level': 62,
    'name': 'エリアル リバーサーM9',
  },
  {
    'level': 85,
    'name': 'エリアル リバーサーMD',
  },
  {
    'level': 1,
    'name': 'テルミット弾',
  },
  {
    'level': 8,
    'name': 'ナノテルミット弾',
  },
  {
    'level': 21,
    'name': 'M2テルミット弾',
  },
  {
    'level': 34,
    'name': 'BXナノテルミット弾',
  },
  {
    'level': 45,
    'name': 'メタテルミット弾',
  },
  {
    'level': 62,
    'name': 'M3テルミット弾',
  },
  {
    'level': 82,
    'name': 'M9テルミット弾',
  },
  {
    'level': 2,
    'name': 'A60バイナリー弾',
  },
  {
    'level': 6,
    'name': 'A61バイナリー弾',
  },
  {
    'level': 18,
    'name': 'A62バイナリー弾',
  },
  {
    'level': 42,
    'name': 'A71バイナリー弾',
  },
  {
    'level': 62,
    'name': 'A72バイナリー弾',
  },
  {
    'level': 1,
    'name': 'CA20爆弾',
  },
  {
    'level': 16,
    'name': 'CA21爆弾',
  },
  {
    'level': 33,
    'name': 'CA5特殊爆弾',
  },
  {
    'level': 46,
    'name': 'CA80爆弾',
  },
  {
    'level': 66,
    'name': 'CA90爆弾',
  },
  {
    'level': 0,
    'name': 'インパルス Y8',
  },
  {
    'level': 8,
    'name': 'Y10インパルス',
  },
  {
    'level': 30,
    'name': 'Y11インパルス',
  },
  {
    'level': 48,
    'name': 'YA20インパルス',
  },
  {
    'level': 76,
    'name': 'YA21インパルス',
  },
  {
    'level': 3,
    'name': 'Y9 エアインパルス',
  },
  {
    'level': 13,
    'name': 'Y10対空インパルス',
  },
  {
    'level': 43,
    'name': 'Y11対空インパルス',
  },
  {
    'level': 63,
    'name': 'YDX対空インパルス',
  },
  {
    'level': 21,
    'name': 'Y10ワイド・インパルス',
  },
  {
    'level': 71,
    'name': 'YDXストライク・インパルス',
  },
  {
    'level': 11,
    'name': 'ZER-GUN',
  },
  {
    'level': 46,
    'name': 'ZERA-GUN',
  },
  {
    'level': 63,
    'name': 'ZE-GUN10',
  },
  {
    'level': 79,
    'name': 'ZEXR-GUN',
  },
  {
    'level': 2,
    'name': 'FZ-GUN',
  },
  {
    'level': 7,
    'name': 'FZ-GUN2',
  },
  {
    'level': 16,
    'name': 'FZ-GUN D',
  },
  {
    'level': 35,
    'name': 'FZ-GUN4',
  },
  {
    'level': 52,
    'name': 'FZ-GUN MD',
  },
  {
    'level': 66,
    'name': 'FZ-GUN MDX',
  },
  {
    'level': 88,
    'name': 'FZ-GUN LE',
  },
  {
    'level': 19,
    'name': 'ZEスナイパー',
  },
  {
    'level': 26,
    'name': 'ZEランチャー',
  },
  {
    'level': 72,
    'name': 'ZEXランチャー',
  },
  {
    'level': 8,
    'name': 'リクルーター〔白上フブキ〕',
  },
  {
    'level': 8,
    'name': 'リクルーター〔百鬼あやめ〕',
  },
  {
    'level': 8,
    'name': 'リクルーター〔大神ミオ〕',
  },
  // 特殊装備
  {
    'level': 0,
    'name': '軽量プロテクター',
  },
  {
    'level': 1,
    'name': 'ソリッドプロテクター',
  },
  {
    'level': 5,
    'name': 'ハイブリッドプロテクター',
  },
  {
    'level': 16,
    'name': '軽量プロテクターE2',
  },
  {
    'level': 37,
    'name': 'ハイブリッドプロテクターE2',
  },
  {
    'level': 55,
    'name': '軽量プロテクターE3',
  },
  {
    'level': 82,
    'name': 'ハイブリッドプロテクターE9',
  },
  {
    'level': 1,
    'name': 'リキッドアーマー',
  },
  {
    'level': 7,
    'name': '軽量リキッドアーマー',
  },
  {
    'level': 20,
    'name': 'パーフェクト・リキッドアーマー',
  },
  {
    'level': 30,
    'name': 'ハイブリッド・リキッドアーマー',
  },
  {
    'level': 47,
    'name': '軽量リキッドアーマーE2',
  },
  {
    'level': 73,
    'name': '軽量リキッドアーマーE3',
  },
  {
    'level': 11,
    'name': 'アンダーアシスト',
  },
  {
    'level': 42,
    'name': 'アンダーアシストE2',
  },
  {
    'level': 67,
    'name': 'アンダーアシストE3',
  },
  {
    'level': 35,
    'name': '耐爆スーツ',
  },
  {
    'level': 60,
    'name': 'ハイブリッド耐爆スーツ',
  },
  {
    'level': 3,
    'name': '多重ロックオン装置L1',
  },
  {
    'level': 17,
    'name': '多重ロックオン装置L2',
  },
  {
    'level': 40,
    'name': '多重ロックオン装置L3',
  },
  {
    'level': 70,
    'name': '多重ロックオン装置LX',
  },
  {
    'level': 9,
    'name': 'レーダー支援システム',
  },
  {
    'level': 32,
    'name': 'E2レーダー支援システム',
  },
  {
    'level': 57,
    'name': 'E3レーダー支援システム',
  },
  {
    'level': 78,
    'name': 'EXレーダー支援システム',
  },
  {
    'level': 2,
    'name': '救護支援装備1',
  },
  {
    'level': 15,
    'name': '救護支援装備2',
  },
  {
    'level': 35,
    'name': '救護支援装備3',
  },
  {
    'level': 62,
    'name': '救護支援装備4',
  },
  {
    'level': 80,
    'name': '救護支援装備5',
  },
  {
    'level': 1,
    'name': '探知機1型',
  },
  {
    'level': 13,
    'name': '探知機2型',
  },
  {
    'level': 27,
    'name': '探知機3型',
  },
  {
    'level': 45,
    'name': '探知機4型',
  },
  {
    'level': 66,
    'name': '探知機5型',
  },
  {
    'level': 6,
    'name': 'ブラッカーE1',
  },
  {
    'level': 6,
    'name': 'ブラッカー ナンバー6',
  },
  {
    'level': 20,
    'name': 'バリアスTZ1',
  },
  {
    'level': 42,
    'name': 'バリアスTZ2',
  },
  {
    'level': 60,
    'name': 'バリアスTZ2E',
  },
  {
    'level': 90,
    'name': 'バリアスTZ3',
  },
  {
    'level': 10,
    'name': 'イプシロン自走レールガン',
  },
  {
    'level': 19,
    'name': 'イプシロン自走レールガンM2',
  },
  {
    'level': 30,
    'name': 'メナス自走レールガン',
  },
  {
    'level': 41,
    'name': 'メナス自走レールガンM2',
  },
  {
    'level': 55,
    'name': 'メナス4D自走レールガン',
  },
  {
    'level': 69,
    'name': 'イプシロンブラスト プロトレールガン',
  },
  {
    'level': 84,
    'name': 'イプシロンブラスト自走レールガン',
  },
  {
    'level': 12,
    'name': 'EMC',
  },
  {
    'level': 62,
    'name': 'EMCS',
  },
  {
    'level': 87,
    'name': 'EMCX',
  },
  {
    'level': 3,
    'name': 'KG6ケブラー',
  },
  {
    'level': 13,
    'name': 'KG6ケブラーE',
  },
  {
    'level': 30,
    'name': 'KG6ケブラーF',
  },
  {
    'level': 62,
    'name': 'KG6ケブラーYE',
  },
  {
    'level': 80,
    'name': 'KG6ケブラーYF',
  },
  {
    'level': 11,
    'name': 'N9エウロス',
  },
  {
    'level': 15,
    'name': 'EF31ネレイド',
  },
  {
    'level': 36,
    'name': 'EF31ネレイド2',
  },
  {
    'level': 56,
    'name': 'EF31ファイアーネレイド',
  },
  {
    'level': 70,
    'name': 'EF31ネレイドS',
  },
  {
    'level': 83,
    'name': 'EF31ネレイド エンジェル',
  },
  {
    'level': 17,
    'name': 'HU04ブルート',
  },
  {
    'level': 38,
    'name': 'HU04ブルート ヘルフレイム',
  },
  {
    'level': 63,
    'name': 'HU04ブルートD7',
  },
  {
    'level': 81,
    'name': 'HU04ブルートSA9',
  },
  {
    'level': 21,
    'name': 'ヘロンYG10',
  },
  {
    'level': 42,
    'name': 'ヘロンYG10E',
  },
  {
    'level': 65,
    'name': 'ヘロンYG20',
  },
  {
    'level': 87,
    'name': 'ヘロンYG20E',
  },
  {
    'level': 3,
    'name': 'フリージャー1',
  },
  {
    'level': 12,
    'name': 'フリージャー ナンバー6',
  },
  {
    'level': 17,
    'name': 'フリージャー タイプ2',
  },
  {
    'level': 28,
    'name': 'フリージャー・マッドカスタム',
  },
  {
    'level': 41,
    'name': 'フリージャー タイプ3',
  },
  {
    'level': 57,
    'name': 'フリージャー・ウォーカスタム',
  },
  {
    'level': 61,
    'name': 'フリージャー タイプX',
  },
  {
    'level': 63,
    'name': 'フリージャー・ヘルカスタム',
  },
  {
    'level': 76,
    'name': 'フリージャー タイプZ',
  },
];

(async () => {
  for (const weapon of weapons) {
    console.log(`Inserting ${weapon.name}`);
    await weaponBase.insert({
      ...weapon,
      drops: [],
      category: WeaponCategory.ranger,
    });
  }
})().then(() => {
  console.log('Done');
});
