import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const records = [
    {
      'level': 0,
      'name': 'PA-11 Broken',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'PA-11LS',
      'category': 'RANGER',
    },
    {
      'level': 5,
      'name': 'PA-11SLS',
      'category': 'RANGER',
    },
    {
      'level': 6,
      'name': 'T1ストーク',
      'category': 'RANGER',
    },
    {
      'level': 14,
      'name': 'T1ストークS',
      'category': 'RANGER',
    },
    {
      'level': 19,
      'name': 'T1ストークLS',
      'category': 'RANGER',
    },
    {
      'level': 23,
      'name': 'T2ストーク',
      'category': 'RANGER',
    },
    {
      'level': 26,
      'name': 'T2ストークKF',
      'category': 'RANGER',
    },
    {
      'level': 31,
      'name': 'T3ストーク',
      'category': 'RANGER',
    },
    {
      'level': 36,
      'name': 'T3ストーク バースト',
      'category': 'RANGER',
    },
    {
      'level': 51,
      'name': 'T4ストーク',
      'category': 'RANGER',
    },
    {
      'level': 58,
      'name': 'T4ストークAE',
      'category': 'RANGER',
    },
    {
      'level': 69,
      'name': 'T4ストークMK2',
      'category': 'RANGER',
    },
    {
      'level': 75,
      'name': 'T5ストーク',
      'category': 'RANGER',
    },
    {
      'level': 84,
      'name': 'TZストーク',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'M1レイヴン',
      'category': 'RANGER',
    },
    {
      'level': 12,
      'name': 'M1レイヴンLS',
      'category': 'RANGER',
    },
    {
      'level': 22,
      'name': 'M2レイヴン',
      'category': 'RANGER',
    },
    {
      'level': 26,
      'name': 'M2Rレイヴン',
      'category': 'RANGER',
    },
    {
      'level': 31,
      'name': 'M2RERレイヴン',
      'category': 'RANGER',
    },
    {
      'level': 42,
      'name': 'MXRシリウス',
      'category': 'RANGER',
    },
    {
      'level': 55,
      'name': 'M3レイヴン',
      'category': 'RANGER',
    },
    {
      'level': 64,
      'name': 'M4レイヴン',
      'category': 'RANGER',
    },
    {
      'level': 73,
      'name': 'M3レイヴンSLS',
      'category': 'RANGER',
    },
    {
      'level': 82,
      'name': 'M5レイヴン',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'スラッガーNN1',
      'category': 'RANGER',
    },
    {
      'level': 24,
      'name': 'スラッガーNN2',
      'category': 'RANGER',
    },
    {
      'level': 34,
      'name': 'スラッガーNN3',
      'category': 'RANGER',
    },
    {
      'level': 47,
      'name': 'スラッガーNN3SLS',
      'category': 'RANGER',
    },
    {
      'level': 57,
      'name': 'X400-オーキッド',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': 'スラッガーNN4',
      'category': 'RANGER',
    },
    {
      'level': 71,
      'name': 'X500-オーキッド',
      'category': 'RANGER',
    },
    {
      'level': 80,
      'name': 'X900-オーキッド',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'ミニオンバスター',
      'category': 'RANGER',
    },
    {
      'level': 10,
      'name': 'ミニオンバスターバースト',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'ミニオンバスターMK2',
      'category': 'RANGER',
    },
    {
      'level': 39,
      'name': 'ミニオンバスターMK3',
      'category': 'RANGER',
    },
    {
      'level': 49,
      'name': 'ミニオンブラスト',
      'category': 'RANGER',
    },
    {
      'level': 76,
      'name': 'ミニオンバスターMKX',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'G&M-21S',
      'category': 'RANGER',
    },
    {
      'level': 7,
      'name': 'G&M-22S',
      'category': 'RANGER',
    },
    {
      'level': 16,
      'name': 'G&M-A23',
      'category': 'RANGER',
    },
    {
      'level': 29,
      'name': 'G&M-A23LS',
      'category': 'RANGER',
    },
    {
      'level': 44,
      'name': 'G&M-24S',
      'category': 'RANGER',
    },
    {
      'level': 67,
      'name': 'G&M-A25',
      'category': 'RANGER',
    },
    {
      'level': 79,
      'name': 'G&M-A29',
      'category': 'RANGER',
    },
    {
      'level': 20,
      'name': 'ブレイザー',
      'category': 'RANGER',
    },
    {
      'level': 68,
      'name': 'オメガ ブレイザー',
      'category': 'RANGER',
    },
    {
      'level': 95,
      'name': 'EXAブレイザー',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'スローターE20',
      'category': 'RANGER',
    },
    {
      'level': 4,
      'name': 'スローターE20LS',
      'category': 'RANGER',
    },
    {
      'level': 9,
      'name': 'スローターE21LS',
      'category': 'RANGER',
    },
    {
      'level': 14,
      'name': 'スローターE22',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'スローターE22GA',
      'category': 'RANGER',
    },
    {
      'level': 31,
      'name': 'スローターE22TS',
      'category': 'RANGER',
    },
    {
      'level': 40,
      'name': 'スローターE23',
      'category': 'RANGER',
    },
    {
      'level': 50,
      'name': 'スローターE23DA',
      'category': 'RANGER',
    },
    {
      'level': 68,
      'name': 'スローターE23SAS',
      'category': 'RANGER',
    },
    {
      'level': 85,
      'name': 'スローターEZ',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'SGN-7',
      'category': 'RANGER',
    },
    {
      'level': 17,
      'name': 'SGN-8',
      'category': 'RANGER',
    },
    {
      'level': 43,
      'name': 'SGN-K9',
      'category': 'RANGER',
    },
    {
      'level': 82,
      'name': 'SGN-K12',
      'category': 'RANGER',
    },
    {
      'level': 6,
      'name': 'G1ヘリング',
      'category': 'RANGER',
    },
    {
      'level': 52,
      'name': 'SGN-10A',
      'category': 'RANGER',
    },
    {
      'level': 65,
      'name': 'SGN-11A',
      'category': 'RANGER',
    },
    {
      'level': 24,
      'name': 'モンスーン',
      'category': 'RANGER',
    },
    {
      'level': 46,
      'name': 'モンスーンM2',
      'category': 'RANGER',
    },
    {
      'level': 60,
      'name': 'モンスーンM3',
      'category': 'RANGER',
    },
    {
      'level': 77,
      'name': 'モンスーンMZ',
      'category': 'RANGER',
    },
    {
      'level': 11,
      'name': 'D35ブリーチャー',
      'category': 'RANGER',
    },
    {
      'level': 29,
      'name': 'D55ブリーチャー',
      'category': 'RANGER',
    },
    {
      'level': 72,
      'name': 'D79ブリーチャー',
      'category': 'RANGER',
    },
    {
      'level': 80,
      'name': 'D110ブリーチャー',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'スラッグショット',
      'category': 'RANGER',
    },
    {
      'level': 12,
      'name': 'スラッグショット2',
      'category': 'RANGER',
    },
    {
      'level': 36,
      'name': 'スラッグショット3',
      'category': 'RANGER',
    },
    {
      'level': 55,
      'name': 'スラッグショット4',
      'category': 'RANGER',
    },
    {
      'level': 74,
      'name': 'スラッグショット5',
      'category': 'RANGER',
    },
    {
      'level': 83,
      'name': 'スラッグショットZ6',
      'category': 'RANGER',
    },
    {
      'level': 45,
      'name': 'デストラクション ブレイザー',
      'category': 'RANGER',
    },
    {
      'level': 90,
      'name': 'デストラクション ブレイザーG',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'KFF50',
      'category': 'RANGER',
    },
    {
      'level': 6,
      'name': 'KFF50LS',
      'category': 'RANGER',
    },
    {
      'level': 23,
      'name': 'KFF51LS',
      'category': 'RANGER',
    },
    {
      'level': 32,
      'name': 'KFF60LS',
      'category': 'RANGER',
    },
    {
      'level': 41,
      'name': 'KFF60RE',
      'category': 'RANGER',
    },
    {
      'level': 80,
      'name': 'KFF70',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'NP3-A',
      'category': 'RANGER',
    },
    {
      'level': 17,
      'name': 'NP3-B',
      'category': 'RANGER',
    },
    {
      'level': 49,
      'name': 'NP3-C',
      'category': 'RANGER',
    },
    {
      'level': 75,
      'name': 'NP4-SA',
      'category': 'RANGER',
    },
    {
      'level': 4,
      'name': '試作型ライサンダー',
      'category': 'RANGER',
    },
    {
      'level': 19,
      'name': 'ライサンダー',
      'category': 'RANGER',
    },
    {
      'level': 56,
      'name': 'ライサンダーF',
      'category': 'RANGER',
    },
    {
      'level': 82,
      'name': 'ライサンダーZ',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'MR98ファング Broken',
      'category': 'RANGER',
    },
    {
      'level': 10,
      'name': 'MR98ファング',
      'category': 'RANGER',
    },
    {
      'level': 34,
      'name': 'MR99ファング',
      'category': 'RANGER',
    },
    {
      'level': 69,
      'name': 'MR100ファング',
      'category': 'RANGER',
    },
    {
      'level': 90,
      'name': 'MR111ファング',
      'category': 'RANGER',
    },
    {
      'level': 12,
      'name': 'ドゥンケルN202',
      'category': 'RANGER',
    },
    {
      'level': 27,
      'name': 'ドゥンケルN213',
      'category': 'RANGER',
    },
    {
      'level': 47,
      'name': 'ドゥンケルN224',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': 'ドゥンケルN236',
      'category': 'RANGER',
    },
    {
      'level': 37,
      'name': 'ターミガンHA1',
      'category': 'RANGER',
    },
    {
      'level': 66,
      'name': 'ターミガンHA2',
      'category': 'RANGER',
    },
    {
      'level': 84,
      'name': 'ターミガンHAZ',
      'category': 'RANGER',
    },
    {
      'level': 14,
      'name': 'イーグルG1',
      'category': 'RANGER',
    },
    {
      'level': 30,
      'name': 'イーグルG2',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'フラウンダー4',
      'category': 'RANGER',
    },
    {
      'level': 25,
      'name': 'フラウンダー8',
      'category': 'RANGER',
    },
    {
      'level': 72,
      'name': 'フラウンダー12',
      'category': 'RANGER',
    },
    {
      'level': 45,
      'name': 'パイロンA1',
      'category': 'RANGER',
    },
    {
      'level': 52,
      'name': 'ペネトレイター',
      'category': 'RANGER',
    },
    {
      'level': 77,
      'name': 'ペネトレイターF',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'グラントM31',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'グラントM32',
      'category': 'RANGER',
    },
    {
      'level': 11,
      'name': 'グラントM33',
      'category': 'RANGER',
    },
    {
      'level': 20,
      'name': 'グラントM40',
      'category': 'RANGER',
    },
    {
      'level': 32,
      'name': 'グラントM41',
      'category': 'RANGER',
    },
    {
      'level': 41,
      'name': 'グラントMA50',
      'category': 'RANGER',
    },
    {
      'level': 55,
      'name': 'グラントM42S',
      'category': 'RANGER',
    },
    {
      'level': 73,
      'name': 'グラントMT51',
      'category': 'RANGER',
    },
    {
      'level': 81,
      'name': 'グラントMTX',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'レパード誘導ロケット',
      'category': 'RANGER',
    },
    {
      'level': 18,
      'name': 'レパード誘導ロケットM2',
      'category': 'RANGER',
    },
    {
      'level': 28,
      'name': 'レパード誘導ロケットM3',
      'category': 'RANGER',
    },
    {
      'level': 37,
      'name': 'アイビス誘導ロケット',
      'category': 'RANGER',
    },
    {
      'level': 45,
      'name': 'レパード誘導ロケットM4',
      'category': 'RANGER',
    },
    {
      'level': 65,
      'name': 'レパード誘導ロケットM9',
      'category': 'RANGER',
    },
    {
      'level': 76,
      'name': 'レパード誘導ロケット零式',
      'category': 'RANGER',
    },
    {
      'level': 5,
      'name': 'ゴリアスD1',
      'category': 'RANGER',
    },
    {
      'level': 23,
      'name': 'ゴリアスD2',
      'category': 'RANGER',
    },
    {
      'level': 35,
      'name': 'ゴリアスD3',
      'category': 'RANGER',
    },
    {
      'level': 70,
      'name': 'ゴリアスDMX',
      'category': 'RANGER',
    },
    {
      'level': 80,
      'name': 'ゴリアスZD',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'カスケード0',
      'category': 'RANGER',
    },
    {
      'level': 10,
      'name': 'カスケード1',
      'category': 'RANGER',
    },
    {
      'level': 30,
      'name': 'カスケード2',
      'category': 'RANGER',
    },
    {
      'level': 50,
      'name': 'カスケード3',
      'category': 'RANGER',
    },
    {
      'level': 74,
      'name': 'カスケードFA',
      'category': 'RANGER',
    },
    {
      'level': 13,
      'name': 'E9ホーネット',
      'category': 'RANGER',
    },
    {
      'level': 24,
      'name': 'E10ホーネット',
      'category': 'RANGER',
    },
    {
      'level': 40,
      'name': 'E11ホーネット',
      'category': 'RANGER',
    },
    {
      'level': 63,
      'name': 'E12ホーネット',
      'category': 'RANGER',
    },
    {
      'level': 78,
      'name': 'E20ホーネット',
      'category': 'RANGER',
    },
    {
      'level': 15,
      'name': 'ボルケーノ6',
      'category': 'RANGER',
    },
    {
      'level': 25,
      'name': 'ボルケーノV12',
      'category': 'RANGER',
    },
    {
      'level': 58,
      'name': 'ボルケーノW20',
      'category': 'RANGER',
    },
    {
      'level': 79,
      'name': 'ボルケーノW30',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'ME1エメロード',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'ME2エメロード',
      'category': 'RANGER',
    },
    {
      'level': 17,
      'name': 'ME3エメロード',
      'category': 'RANGER',
    },
    {
      'level': 35,
      'name': 'ME4エメロード',
      'category': 'RANGER',
    },
    {
      'level': 52,
      'name': 'ME4RエメロードS',
      'category': 'RANGER',
    },
    {
      'level': 77,
      'name': 'MEX5エメロード',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'エアトータス01',
      'category': 'RANGER',
    },
    {
      'level': 7,
      'name': 'エアトータス02',
      'category': 'RANGER',
    },
    {
      'level': 43,
      'name': 'エアトータスME',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'MLRA',
      'category': 'RANGER',
    },
    {
      'level': 9,
      'name': 'MLRA-2',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'MLRA-30',
      'category': 'RANGER',
    },
    {
      'level': 47,
      'name': 'MLRA-TW',
      'category': 'RANGER',
    },
    {
      'level': 75,
      'name': 'MLRA-TF',
      'category': 'RANGER',
    },
    {
      'level': 4,
      'name': 'FORK-A15',
      'category': 'RANGER',
    },
    {
      'level': 29,
      'name': 'FORK-A20',
      'category': 'RANGER',
    },
    {
      'level': 68,
      'name': 'FORK-X20',
      'category': 'RANGER',
    },
    {
      'level': 13,
      'name': 'プロミネンスM1',
      'category': 'RANGER',
    },
    {
      'level': 23,
      'name': 'プロミネンスM2',
      'category': 'RANGER',
    },
    {
      'level': 61,
      'name': 'プロミネンスM3',
      'category': 'RANGER',
    },
    {
      'level': 82,
      'name': 'プロミネンスMA',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'グレネードランチャーUM1',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'グレネードランチャーUM2',
      'category': 'RANGER',
    },
    {
      'level': 7,
      'name': 'グレネードランチャーUM3',
      'category': 'RANGER',
    },
    {
      'level': 15,
      'name': 'グレネードランチャーUMRA',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'グレネードランチャーUM4',
      'category': 'RANGER',
    },
    {
      'level': 28,
      'name': 'グレネードランチャーUM5',
      'category': 'RANGER',
    },
    {
      'level': 46,
      'name': 'グレネードランチャーUMAX',
      'category': 'RANGER',
    },
    {
      'level': 67,
      'name': 'グレネードランチャーUMAZ',
      'category': 'RANGER',
    },
    {
      'level': 91,
      'name': 'グレネードランチャーUMFF',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'グレネードランチャーUM1-J',
      'category': 'RANGER',
    },
    {
      'level': 11,
      'name': 'グレネードランチャーUM3-J',
      'category': 'RANGER',
    },
    {
      'level': 19,
      'name': 'グレネードランチャーUM4-J',
      'category': 'RANGER',
    },
    {
      'level': 31,
      'name': '3連GランチャーBRUTEJ',
      'category': 'RANGER',
    },
    {
      'level': 41,
      'name': '3連GランチャーBRUTE',
      'category': 'RANGER',
    },
    {
      'level': 52,
      'name': '2連GランチャーCRUMBLE',
      'category': 'RANGER',
    },
    {
      'level': 5,
      'name': 'スタンピードM1',
      'category': 'RANGER',
    },
    {
      'level': 48,
      'name': 'スタンピードM2',
      'category': 'RANGER',
    },
    {
      'level': 71,
      'name': 'スタンピードXM',
      'category': 'RANGER',
    },
    {
      'level': 22,
      'name': 'スプラッシュグレネード',
      'category': 'RANGER',
    },
    {
      'level': 38,
      'name': 'スプラッシュグレネードα',
      'category': 'RANGER',
    },
    {
      'level': 25,
      'name': 'スティッキーグレネード試作型',
      'category': 'RANGER',
    },
    {
      'level': 43,
      'name': 'スティッキーグレネード',
      'category': 'RANGER',
    },
    {
      'level': 61,
      'name': 'スティッキーグレネードα',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'ヴァラトル・ナパーム',
      'category': 'RANGER',
    },
    {
      'level': 13,
      'name': 'ヴァラトル・ナパームB',
      'category': 'RANGER',
    },
    {
      'level': 39,
      'name': 'ヴァラトル・ナパームD',
      'category': 'RANGER',
    },
    {
      'level': 54,
      'name': 'ヴォルカニック・ナパーム',
      'category': 'RANGER',
    },
    {
      'level': 79,
      'name': 'ヴァラトル・ナパームZD',
      'category': 'RANGER',
    },
    {
      'level': 27,
      'name': 'フレイム・ガイザー',
      'category': 'RANGER',
    },
    {
      'level': 69,
      'name': 'フレイム・ガイザーDA',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'アシッド・シャワー試作型',
      'category': 'RANGER',
    },
    {
      'level': 20,
      'name': 'アシッドガン',
      'category': 'RANGER',
    },
    {
      'level': 38,
      'name': 'アシッド・シャワー',
      'category': 'RANGER',
    },
    {
      'level': 53,
      'name': 'ワイド・アシッドガン',
      'category': 'RANGER',
    },
    {
      'level': 58,
      'name': 'スーパー・アシッドガン',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'バーナー',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': '火炎放射器',
      'category': 'RANGER',
    },
    {
      'level': 5,
      'name': '二式 火炎放射器',
      'category': 'RANGER',
    },
    {
      'level': 15,
      'name': '三式 火炎放射器',
      'category': 'RANGER',
    },
    {
      'level': 29,
      'name': '火炎放射器α',
      'category': 'RANGER',
    },
    {
      'level': 56,
      'name': '火炎砲',
      'category': 'RANGER',
    },
    {
      'level': 83,
      'name': 'マグマ砲',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'H88バウンドガン',
      'category': 'RANGER',
    },
    {
      'level': 10,
      'name': 'H89バウンドガン',
      'category': 'RANGER',
    },
    {
      'level': 33,
      'name': 'HL90バウンドガン',
      'category': 'RANGER',
    },
    {
      'level': 59,
      'name': 'HS99バウンドガン',
      'category': 'RANGER',
    },
    {
      'level': 73,
      'name': 'HX50バウンドショット',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'プロト・リバーサー',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'リバーサー',
      'category': 'RANGER',
    },
    {
      'level': 28,
      'name': 'リバーサーM2',
      'category': 'RANGER',
    },
    {
      'level': 42,
      'name': 'リバーサーM3',
      'category': 'RANGER',
    },
    {
      'level': 70,
      'name': 'リバーサーX',
      'category': 'RANGER',
    },
    {
      'level': 13,
      'name': 'リバースガン',
      'category': 'RANGER',
    },
    {
      'level': 36,
      'name': 'リバースシューターT1',
      'category': 'RANGER',
    },
    {
      'level': 48,
      'name': 'リバースボンバー',
      'category': 'RANGER',
    },
    {
      'level': 63,
      'name': 'リバースシューターT2',
      'category': 'RANGER',
    },
    {
      'level': 78,
      'name': 'リバースシューターX',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'ハイサイクル・リバーサー',
      'category': 'RANGER',
    },
    {
      'level': 51,
      'name': 'ハイサイクル・リバーサーD',
      'category': 'RANGER',
    },
    {
      'level': 81,
      'name': 'ハイサイクル・リバーサーZD',
      'category': 'RANGER',
    },
    // バックパック
    {
      'level': 0,
      'name': 'MG11',
      'category': 'RANGER',
    },
    {
      'level': 5,
      'name': 'MG12',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'MG13',
      'category': 'RANGER',
    },
    {
      'level': 14,
      'name': 'MG14',
      'category': 'RANGER',
    },
    {
      'level': 22,
      'name': 'MG15',
      'category': 'RANGER',
    },
    {
      'level': 27,
      'name': 'MG20',
      'category': 'RANGER',
    },
    {
      'level': 40,
      'name': 'MG21',
      'category': 'RANGER',
    },
    {
      'level': 48,
      'name': 'MG22',
      'category': 'RANGER',
    },
    {
      'level': 54,
      'name': 'MG30',
      'category': 'RANGER',
    },
    {
      'level': 70,
      'name': 'MG40',
      'category': 'RANGER',
    },
    {
      'level': 78,
      'name': 'MG50',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'MG11J',
      'category': 'RANGER',
    },
    {
      'level': 12,
      'name': 'MG13JA',
      'category': 'RANGER',
    },
    {
      'level': 17,
      'name': 'MG14J',
      'category': 'RANGER',
    },
    {
      'level': 38,
      'name': 'MG21J',
      'category': 'RANGER',
    },
    {
      'level': 52,
      'name': 'バウンド・グレネード',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'T5マウス',
      'category': 'RANGER',
    },
    {
      'level': 10,
      'name': 'T44マウス',
      'category': 'RANGER',
    },
    {
      'level': 20,
      'name': 'T6マウス',
      'category': 'RANGER',
    },
    {
      'level': 30,
      'name': 'TJ444マウス',
      'category': 'RANGER',
    },
    {
      'level': 55,
      'name': 'TJOマウス',
      'category': 'RANGER',
    },
    {
      'level': 72,
      'name': 'TZ6マウス',
      'category': 'RANGER',
    },
    {
      'level': 80,
      'name': 'TZ8マウス',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'DNG1',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'DNG2',
      'category': 'RANGER',
    },
    {
      'level': 41,
      'name': 'DNG3',
      'category': 'RANGER',
    },
    {
      'level': 63,
      'name': 'DNG9',
      'category': 'RANGER',
    },
    {
      'level': 76,
      'name': 'DNG10',
      'category': 'RANGER',
    },
    {
      'level': 4,
      'name': '1号弾',
      'category': 'RANGER',
    },
    {
      'level': 18,
      'name': '2号弾',
      'category': 'RANGER',
    },
    {
      'level': 25,
      'name': '3号弾',
      'category': 'RANGER',
    },
    {
      'level': 44,
      'name': '4号弾',
      'category': 'RANGER',
    },
    {
      'level': 59,
      'name': '零号弾',
      'category': 'RANGER',
    },
    {
      'level': 79,
      'name': '千号弾',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'エリアル リバーサーM0',
      'category': 'RANGER',
    },
    {
      'level': 5,
      'name': 'エリアル リバーサーM1',
      'category': 'RANGER',
    },
    {
      'level': 11,
      'name': 'エリアル リバーサーM2',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'エリアル リバーサーM3',
      'category': 'RANGER',
    },
    {
      'level': 32,
      'name': 'エリアル リバーサーM4',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': 'エリアル リバーサーM9',
      'category': 'RANGER',
    },
    {
      'level': 85,
      'name': 'エリアル リバーサーMD',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'テルミット弾',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'ナノテルミット弾',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'M2テルミット弾',
      'category': 'RANGER',
    },
    {
      'level': 34,
      'name': 'BXナノテルミット弾',
      'category': 'RANGER',
    },
    {
      'level': 45,
      'name': 'メタテルミット弾',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': 'M3テルミット弾',
      'category': 'RANGER',
    },
    {
      'level': 82,
      'name': 'M9テルミット弾',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'A60バイナリー弾',
      'category': 'RANGER',
    },
    {
      'level': 6,
      'name': 'A61バイナリー弾',
      'category': 'RANGER',
    },
    {
      'level': 18,
      'name': 'A62バイナリー弾',
      'category': 'RANGER',
    },
    {
      'level': 42,
      'name': 'A71バイナリー弾',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': 'A72バイナリー弾',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'CA20爆弾',
      'category': 'RANGER',
    },
    {
      'level': 16,
      'name': 'CA21爆弾',
      'category': 'RANGER',
    },
    {
      'level': 33,
      'name': 'CA5特殊爆弾',
      'category': 'RANGER',
    },
    {
      'level': 46,
      'name': 'CA80爆弾',
      'category': 'RANGER',
    },
    {
      'level': 66,
      'name': 'CA90爆弾',
      'category': 'RANGER',
    },
    {
      'level': 0,
      'name': 'インパルス Y8',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'Y10インパルス',
      'category': 'RANGER',
    },
    {
      'level': 30,
      'name': 'Y11インパルス',
      'category': 'RANGER',
    },
    {
      'level': 48,
      'name': 'YA20インパルス',
      'category': 'RANGER',
    },
    {
      'level': 76,
      'name': 'YA21インパルス',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'Y9 エアインパルス',
      'category': 'RANGER',
    },
    {
      'level': 13,
      'name': 'Y10対空インパルス',
      'category': 'RANGER',
    },
    {
      'level': 43,
      'name': 'Y11対空インパルス',
      'category': 'RANGER',
    },
    {
      'level': 63,
      'name': 'YDX対空インパルス',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'Y10ワイド・インパルス',
      'category': 'RANGER',
    },
    {
      'level': 71,
      'name': 'YDXストライク・インパルス',
      'category': 'RANGER',
    },
    {
      'level': 11,
      'name': 'ZER-GUN',
      'category': 'RANGER',
    },
    {
      'level': 46,
      'name': 'ZERA-GUN',
      'category': 'RANGER',
    },
    {
      'level': 63,
      'name': 'ZE-GUN10',
      'category': 'RANGER',
    },
    {
      'level': 79,
      'name': 'ZEXR-GUN',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': 'FZ-GUN',
      'category': 'RANGER',
    },
    {
      'level': 7,
      'name': 'FZ-GUN2',
      'category': 'RANGER',
    },
    {
      'level': 16,
      'name': 'FZ-GUN D',
      'category': 'RANGER',
    },
    {
      'level': 35,
      'name': 'FZ-GUN4',
      'category': 'RANGER',
    },
    {
      'level': 52,
      'name': 'FZ-GUN MD',
      'category': 'RANGER',
    },
    {
      'level': 66,
      'name': 'FZ-GUN MDX',
      'category': 'RANGER',
    },
    {
      'level': 88,
      'name': 'FZ-GUN LE',
      'category': 'RANGER',
    },
    {
      'level': 19,
      'name': 'ZEスナイパー',
      'category': 'RANGER',
    },
    {
      'level': 26,
      'name': 'ZEランチャー',
      'category': 'RANGER',
    },
    {
      'level': 72,
      'name': 'ZEXランチャー',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'リクルーター〔白上フブキ〕',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'リクルーター〔百鬼あやめ〕',
      'category': 'RANGER',
    },
    {
      'level': 8,
      'name': 'リクルーター〔大神ミオ〕',
      'category': 'RANGER',
    },
    // 特殊装備
    {
      'level': 0,
      'name': '軽量プロテクター',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'ソリッドプロテクター',
      'category': 'RANGER',
    },
    {
      'level': 5,
      'name': 'ハイブリッドプロテクター',
      'category': 'RANGER',
    },
    {
      'level': 16,
      'name': '軽量プロテクターE2',
      'category': 'RANGER',
    },
    {
      'level': 37,
      'name': 'ハイブリッドプロテクターE2',
      'category': 'RANGER',
    },
    {
      'level': 55,
      'name': '軽量プロテクターE3',
      'category': 'RANGER',
    },
    {
      'level': 82,
      'name': 'ハイブリッドプロテクターE9',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': 'リキッドアーマー',
      'category': 'RANGER',
    },
    {
      'level': 7,
      'name': '軽量リキッドアーマー',
      'category': 'RANGER',
    },
    {
      'level': 20,
      'name': 'パーフェクト・リキッドアーマー',
      'category': 'RANGER',
    },
    {
      'level': 30,
      'name': 'ハイブリッド・リキッドアーマー',
      'category': 'RANGER',
    },
    {
      'level': 47,
      'name': '軽量リキッドアーマーE2',
      'category': 'RANGER',
    },
    {
      'level': 73,
      'name': '軽量リキッドアーマーE3',
      'category': 'RANGER',
    },
    {
      'level': 11,
      'name': 'アンダーアシスト',
      'category': 'RANGER',
    },
    {
      'level': 42,
      'name': 'アンダーアシストE2',
      'category': 'RANGER',
    },
    {
      'level': 67,
      'name': 'アンダーアシストE3',
      'category': 'RANGER',
    },
    {
      'level': 35,
      'name': '耐爆スーツ',
      'category': 'RANGER',
    },
    {
      'level': 60,
      'name': 'ハイブリッド耐爆スーツ',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': '多重ロックオン装置L1',
      'category': 'RANGER',
    },
    {
      'level': 17,
      'name': '多重ロックオン装置L2',
      'category': 'RANGER',
    },
    {
      'level': 40,
      'name': '多重ロックオン装置L3',
      'category': 'RANGER',
    },
    {
      'level': 70,
      'name': '多重ロックオン装置LX',
      'category': 'RANGER',
    },
    {
      'level': 9,
      'name': 'レーダー支援システム',
      'category': 'RANGER',
    },
    {
      'level': 32,
      'name': 'E2レーダー支援システム',
      'category': 'RANGER',
    },
    {
      'level': 57,
      'name': 'E3レーダー支援システム',
      'category': 'RANGER',
    },
    {
      'level': 78,
      'name': 'EXレーダー支援システム',
      'category': 'RANGER',
    },
    {
      'level': 2,
      'name': '救護支援装備1',
      'category': 'RANGER',
    },
    {
      'level': 15,
      'name': '救護支援装備2',
      'category': 'RANGER',
    },
    {
      'level': 35,
      'name': '救護支援装備3',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': '救護支援装備4',
      'category': 'RANGER',
    },
    {
      'level': 80,
      'name': '救護支援装備5',
      'category': 'RANGER',
    },
    {
      'level': 1,
      'name': '探知機1型',
      'category': 'RANGER',
    },
    {
      'level': 13,
      'name': '探知機2型',
      'category': 'RANGER',
    },
    {
      'level': 27,
      'name': '探知機3型',
      'category': 'RANGER',
    },
    {
      'level': 45,
      'name': '探知機4型',
      'category': 'RANGER',
    },
    {
      'level': 66,
      'name': '探知機5型',
      'category': 'RANGER',
    },
    {
      'level': 6,
      'name': 'ブラッカーE1',
      'category': 'RANGER',
    },
    {
      'level': 6,
      'name': 'ブラッカー ナンバー6',
      'category': 'RANGER',
    },
    {
      'level': 20,
      'name': 'バリアスTZ1',
      'category': 'RANGER',
    },
    {
      'level': 42,
      'name': 'バリアスTZ2',
      'category': 'RANGER',
    },
    {
      'level': 60,
      'name': 'バリアスTZ2E',
      'category': 'RANGER',
    },
    {
      'level': 90,
      'name': 'バリアスTZ3',
      'category': 'RANGER',
    },
    {
      'level': 10,
      'name': 'イプシロン自走レールガン',
      'category': 'RANGER',
    },
    {
      'level': 19,
      'name': 'イプシロン自走レールガンM2',
      'category': 'RANGER',
    },
    {
      'level': 30,
      'name': 'メナス自走レールガン',
      'category': 'RANGER',
    },
    {
      'level': 41,
      'name': 'メナス自走レールガンM2',
      'category': 'RANGER',
    },
    {
      'level': 55,
      'name': 'メナス4D自走レールガン',
      'category': 'RANGER',
    },
    {
      'level': 69,
      'name': 'イプシロンブラスト プロトレールガン',
      'category': 'RANGER',
    },
    {
      'level': 84,
      'name': 'イプシロンブラスト自走レールガン',
      'category': 'RANGER',
    },
    {
      'level': 12,
      'name': 'EMC',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': 'EMCS',
      'category': 'RANGER',
    },
    {
      'level': 87,
      'name': 'EMCX',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'KG6ケブラー',
      'category': 'RANGER',
    },
    {
      'level': 13,
      'name': 'KG6ケブラーE',
      'category': 'RANGER',
    },
    {
      'level': 30,
      'name': 'KG6ケブラーF',
      'category': 'RANGER',
    },
    {
      'level': 62,
      'name': 'KG6ケブラーYE',
      'category': 'RANGER',
    },
    {
      'level': 80,
      'name': 'KG6ケブラーYF',
      'category': 'RANGER',
    },
    {
      'level': 11,
      'name': 'N9エウロス',
      'category': 'RANGER',
    },
    {
      'level': 15,
      'name': 'EF31ネレイド',
      'category': 'RANGER',
    },
    {
      'level': 36,
      'name': 'EF31ネレイド2',
      'category': 'RANGER',
    },
    {
      'level': 56,
      'name': 'EF31ファイアーネレイド',
      'category': 'RANGER',
    },
    {
      'level': 70,
      'name': 'EF31ネレイドS',
      'category': 'RANGER',
    },
    {
      'level': 83,
      'name': 'EF31ネレイド エンジェル',
      'category': 'RANGER',
    },
    {
      'level': 17,
      'name': 'HU04ブルート',
      'category': 'RANGER',
    },
    {
      'level': 38,
      'name': 'HU04ブルート ヘルフレイム',
      'category': 'RANGER',
    },
    {
      'level': 63,
      'name': 'HU04ブルートD7',
      'category': 'RANGER',
    },
    {
      'level': 81,
      'name': 'HU04ブルートSA9',
      'category': 'RANGER',
    },
    {
      'level': 21,
      'name': 'ヘロンYG10',
      'category': 'RANGER',
    },
    {
      'level': 42,
      'name': 'ヘロンYG10E',
      'category': 'RANGER',
    },
    {
      'level': 65,
      'name': 'ヘロンYG20',
      'category': 'RANGER',
    },
    {
      'level': 87,
      'name': 'ヘロンYG20E',
      'category': 'RANGER',
    },
    {
      'level': 3,
      'name': 'フリージャー1',
      'category': 'RANGER',
    },
    {
      'level': 12,
      'name': 'フリージャー ナンバー6',
      'category': 'RANGER',
    },
    {
      'level': 17,
      'name': 'フリージャー タイプ2',
      'category': 'RANGER',
    },
    {
      'level': 28,
      'name': 'フリージャー・マッドカスタム',
      'category': 'RANGER',
    },
    {
      'level': 41,
      'name': 'フリージャー タイプ3',
      'category': 'RANGER',
    },
    {
      'level': 57,
      'name': 'フリージャー・ウォーカスタム',
      'category': 'RANGER',
    },
    {
      'level': 61,
      'name': 'フリージャー タイプX',
      'category': 'RANGER',
    },
    {
      'level': 63,
      'name': 'フリージャー・ヘルカスタム',
      'category': 'RANGER',
    },
    {
      'level': 76,
      'name': 'フリージャー タイプZ',
      'category': 'RANGER',
    },
  ];

  for (const record of records) {
    await prisma.weapon.create({
      data: {
        ...record,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
