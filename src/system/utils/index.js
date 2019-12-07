import {
  VIEWPORT_SMALL,
  VIEWPORT_MEDIUM,
  VIEWPORT_LARGE,
  BOARD_BORDERS,
  BOARD_SIZE,
  MIN_GRID_SIZE,
  MAX_GRID_SIZE
} from '../setup';

export const getSquareDetails = square => {
  let [row, column] = square.split(/-/);
  row = Number(row);
  column = Number(column);

  return { row, column };
};

export const getSquareId = square => `${square.y}-${square.x}`;

export const returnResponsiveValue = (s, m, l, xl) => {
  if (window.innerWidth <= VIEWPORT_SMALL) {
    return s;
  }
  if (window.innerWidth <= VIEWPORT_MEDIUM) {
    return m;
  }
  if (window.innerWidth <= VIEWPORT_LARGE) {
    return l;
  }
  return xl;
};

export const getGridsSize = () =>
  returnResponsiveValue(
    MIN_GRID_SIZE,
    MIN_GRID_SIZE + 12,
    (MAX_GRID_SIZE + MIN_GRID_SIZE) / 2,
    MAX_GRID_SIZE
  );

export const getBoardSize = () => {
  const grids = BOARD_SIZE;
  const adjustments = 25;
  const gridsSize = getGridsSize();
  return gridsSize * grids + BOARD_BORDERS * 2 + adjustments;
};
