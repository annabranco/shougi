import {
  OUSHOU,
  KINSHOU,
  GINSHOU,
  KEIMA,
  HISHA,
  KAKUGYOU,
  KYOUSHA,
  FUHYOU,
  GYOKUSHOU,
  RYUUOO,
  RYUUMA,
  NARIGIN,
  NARIKEI,
  NARIKYOU,
  TOKIN
} from '../../database';
import { WHITE, BLACK } from '../constants';

/**
 * WHITE TEAM
 */
// - Higher Rank
export const W_OUSHOU = {
  ...OUSHOU,
  id: 'ōshō',
  team: WHITE,
  initialSetup: '1-5'
};
export const W_KINSHOU_L = {
  ...KINSHOU,
  id: 'white_kinshō_L',
  team: WHITE,
  initialSetup: '1-4'
};
export const W_KINSHOU_R = {
  ...KINSHOU,
  id: 'white_kinshō_R',
  team: WHITE,
  initialSetup: '1-6'
};
// - Promotions
export const W_RYUUOO = { ...RYUUOO, id: 'white_ryūō', team: WHITE };
export const W_RYUUMA = { ...RYUUMA, id: 'white_ryūma', team: WHITE };
export const W_NARIKYOU_L = {
  ...NARIKYOU,
  id: 'white_narikyō_L',
  team: WHITE
};
export const W_NARIKYOU_R = {
  ...NARIKYOU,
  id: 'white_narikyō_R',
  team: WHITE
};
export const W_NARIKEI_L = { ...NARIKEI, id: 'white_narikei_L', team: WHITE };
export const W_NARIKEI_R = { ...NARIKEI, id: 'white_narikei_R', team: WHITE };
export const W_NARIGIN_L = { ...NARIGIN, id: 'white_narigin_L', team: WHITE };
export const W_NARIGIN_R = { ...NARIGIN, id: 'white_narigin_R', team: WHITE };
export const W_TOKIN_1 = { ...TOKIN, id: 'white_tokin_1', team: WHITE };
export const W_TOKIN_2 = { ...TOKIN, id: 'white_tokin_2', team: WHITE };
export const W_TOKIN_3 = { ...TOKIN, id: 'white_tokin_3', team: WHITE };
export const W_TOKIN_4 = { ...TOKIN, id: 'white_tokin_4', team: WHITE };
export const W_TOKIN_5 = { ...TOKIN, id: 'white_tokin_5', team: WHITE };
export const W_TOKIN_6 = { ...TOKIN, id: 'white_tokin_6', team: WHITE };
export const W_TOKIN_7 = { ...TOKIN, id: 'white_tokin_7', team: WHITE };
export const W_TOKIN_8 = { ...TOKIN, id: 'white_tokin_8', team: WHITE };
export const W_TOKIN_9 = { ...TOKIN, id: 'white_tokin_9', team: WHITE };
// - Regular Ranks
export const W_HISHA = {
  ...HISHA,
  promotion: W_RYUUOO,
  id: 'white_hisha',
  team: WHITE,
  initialSetup: '2-8'
};
export const W_KAKUGYOU = {
  ...KAKUGYOU,
  promotion: W_RYUUMA,
  id: 'white_kakugyō',
  team: WHITE,
  initialSetup: '2-2'
};
export const W_KYOUSHA_L = {
  ...KYOUSHA,
  promotion: W_NARIKYOU_L,
  id: 'white_kyōsha_L',
  team: WHITE,
  initialSetup: '1-1'
};
export const W_KYOUSHA_R = {
  ...KYOUSHA,
  promotion: W_NARIKYOU_R,
  id: 'white_kyōsha_R',
  team: WHITE,
  initialSetup: '1-9'
};
export const W_KEIMA_L = {
  ...KEIMA,
  promotion: W_NARIKEI_L,
  id: 'white_keima_L',
  team: WHITE,
  initialSetup: '1-2'
};
export const W_KEIMA_R = {
  ...KEIMA,
  promotion: W_NARIKEI_R,
  id: 'white_keima_R',
  team: WHITE,
  initialSetup: '1-8'
};
export const W_GINSHOU_L = {
  ...GINSHOU,
  promotion: W_NARIGIN_L,
  id: 'white_ginshō_L',
  team: WHITE,
  initialSetup: '1-3'
};
export const W_GINSHOU_R = {
  ...GINSHOU,
  promotion: W_NARIGIN_R,
  id: 'white_ginshō_R',
  team: WHITE,
  initialSetup: '1-7'
};
export const W_FUHYOU_1 = {
  ...FUHYOU,
  promotion: W_TOKIN_1,
  id: 'white_fuhyō_1',
  team: WHITE,
  initialSetup: '3-1'
};
export const W_FUHYOU_2 = {
  ...FUHYOU,
  promotion: W_TOKIN_2,
  id: 'white_fuhyō_2',
  team: WHITE,
  initialSetup: '3-2'
};
export const W_FUHYOU_3 = {
  ...FUHYOU,
  promotion: W_TOKIN_3,
  id: 'white_fuhyō_3',
  team: WHITE,
  initialSetup: '3-3'
};
export const W_FUHYOU_4 = {
  ...FUHYOU,
  promotion: W_TOKIN_4,
  id: 'white_fuhyō_4',
  team: WHITE,
  initialSetup: '3-4'
};
export const W_FUHYOU_5 = {
  ...FUHYOU,
  promotion: W_TOKIN_5,
  id: 'white_fuhyō_5',
  team: WHITE,
  initialSetup: '3-5'
};
export const W_FUHYOU_6 = {
  ...FUHYOU,
  promotion: W_TOKIN_6,
  id: 'white_fuhyō_6',
  team: WHITE,
  initialSetup: '3-6'
};
export const W_FUHYOU_7 = {
  ...FUHYOU,
  promotion: W_TOKIN_7,
  id: 'white_fuhyō_7',
  team: WHITE,
  initialSetup: '3-7'
};
export const W_FUHYOU_8 = {
  ...FUHYOU,
  promotion: W_TOKIN_8,
  id: 'white_fuhyō_8',
  team: WHITE,
  initialSetup: '3-8'
};
export const W_FUHYOU_9 = {
  ...FUHYOU,
  promotion: W_TOKIN_9,
  id: 'white_fuhyō_9',
  team: WHITE,
  initialSetup: '3-9'
};

