import { WHITE, BLACK } from '../constants';
import {
  RYUUOO,
  RYUUMA,
  NARIKYOU,
  NARIKEI,
  NARIGIN,
  TOKIN
} from '../../database';
// eslint-disable-next-line import/no-cycle
import {
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
  W_FUHYOU_9,
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
} from './piecesRegular';

/**
 * **** WHITE TEAM ****
 */
export const W_RYUUOO = {
  ...RYUUOO,
  demotion: W_HISHA,
  id: 'white_ryūō',
  team: WHITE
};
export const W_RYUUMA = {
  ...RYUUMA,
  demotion: W_KAKUGYOU,
  id: 'white_ryūma',
  team: WHITE
};
export const W_NARIKYOU_L = {
  ...NARIKYOU,
  demotion: W_KYOUSHA_L,
  id: 'white_narikyō_L',
  team: WHITE
};
export const W_NARIKYOU_R = {
  ...NARIKYOU,
  demotion: W_KYOUSHA_R,
  id: 'white_narikyō_R',
  team: WHITE
};
export const W_NARIKEI_L = {
  ...NARIKEI,
  demotion: W_KEIMA_L,
  id: 'white_narikei_L',
  team: WHITE
};
export const W_NARIKEI_R = {
  ...NARIKEI,
  demotion: W_KEIMA_R,
  id: 'white_narikei_R',
  team: WHITE
};
export const W_NARIGIN_L = {
  ...NARIGIN,
  demotion: W_GINSHOU_L,
  id: 'white_narigin_L',
  team: WHITE
};
export const W_NARIGIN_R = {
  ...NARIGIN,
  demotion: W_GINSHOU_R,
  id: 'white_narigin_R',
  team: WHITE
};
export const W_TOKIN_1 = {
  ...TOKIN,
  demotion: W_FUHYOU_1,
  id: 'white_tokin_1',
  team: WHITE
};
export const W_TOKIN_2 = {
  ...TOKIN,
  demotion: W_FUHYOU_2,
  id: 'white_tokin_2',
  team: WHITE
};
export const W_TOKIN_3 = {
  ...TOKIN,
  demotion: W_FUHYOU_3,
  id: 'white_tokin_3',
  team: WHITE
};
export const W_TOKIN_4 = {
  ...TOKIN,
  demotion: W_FUHYOU_4,
  id: 'white_tokin_4',
  team: WHITE
};
export const W_TOKIN_5 = {
  ...TOKIN,
  demotion: W_FUHYOU_5,
  id: 'white_tokin_5',
  team: WHITE
};
export const W_TOKIN_6 = {
  ...TOKIN,
  demotion: W_FUHYOU_6,
  id: 'white_tokin_6',
  team: WHITE
};
export const W_TOKIN_7 = {
  ...TOKIN,
  demotion: W_FUHYOU_7,
  id: 'white_tokin_7',
  team: WHITE
};
export const W_TOKIN_8 = {
  ...TOKIN,
  demotion: W_FUHYOU_8,
  id: 'white_tokin_8',
  team: WHITE
};
export const W_TOKIN_9 = {
  ...TOKIN,
  demotion: W_FUHYOU_9,
  id: 'white_tokin_9',
  team: WHITE
};

/**
 * **** BLACK TEAM ****
 */
export const B_RYUUOO = {
  ...RYUUOO,
  demotion: B_HISHA,
  id: 'black_ryūō',
  team: BLACK
};
export const B_RYUUMA = {
  ...RYUUMA,
  demotion: B_KAKUGYOU,
  id: 'black_ryūma',
  team: BLACK
};
export const B_NARIKYOU_L = {
  ...NARIKYOU,
  demotion: B_KYOUSHA_L,
  id: 'black_narikyō_L',
  team: BLACK
};
export const B_NARIKYOU_R = {
  ...NARIKYOU,
  demotion: B_KYOUSHA_R,
  id: 'black_narikyō_R',
  team: BLACK
};
export const B_NARIKEI_L = {
  ...NARIKEI,
  demotion: B_KEIMA_L,
  id: 'black_narikei_L',
  team: BLACK
};
export const B_NARIKEI_R = {
  ...NARIKEI,
  demotion: B_KEIMA_R,
  id: 'black_narikei_R',
  team: BLACK
};
export const B_NARIGIN_L = {
  ...NARIGIN,
  demotion: B_GINSHOU_L,
  id: 'black_narigin_L',
  team: BLACK
};
export const B_NARIGIN_R = {
  ...NARIGIN,
  demotion: B_GINSHOU_R,
  id: 'black_narigin_R',
  team: BLACK
};
export const B_TOKIN_1 = {
  ...TOKIN,
  demotion: B_FUHYOU_1,
  id: 'black_tokin_1',
  team: BLACK
};
export const B_TOKIN_2 = {
  ...TOKIN,
  demotion: B_FUHYOU_2,
  id: 'black_tokin_2',
  team: BLACK
};
export const B_TOKIN_3 = {
  ...TOKIN,
  demotion: B_FUHYOU_3,
  id: 'black_tokin_3',
  team: BLACK
};
export const B_TOKIN_4 = {
  ...TOKIN,
  demotion: B_FUHYOU_4,
  id: 'black_tokin_4',
  team: BLACK
};
export const B_TOKIN_5 = {
  ...TOKIN,
  demotion: B_FUHYOU_5,
  id: 'black_tokin_5',
  team: BLACK
};
export const B_TOKIN_6 = {
  ...TOKIN,
  demotion: B_FUHYOU_6,
  id: 'black_tokin_6',
  team: BLACK
};
export const B_TOKIN_7 = {
  ...TOKIN,
  demotion: B_FUHYOU_7,
  id: 'black_tokin_7',
  team: BLACK
};
export const B_TOKIN_8 = {
  ...TOKIN,
  demotion: B_FUHYOU_8,
  id: 'black_tokin_8',
  team: BLACK
};
export const B_TOKIN_9 = {
  ...TOKIN,
  demotion: B_FUHYOU_9,
  id: 'black_tokin_9',
  team: BLACK
};
