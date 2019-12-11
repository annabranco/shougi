import { BOARD_SIZE } from '../setup/board';

const FORWARD_LEFT = { x: -1, y: 1 };
const FORWARD = { x: 0, y: 1 };
const FORWARD_RIGHT = { x: 1, y: 1 };
const LEFT = { x: -1, y: 0 };
const RIGHT = { x: 1, y: 0 };
const BACK_LEFT = { x: -1, y: -1 };
const BACK = { x: 0, y: -1 };
const BACK_RIGHT = { x: 1, y: -1 };

const JUMP_FORWARD_LEFT = { x: 1, y: 2 };
const JUMP_FORWARD_RIGHT = { x: -1, y: 2 };

const ALL_FORWARD = { x: 0, y: BOARD_SIZE };
const ALL_BACK = { x: 0, y: -BOARD_SIZE };
const ALL_LEFT = { x: -BOARD_SIZE, y: 0 };
const ALL_RIGHT = { x: BOARD_SIZE, y: 0 };

const FORWARD_DIAGONALS_LEFT = { x: -BOARD_SIZE, y: BOARD_SIZE };
const FORWARD_DIAGONALS_RIGHT = { x: BOARD_SIZE, y: BOARD_SIZE };
const BACKWARD_DIAGONALS_LEFT = { x: -BOARD_SIZE, y: -BOARD_SIZE };
const BACKWARD_DIAGONALS_RIGHT = { x: BOARD_SIZE, y: -BOARD_SIZE };

export {
  FORWARD_LEFT,
  FORWARD,
  FORWARD_RIGHT,
  LEFT,
  RIGHT,
  BACK_LEFT,
  BACK,
  BACK_RIGHT,
  JUMP_FORWARD_LEFT,
  JUMP_FORWARD_RIGHT,
  ALL_FORWARD,
  ALL_BACK,
  ALL_LEFT,
  ALL_RIGHT,
  FORWARD_DIAGONALS_LEFT,
  FORWARD_DIAGONALS_RIGHT,
  BACKWARD_DIAGONALS_LEFT,
  BACKWARD_DIAGONALS_RIGHT
};
