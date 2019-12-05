import { BOARD_SIZE } from '../../core/setup/board';

export const FORWARD_LEFT = { x: -1, y: 1 };
export const FORWARD = { x: 0, y: 1 };
export const FORWARD_RIGHT = { x: 1, y: 1 };
export const LEFT = { x: -1, y: 0 };
export const RIGHT = { x: 1, y: 0 };
export const BACK_LEFT = { x: -1, y: -1 };
export const BACK = { x: 0, y: -1 };
export const BACK_RIGHT = { x: 1, y: -1 };

export const JUMP_FORWARD_LEFT = { x: 1, y: 2 };
export const JUMP_FORWARD_RIGHT = { x: -1, y: 2 };

export const ALL_FORWARD = { x: 0, y: BOARD_SIZE };
export const ALL_BACK = { x: 0, y: -BOARD_SIZE };
export const ALL_LEFT = { x: -BOARD_SIZE, y: 0 };
export const ALL_RIGHT = { x: BOARD_SIZE, y: 0 };

export const FORWARD_DIAGONALS_LEFT = { x: -BOARD_SIZE, y: BOARD_SIZE };
export const FORWARD_DIAGONALS_RIGHT = { x: BOARD_SIZE, y: BOARD_SIZE };
export const BACKWARD_DIAGONALS_LEFT = { x: -BOARD_SIZE, y: -BOARD_SIZE };
export const BACKWARD_DIAGONALS_RIGHT = { x: BOARD_SIZE, y: -BOARD_SIZE };