/**
 * BLACK TEAM
 */
// - Higher Rank
export const B_GYOKUSHOU = {
  ...GYOKUSHOU,
  id: 'gyokushō',
  team: BLACK,
  initialSetup: '9-5'
};
export const B_KINSHOU_L = {
  ...KINSHOU,
  id: 'black_kinshō_L',
  team: BLACK,
  initialSetup: '9-6'
};
export const B_KINSHOU_R = {
  ...KINSHOU,
  id: 'black_kinshō_R',
  team: BLACK,
  initialSetup: '9-4'
};
// - Promotions
export const B_RYUUOO = { ...RYUUOO, id: 'black_ryūō', team: BLACK };
export const B_RYUUMA = { ...RYUUMA, id: 'black_ryūma', team: BLACK };
export const B_NARIKYOU_L = {
  ...NARIKYOU,
  id: 'black_narikyō_L',
  team: BLACK
};
export const B_NARIKYOU_R = {
  ...NARIKYOU,
  id: 'black_narikyō_R',
  team: BLACK
};
export const B_NARIKEI_L = { ...NARIKEI, id: 'black_narikei_L', team: BLACK };
export const B_NARIKEI_R = { ...NARIKEI, id: 'black_narikei_R', team: BLACK };
export const B_NARIGIN_L = { ...NARIGIN, id: 'black_narigin_L', team: BLACK };
export const B_NARIGIN_R = { ...NARIGIN, id: 'black_narigin_R', team: BLACK };
export const B_TOKIN_1 = { ...TOKIN, id: 'black_tokin_1', team: BLACK };
export const B_TOKIN_2 = { ...TOKIN, id: 'black_tokin_2', team: BLACK };
export const B_TOKIN_3 = { ...TOKIN, id: 'black_tokin_3', team: BLACK };
export const B_TOKIN_4 = { ...TOKIN, id: 'black_tokin_4', team: BLACK };
export const B_TOKIN_5 = { ...TOKIN, id: 'black_tokin_5', team: BLACK };
export const B_TOKIN_6 = { ...TOKIN, id: 'black_tokin_6', team: BLACK };
export const B_TOKIN_7 = { ...TOKIN, id: 'black_tokin_7', team: BLACK };
export const B_TOKIN_8 = { ...TOKIN, id: 'black_tokin_8', team: BLACK };
export const B_TOKIN_9 = { ...TOKIN, id: 'black_tokin_9', team: BLACK };
// - Regular Ranks
export const B_HISHA = {
  ...HISHA,
  promotion: B_RYUUOO,
  id: 'black_hisha',
  team: BLACK,
  initialSetup: '8-2'
};
export const B_KAKUGYOU = {
  ...KAKUGYOU,
  promotion: B_RYUUMA,
  id: 'black_kakugyō',
  team: BLACK,
  initialSetup: '8-8'
};
export const B_KYOUSHA_L = {
  ...KYOUSHA,
  promotion: B_NARIKYOU_L,
  id: 'black_kyōsha_L',
  team: BLACK,
  initialSetup: '9-9'
};
export const B_KYOUSHA_R = {
  ...KYOUSHA,
  promotion: B_NARIKYOU_R,
  id: 'black_kyōsha_R',
  team: BLACK,
  initialSetup: '9-1'
};
export const B_KEIMA_L = {
  ...KEIMA,
  promotion: B_NARIKEI_L,
  id: 'black_keima_L',
  team: BLACK,
  initialSetup: '9-8'
};
export const B_KEIMA_R = {
  ...KEIMA,
  promotion: B_NARIKEI_R,
  id: 'black_keima_R',
  team: BLACK,
  initialSetup: '9-2'
};
export const B_GINSHOU_L = {
  ...GINSHOU,
  promotion: B_NARIGIN_L,
  id: 'black_ginshō_L',
  team: BLACK,
  initialSetup: '9-7'
};
export const B_GINSHOU_R = {
  ...GINSHOU,
  promotion: B_NARIGIN_R,
  id: 'black_ginshō_R',
  team: BLACK,
  initialSetup: '9-3'
};
export const B_FUHYOU_1 = {
  ...FUHYOU,
  promotion: B_TOKIN_1,
  id: 'black_fuhyō_1',
  team: BLACK,
  initialSetup: '7-9'
};
export const B_FUHYOU_2 = {
  ...FUHYOU,
  promotion: B_TOKIN_2,
  id: 'black_fuhyō_2',
  team: BLACK,
  initialSetup: '7-8'
};
export const B_FUHYOU_3 = {
  ...FUHYOU,
  promotion: B_TOKIN_3,
  id: 'black_fuhyō_3',
  team: BLACK,
  initialSetup: '7-7'
};
export const B_FUHYOU_4 = {
  ...FUHYOU,
  promotion: B_TOKIN_4,
  id: 'black_fuhyō_4',
  team: BLACK,
  initialSetup: '7-6'
};
export const B_FUHYOU_5 = {
  ...FUHYOU,
  promotion: B_TOKIN_5,
  id: 'black_fuhyō_5',
  team: BLACK,
  initialSetup: '7-5'
};
export const B_FUHYOU_6 = {
  ...FUHYOU,
  promotion: B_TOKIN_6,
  id: 'black_fuhyō_6',
  team: BLACK,
  initialSetup: '7-4'
};
export const B_FUHYOU_7 = {
  ...FUHYOU,
  promotion: B_TOKIN_7,
  id: 'black_fuhyō_7',
  team: BLACK,
  initialSetup: '7-3'
};
export const B_FUHYOU_8 = {
  ...FUHYOU,
  promotion: B_TOKIN_8,
  id: 'black_fuhyō_8',
  team: BLACK,
  initialSetup: '7-2'
};
export const B_FUHYOU_9 = {
  ...FUHYOU,
  promotion: B_TOKIN_9,
  id: 'black_fuhyō_9',
  team: BLACK,
  initialSetup: '7-1'
};

