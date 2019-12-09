import { OUSHOU, KINSHOU, GYOKUSHOU } from '../../database';
import { WHITE, BLACK } from '../constants';

/**
 * **** WHITE TEAM ****
 */
// --- Higher Ranks
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

/**
 * **** BLACK TEAM ****
 */
// --- Higher Ranks
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
