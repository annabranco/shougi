import { OUSHOU, KINSHOU, GYOKUSHOU } from '../../database';
import { WHITE, BLACK } from '../constants';

/**
 * **** WHITE TEAM ****
 */
// --- Higher Ranks
const W_OUSHOU = {
  ...OUSHOU,
  id: 'ōshō',
  team: WHITE,
  initialSetup: '1-5'
};
const W_KINSHOU_L = {
  ...KINSHOU,
  id: 'white_kinshō_L',
  team: WHITE,
  initialSetup: '1-4'
};
const W_KINSHOU_R = {
  ...KINSHOU,
  id: 'white_kinshō_R',
  team: WHITE,
  initialSetup: '1-6'
};

/**
 * **** BLACK TEAM ****
 */
// --- Higher Ranks
const B_GYOKUSHOU = {
  ...GYOKUSHOU,
  id: 'gyokushō',
  team: BLACK,
  initialSetup: '9-5'
};
const B_KINSHOU_L = {
  ...KINSHOU,
  id: 'black_kinshō_L',
  team: BLACK,
  initialSetup: '9-6'
};
const B_KINSHOU_R = {
  ...KINSHOU,
  id: 'black_kinshō_R',
  team: BLACK,
  initialSetup: '9-4'
};

export {
  W_OUSHOU,
  W_KINSHOU_L,
  W_KINSHOU_R,
  B_GYOKUSHOU,
  B_KINSHOU_L,
  B_KINSHOU_R
};
