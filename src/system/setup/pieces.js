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

/**
 * WHITE TEAM
 */
// - Higher Rank
export const W_OUSHOU = { ...OUSHOU, id: 'ōshō', team: 'white' };
export const W_KINSHOU_L = { ...KINSHOU, id: 'white_kinshō_L', team: 'white' };
export const W_KINSHOU_R = { ...KINSHOU, id: 'white_kinshō_R', team: 'white' };
// - Promotions
export const W_RYUUOO = { ...RYUUOO, id: 'white_ryūō', team: 'white' };
export const W_RYUUMA = { ...RYUUMA, id: 'white_ryūma', team: 'white' };
export const W_NARIKYOU_L = {
  ...NARIKYOU,
  id: 'white_narikyō_L',
  team: 'white'
};
export const W_NARIKYOU_R = {
  ...NARIKYOU,
  id: 'white_narikyō_R',
  team: 'white'
};
export const W_NARIKEI_L = { ...NARIKEI, id: 'white_narikei_L', team: 'white' };
export const W_NARIKEI_R = { ...NARIKEI, id: 'white_narikei_R', team: 'white' };
export const W_NARIGIN_L = { ...NARIGIN, id: 'white_narigin_L', team: 'white' };
export const W_NARIGIN_R = { ...NARIGIN, id: 'white_narigin_R', team: 'white' };
export const W_TOKIN_1 = { ...TOKIN, id: 'white_tokin_1', team: 'white' };
export const W_TOKIN_2 = { ...TOKIN, id: 'white_tokin_2', team: 'white' };
export const W_TOKIN_3 = { ...TOKIN, id: 'white_tokin_3', team: 'white' };
export const W_TOKIN_4 = { ...TOKIN, id: 'white_tokin_4', team: 'white' };
export const W_TOKIN_5 = { ...TOKIN, id: 'white_tokin_5', team: 'white' };
export const W_TOKIN_6 = { ...TOKIN, id: 'white_tokin_6', team: 'white' };
export const W_TOKIN_7 = { ...TOKIN, id: 'white_tokin_7', team: 'white' };
export const W_TOKIN_8 = { ...TOKIN, id: 'white_tokin_8', team: 'white' };
export const W_TOKIN_9 = { ...TOKIN, id: 'white_tokin_9', team: 'white' };
// - Regular Ranks
export const W_HISHA = {
  ...HISHA,
  promotion: W_RYUUOO,
  id: 'white_hisha',
  team: 'white'
};
export const W_KAKUGYOU = {
  ...KAKUGYOU,
  promotion: W_RYUUMA,
  id: 'white_kakugyō',
  team: 'white'
};
export const W_KYOUSHA_L = {
  ...KYOUSHA,
  promotion: W_NARIKYOU_L,
  id: 'white_kyōsha_L',
  team: 'white'
};
export const W_KYOUSHA_R = {
  ...KYOUSHA,
  promotion: W_NARIKYOU_R,
  id: 'white_kyōsha_R',
  team: 'white'
};
export const W_KEIMA_L = {
  ...KEIMA,
  promotion: W_NARIKEI_L,
  id: 'white_keima_L',
  team: 'white'
};
export const W_KEIMA_R = {
  ...KEIMA,
  promotion: W_NARIKEI_R,
  id: 'white_keima_R',
  team: 'white'
};
export const W_GINSHOU_L = {
  ...GINSHOU,
  promotion: W_NARIGIN_L,
  id: 'white_ginshō_L',
  team: 'white'
};
export const W_GINSHOU_R = {
  ...GINSHOU,
  promotion: W_NARIGIN_R,
  id: 'white_ginshō_R',
  team: 'white'
};
export const W_FUHYOU_1 = {
  ...FUHYOU,
  promotion: W_TOKIN_1,
  id: 'white_fuhyō_1',
  team: 'white'
};
export const W_FUHYOU_2 = {
  ...FUHYOU,
  promotion: W_TOKIN_2,
  id: 'white_fuhyō_2',
  team: 'white'
};
export const W_FUHYOU_3 = {
  ...FUHYOU,
  promotion: W_TOKIN_3,
  id: 'white_fuhyō_3',
  team: 'white'
};
export const W_FUHYOU_4 = {
  ...FUHYOU,
  promotion: W_TOKIN_4,
  id: 'white_fuhyō_4',
  team: 'white'
};
export const W_FUHYOU_5 = {
  ...FUHYOU,
  promotion: W_TOKIN_5,
  id: 'white_fuhyō_5',
  team: 'white'
};
export const W_FUHYOU_6 = {
  ...FUHYOU,
  promotion: W_TOKIN_6,
  id: 'white_fuhyō_6',
  team: 'white'
};
export const W_FUHYOU_7 = {
  ...FUHYOU,
  promotion: W_TOKIN_7,
  id: 'white_fuhyō_7',
  team: 'white'
};
export const W_FUHYOU_8 = {
  ...FUHYOU,
  promotion: W_TOKIN_8,
  id: 'white_fuhyō_8',
  team: 'white'
};
export const W_FUHYOU_9 = {
  ...FUHYOU,
  promotion: W_TOKIN_9,
  id: 'white_fuhyō_9',
  team: 'white'
};

