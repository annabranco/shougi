/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
import {
  FORWARD,
  FORWARD_RIGHT,
  RIGHT,
  BACK_RIGHT,
  BACK,
  BACK_LEFT,
  LEFT,
  FORWARD_LEFT,
  JUMP_FORWARD_LEFT,
  JUMP_FORWARD_RIGHT,
  ALL_FORWARD,
  ALL_BACK,
  ALL_RIGHT,
  ALL_LEFT,
  FORWARD_DIAGONALS_LEFT,
  FORWARD_DIAGONALS_RIGHT,
  BACKWARD_DIAGONALS_LEFT,
  BACKWARD_DIAGONALS_RIGHT
} from '../../system/constants';

// Higher Ranks
let OUSHOU;
let GYOKUSHOU;
let KINSHOU;

// Promotions
let RYUUOO;
let RYUUMA;
let NARIGIN;
let NARIKEI;
let NARIKYOU;
let TOKIN;

// Regular Ranks
let HISHA;
let KAKUGYOU;
let GINSHOU;
let KEIMA;
let KYOUSHA;
let FUHYOU;

OUSHOU = {
  name: '王將',
  shortName: '王',
  romaji: 'ōshō',
  id: 'ōshō',
  english: 'King',
  shortEnglish: 'King',
  moves: [
    FORWARD_LEFT,
    FORWARD,
    FORWARD_RIGHT,
    LEFT,
    RIGHT,
    BACK_LEFT,
    BACK,
    BACK_RIGHT
  ]
};

GYOKUSHOU = {
  name: '玉將',
  shortName: '玉',
  romaji: 'gyokushō',
  id: 'gyokushō',
  english: 'Defiant King',
  shortEnglish: 'King',
  moves: [
    FORWARD_LEFT,
    FORWARD,
    FORWARD_RIGHT,
    LEFT,
    RIGHT,
    BACK_LEFT,
    BACK,
    BACK_RIGHT
  ]
};

KINSHOU = {
  name: '金將',
  shortName: '金',
  romaji: 'kinshō',
  english: 'Gold General',
  shortEnglish: 'Gold',
  id: 'kinshō',
  moves: [FORWARD_LEFT, FORWARD, FORWARD_RIGHT, LEFT, RIGHT, BACK]
};

// PROMOTED

RYUUOO = {
  name: '龍王',
  shortName: '龍',
  romaji: 'ryūō',
  english: 'Dragon King',
  shortEnglish: 'Dragon',
  id: 'ryūō',
  demotion: HISHA,
  moves: [
    FORWARD_LEFT,
    FORWARD_RIGHT,
    BACK_LEFT,
    BACK_RIGHT,
    ALL_FORWARD,
    ALL_BACK,
    ALL_RIGHT,
    ALL_LEFT
  ]
};

RYUUMA = {
  name: '龍馬',
  shortName: '馬',
  romaji: 'ryūma',
  english: 'Dragon Horse',
  shortEnglish: 'Horse',
  id: 'ryūma',
  demotion: KAKUGYOU,
  moves: [
    FORWARD,
    LEFT,
    RIGHT,
    BACK,
    FORWARD_DIAGONALS_LEFT,
    FORWARD_DIAGONALS_RIGHT,
    BACKWARD_DIAGONALS_LEFT,
    BACKWARD_DIAGONALS_RIGHT
  ]
};

NARIGIN = {
  name: '成銀',
  shortName: '全',
  romaji: 'narigin',
  english: 'Prom. Silver',
  shortEnglish: '+Silver+',
  id: 'narigin',
  demotion: GINSHOU,
  moves: [FORWARD_LEFT, FORWARD, FORWARD_RIGHT, LEFT, RIGHT, BACK]
};

NARIKEI = {
  name: '成桂',
  shortName: '圭',
  romaji: 'narikei',
  english: 'Prom. Knight',
  shortEnglish: '+Knight+',
  id: 'narikei',
  demotion: KEIMA,
  moves: [FORWARD_LEFT, FORWARD, FORWARD_RIGHT, LEFT, RIGHT, BACK]
};

NARIKYOU = {
  name: '成香',
  shortName: '杏',
  romaji: 'narikyō',
  english: 'Prom. Lance',
  shortEnglish: '+Lance+',
  id: 'narikyō',
  demotion: KYOUSHA,
  moves: [FORWARD_LEFT, FORWARD, FORWARD_RIGHT, LEFT, RIGHT, BACK]
};

TOKIN = {
  name: 'と金',
  shortName: 'と',
  romaji: 'tokin',
  english: 'Prom. Pawn',
  shortEnglish: '+Pawn+',
  id: 'tokin',
  demotion: FUHYOU,
  moves: [FORWARD_LEFT, FORWARD, FORWARD_RIGHT, LEFT, RIGHT, BACK]
};

// NON-PROMOTED

GINSHOU = {
  name: '銀將',
  shortName: '銀',
  romaji: 'ginshō',
  english: 'Silver General',
  shortEnglish: 'Silver',
  id: 'ginshō',
  promotion: NARIGIN,
  moves: [FORWARD_LEFT, FORWARD, FORWARD_RIGHT, BACK_LEFT, BACK_RIGHT]
};

KEIMA = {
  name: '桂馬',
  shortName: '桂',
  romaji: 'keima',
  english: 'Knight',
  shortEnglish: 'Knightt',
  id: 'keima',
  promotion: NARIKEI,
  moves: [JUMP_FORWARD_LEFT, JUMP_FORWARD_RIGHT]
};

HISHA = {
  name: '飛車',
  shortName: '飛',
  romaji: 'hisha',
  english: 'Rook',
  shortEnglish: 'Rook',
  id: 'hisha',
  promotion: RYUUOO,
  moves: [ALL_FORWARD, ALL_BACK, ALL_LEFT, ALL_RIGHT]
};

KAKUGYOU = {
  name: '角行',
  shortName: '角',
  romaji: 'kakugyō',
  english: 'Bishop',
  shortEnglish: 'Bishop',
  id: 'kakugyō',
  promotion: RYUUMA,
  moves: [
    FORWARD_DIAGONALS_LEFT,
    FORWARD_DIAGONALS_RIGHT,
    BACKWARD_DIAGONALS_LEFT,
    BACKWARD_DIAGONALS_RIGHT
  ]
};

KYOUSHA = {
  name: '香車',
  shortName: '香',
  romaji: 'kyōsha',
  english: 'Lance',
  shortEnglish: 'Lance',
  id: 'kyōsha',
  promotion: NARIKYOU,
  moves: [ALL_FORWARD]
};

FUHYOU = {
  name: '歩兵',
  shortName: '歩',
  romaji: 'fuhyō',
  english: 'Pawn',
  shortEnglish: 'Pawn',
  id: 'fuhyō',
  promotion: TOKIN,
  moves: [FORWARD]
};

export {
  OUSHOU,
  GYOKUSHOU,
  KINSHOU,
  RYUUOO,
  RYUUMA,
  NARIGIN,
  NARIKEI,
  NARIKYOU,
  TOKIN,
  HISHA,
  KAKUGYOU,
  GINSHOU,
  KEIMA,
  KYOUSHA,
  FUHYOU
};
