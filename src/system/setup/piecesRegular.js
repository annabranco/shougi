import { WHITE, BLACK } from '../constants';
import {
  HISHA,
  KAKUGYOU,
  KYOUSHA,
  KEIMA,
  GINSHOU,
  FUHYOU
} from '../../database';

/**
 * **** WHITE TEAM ****
 */

const W_HISHA = {
  ...HISHA,
  id: 'white_hisha',
  team: WHITE,
  initialSetup: '2-8'
};
const W_KAKUGYOU = {
  ...KAKUGYOU,
  id: 'white_kakugyō',
  team: WHITE,
  initialSetup: '2-2'
};
const W_KYOUSHA_L = {
  ...KYOUSHA,
  id: 'white_kyōsha_L',
  team: WHITE,
  initialSetup: '1-1'
};
const W_KYOUSHA_R = {
  ...KYOUSHA,
  id: 'white_kyōsha_R',
  team: WHITE,
  initialSetup: '1-9'
};
const W_KEIMA_L = {
  ...KEIMA,
  id: 'white_keima_L',
  team: WHITE,
  initialSetup: '1-2'
};
const W_KEIMA_R = {
  ...KEIMA,
  id: 'white_keima_R',
  team: WHITE,
  initialSetup: '1-8'
};
const W_GINSHOU_L = {
  ...GINSHOU,
  id: 'white_ginshō_L',
  team: WHITE,
  initialSetup: '1-3'
};
const W_GINSHOU_R = {
  ...GINSHOU,
  id: 'white_ginshō_R',
  team: WHITE,
  initialSetup: '1-7'
};
const W_FUHYOU_1 = {
  ...FUHYOU,
  id: 'white_fuhyō_1',
  team: WHITE,
  initialSetup: '3-1'
};
const W_FUHYOU_2 = {
  ...FUHYOU,
  id: 'white_fuhyō_2',
  team: WHITE,
  initialSetup: '3-2'
};
const W_FUHYOU_3 = {
  ...FUHYOU,
  id: 'white_fuhyō_3',
  team: WHITE,
  initialSetup: '3-3'
};
const W_FUHYOU_4 = {
  ...FUHYOU,
  id: 'white_fuhyō_4',
  team: WHITE,
  initialSetup: '3-4'
};
const W_FUHYOU_5 = {
  ...FUHYOU,
  id: 'white_fuhyō_5',
  team: WHITE,
  initialSetup: '3-5'
};
const W_FUHYOU_6 = {
  ...FUHYOU,
  id: 'white_fuhyō_6',
  team: WHITE,
  initialSetup: '3-6'
};
const W_FUHYOU_7 = {
  ...FUHYOU,
  id: 'white_fuhyō_7',
  team: WHITE,
  initialSetup: '3-7'
};
const W_FUHYOU_8 = {
  ...FUHYOU,
  id: 'white_fuhyō_8',
  team: WHITE,
  initialSetup: '3-8'
};
const W_FUHYOU_9 = {
  ...FUHYOU,
  id: 'white_fuhyō_9',
  team: WHITE,
  initialSetup: '3-9'
};

/**
 * **** BLACK TEAM ****
 */

const B_HISHA = {
  ...HISHA,
  id: 'black_hisha',
  team: BLACK,
  initialSetup: '8-2'
};
const B_KAKUGYOU = {
  ...KAKUGYOU,
  id: 'black_kakugyō',
  team: BLACK,
  initialSetup: '8-8'
};
const B_KYOUSHA_L = {
  ...KYOUSHA,
  id: 'black_kyōsha_L',
  team: BLACK,
  initialSetup: '9-9'
};
const B_KYOUSHA_R = {
  ...KYOUSHA,
  id: 'black_kyōsha_R',
  team: BLACK,
  initialSetup: '9-1'
};
const B_KEIMA_L = {
  ...KEIMA,
  id: 'black_keima_L',
  team: BLACK,
  initialSetup: '9-8'
};
const B_KEIMA_R = {
  ...KEIMA,
  id: 'black_keima_R',
  team: BLACK,
  initialSetup: '9-2'
};
const B_GINSHOU_L = {
  ...GINSHOU,
  id: 'black_ginshō_L',
  team: BLACK,
  initialSetup: '9-7'
};
const B_GINSHOU_R = {
  ...GINSHOU,
  id: 'black_ginshō_R',
  team: BLACK,
  initialSetup: '9-3'
};
const B_FUHYOU_1 = {
  ...FUHYOU,
  id: 'black_fuhyō_1',
  team: BLACK,
  initialSetup: '7-9'
};
const B_FUHYOU_2 = {
  ...FUHYOU,
  id: 'black_fuhyō_2',
  team: BLACK,
  initialSetup: '7-8'
};
const B_FUHYOU_3 = {
  ...FUHYOU,
  id: 'black_fuhyō_3',
  team: BLACK,
  initialSetup: '7-7'
};
const B_FUHYOU_4 = {
  ...FUHYOU,
  id: 'black_fuhyō_4',
  team: BLACK,
  initialSetup: '7-6'
};
const B_FUHYOU_5 = {
  ...FUHYOU,
  id: 'black_fuhyō_5',
  team: BLACK,
  initialSetup: '7-5'
};
const B_FUHYOU_6 = {
  ...FUHYOU,
  id: 'black_fuhyō_6',
  team: BLACK,
  initialSetup: '7-4'
};
const B_FUHYOU_7 = {
  ...FUHYOU,
  id: 'black_fuhyō_7',
  team: BLACK,
  initialSetup: '7-3'
};
const B_FUHYOU_8 = {
  ...FUHYOU,
  id: 'black_fuhyō_8',
  team: BLACK,
  initialSetup: '7-2'
};
const B_FUHYOU_9 = {
  ...FUHYOU,
  id: 'black_fuhyō_9',
  team: BLACK,
  initialSetup: '7-1'
};

export {
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
};
