import { VIEWPORT_SMALL, VIEWPORT_MEDIUM, VIEWPORT_LARGE } from '../setup';

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
