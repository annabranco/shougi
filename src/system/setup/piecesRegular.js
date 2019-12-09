import { WHITE, BLACK } from '../constants';
import {
  HISHA,
  KAKUGYOU,
  KYOUSHA,
  KEIMA,
  GINSHOU,
  FUHYOU
} from '../../database';
// eslint-disable-next-line import/no-cycle
import {
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
  B_TOKIN_9
} from './piecesPromoted';

/**
 * **** WHITE TEAM ****
 */
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
 * **** BLACK TEAM ****
 */
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
