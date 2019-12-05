import {
  FORWARD,
  FORWARD_RIGHT,
  RIGHT,
  BACK_RIGHT,
  BACK,
  BACK_LEFT,
  LEFT,
  FORWARD_LEFT,
  ALL_FORWARD
} from '../settings/constants/movements';

export const OUSHOU = {
  name: '王將',
  romaji: 'ōshō',
  english: 'King',
  promotion: null,
  moves: [
    FORWARD,
    FORWARD_RIGHT,
    RIGHT,
    BACK_RIGHT,
    BACK,
    BACK_LEFT,
    LEFT,
    FORWARD_LEFT
  ]
};

export const KYOUSHA = {
  name: '香車',
  romaji: 'kyōsha',
  english: 'Lance',
  promotion: null,
  moves: [ALL_FORWARD]
};

export const NARIKYOU = {
  name: '成香',
  romaji: 'narikyō',
  english: 'Promoted Lance',
  promotion: null,
  moves: [FORWARD, FORWARD_RIGHT, RIGHT, BACK, LEFT, FORWARD_LEFT]
};

export const TOKIN = {
  name: 'と金',
  romaji: 'tokin',
  english: 'Promoted Pawn',
  promotion: null,
  moves: [FORWARD]
};

export const FUHYOU = {
  name: '歩兵',
  romaji: 'fuhyō',
  english: 'Pawn',
  promotion: TOKIN,
  moves: [FORWARD, FORWARD_RIGHT, RIGHT, BACK, LEFT, FORWARD_LEFT]
};