export const ALL_PIECES = {
  white: [
    W_OUSHOU,
    W_KINSHOU_L,
    W_KINSHOU_R,
    W_RYUUOO,
    W_RYUUMA,
    W_NARIKYOU_L,
    W_NARIKYOU_R,
    W_NARIKEI_L,
    W_NARIKEI_R,
    W_NARIGIN_L,
    W_NARIGIN_R,
    W_TOKIN_1,
    W_TOKIN_2,
    W_TOKIN_3,
    W_TOKIN_4,
    W_TOKIN_5,
    W_TOKIN_6,
    W_TOKIN_7,
    W_TOKIN_8,
    W_TOKIN_9,
    W_HISHA,
    W_KAKUGYOU,
    W_KYOUSHA_L,
    W_KYOUSHA_R,
    W_KEIMA_L,
    W_KEIMA_R,
    W_GINSHOU_L,
    W_GINSHOU_R,
    W_FUHYOU_1,
    W_FUHYOU_2,
    W_FUHYOU_3,
    W_FUHYOU_4,
    W_FUHYOU_5,
    W_FUHYOU_6,
    W_FUHYOU_7,
    W_FUHYOU_8,
    W_FUHYOU_9
  ],
  black: [
    B_GYOKUSHOU,
    B_KINSHOU_L,
    B_KINSHOU_R,
    B_RYUUOO,
    B_RYUUMA,
    B_NARIKYOU_L,
    B_NARIKYOU_R,
    B_NARIKEI_L,
    B_NARIKEI_R,
    B_NARIGIN_L,
    B_NARIGIN_R,
    B_TOKIN_1,
    B_TOKIN_2,
    B_TOKIN_3,
    B_TOKIN_4,
    B_TOKIN_5,
    B_TOKIN_6,
    B_TOKIN_7,
    B_TOKIN_8,
    B_TOKIN_9,
    B_HISHA,
    B_KAKUGYOU,
    B_KYOUSHA_L,
    B_KYOUSHA_R,
    B_KEIMA_L,
    B_KEIMA_R,
    B_GINSHOU_L,
    B_GINSHOU_R,
    B_FUHYOU_1,
    B_FUHYOU_2,
    B_FUHYOU_3,
    B_FUHYOU_4,
    B_FUHYOU_5,
    B_FUHYOU_6,
    B_FUHYOU_7,
    B_FUHYOU_8,
    B_FUHYOU_9
  ]
};