/**
 * BLACK TEAM
 */
// - Higher Rank
export const B_GYOKUSHOU = { ...GYOKUSHOU, id: 'gyokushō', team: 'black' };
export const B_KINSHOU_L = { ...KINSHOU, id: 'black_kinshō_L', team: 'black' };
export const B_KINSHOU_R = { ...KINSHOU, id: 'black_kinshō_R', team: 'black' };
// - Promotions
export const B_RYUUOO = { ...RYUUOO, id: 'black_ryūō', team: 'black' };
export const B_RYUUMA = { ...RYUUMA, id: 'black_ryūma', team: 'black' };
export const B_NARIKYOU_L = {
  ...NARIKYOU,
  id: 'black_narikyō_L',
  team: 'black'
};
export const B_NARIKYOU_R = {
  ...NARIKYOU,
  id: 'black_narikyō_R',
  team: 'black'
};
export const B_NARIKEI_L = { ...NARIKEI, id: 'black_narikei_L', team: 'black' };
export const B_NARIKEI_R = { ...NARIKEI, id: 'black_narikei_R', team: 'black' };
export const B_NARIGIN_L = { ...NARIGIN, id: 'black_narigin_L', team: 'black' };
export const B_NARIGIN_R = { ...NARIGIN, id: 'black_narigin_R', team: 'black' };
export const B_TOKIN_1 = { ...TOKIN, id: 'black_tokin_1', team: 'black' };
export const B_TOKIN_2 = { ...TOKIN, id: 'black_tokin_2', team: 'black' };
export const B_TOKIN_3 = { ...TOKIN, id: 'black_tokin_3', team: 'black' };
export const B_TOKIN_4 = { ...TOKIN, id: 'black_tokin_4', team: 'black' };
export const B_TOKIN_5 = { ...TOKIN, id: 'black_tokin_5', team: 'black' };
export const B_TOKIN_6 = { ...TOKIN, id: 'black_tokin_6', team: 'black' };
export const B_TOKIN_7 = { ...TOKIN, id: 'black_tokin_7', team: 'black' };
export const B_TOKIN_8 = { ...TOKIN, id: 'black_tokin_8', team: 'black' };
export const B_TOKIN_9 = { ...TOKIN, id: 'black_tokin_9', team: 'black' };
// - Regular Ranks
export const B_HISHA = {
  ...HISHA,
  promotion: B_RYUUOO,
  id: 'black_hisha',
  team: 'black'
};
export const B_KAKUGYOU = {
  ...KAKUGYOU,
  promotion: B_RYUUMA,
  id: 'black_kakugyō',
  team: 'black'
};
export const B_KYOUSHA_L = {
  ...KYOUSHA,
  promotion: B_NARIKYOU_L,
  id: 'black_kyōsha_L',
  team: 'black'
};
export const B_KYOUSHA_R = {
  ...KYOUSHA,
  promotion: B_NARIKYOU_R,
  id: 'black_kyōsha_R',
  team: 'black'
};
export const B_KEIMA_L = {
  ...KEIMA,
  promotion: B_NARIKEI_L,
  id: 'black_keima_L',
  team: 'black'
};
export const B_KEIMA_R = {
  ...KEIMA,
  promotion: B_NARIKEI_R,
  id: 'black_keima_R',
  team: 'black'
};
export const B_GINSHOU_L = {
  ...GINSHOU,
  promotion: B_NARIGIN_L,
  id: 'black_ginshō_L',
  team: 'black'
};
export const B_GINSHOU_R = {
  ...GINSHOU,
  promotion: B_NARIGIN_R,
  id: 'black_ginshō_R',
  team: 'black'
};
export const B_FUHYOU_1 = {
  ...FUHYOU,
  promotion: B_TOKIN_1,
  id: 'black_fuhyō_1',
  team: 'black'
};
export const B_FUHYOU_2 = {
  ...FUHYOU,
  promotion: B_TOKIN_2,
  id: 'black_fuhyō_2',
  team: 'black'
};
export const B_FUHYOU_3 = {
  ...FUHYOU,
  promotion: B_TOKIN_3,
  id: 'black_fuhyō_3',
  team: 'black'
};
export const B_FUHYOU_4 = {
  ...FUHYOU,
  promotion: B_TOKIN_4,
  id: 'black_fuhyō_4',
  team: 'black'
};
export const B_FUHYOU_5 = {
  ...FUHYOU,
  promotion: B_TOKIN_5,
  id: 'black_fuhyō_5',
  team: 'black'
};
export const B_FUHYOU_6 = {
  ...FUHYOU,
  promotion: B_TOKIN_6,
  id: 'black_fuhyō_6',
  team: 'black'
};
export const B_FUHYOU_7 = {
  ...FUHYOU,
  promotion: B_TOKIN_7,
  id: 'black_fuhyō_7',
  team: 'black'
};
export const B_FUHYOU_8 = {
  ...FUHYOU,
  promotion: B_TOKIN_8,
  id: 'black_fuhyō_8',
  team: 'black'
};
export const B_FUHYOU_9 = {
  ...FUHYOU,
  promotion: B_TOKIN_9,
  id: 'black_fuhyō_9',
  team: 'black'
};
