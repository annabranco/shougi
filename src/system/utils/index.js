import {
  VIEWPORT_SMALL,
  VIEWPORT_MEDIUM,
  VIEWPORT_LARGE,
  BOARD_BORDERS,
  BOARD_SIZE,
  MIN_GRID_SIZE,
  MAX_GRID_SIZE
} from '../setup';
import {
  WHITE,
  BLACK,
  EMPTY_SQUARES,
  OCCUPIED_SQUARES,
  WHITE_SQUARES,
  BLACK_SQUARES,
  COLUMNS_WITH_PAWNS
} from '../constants';

export const getSquareDetails = square => {
  let [row, column] = square.split(/-/);
  row = Number(row);
  column = Number(column);

  return { row, column };
};

export const getSquareId = square => `${square.x}-${square.y}`;

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

export const getFromBoard = (currentBoard, argument, currentTeam) => {
  const response = [];
  Object.keys(currentBoard).forEach(coordinateY =>
    Object.keys(currentBoard).forEach(coordinateX => {
      switch (argument) {
        case EMPTY_SQUARES:
          if (!currentBoard[coordinateY][coordinateX]) {
            response.push(`${coordinateY}-${coordinateX}`);
          }
          break;
        case OCCUPIED_SQUARES:
          if (currentBoard[coordinateY][coordinateX]) {
            response.push(`${coordinateY}-${coordinateX}`);
          }
          break;
        case WHITE_SQUARES:
          if (
            currentBoard[coordinateY][coordinateX] &&
            currentBoard[coordinateY][coordinateX].team === WHITE
          ) {
            response.push(`${coordinateY}-${coordinateX}`);
          }
          break;
        case BLACK_SQUARES:
          if (
            currentBoard[coordinateY][coordinateX] &&
            currentBoard[coordinateY][coordinateX].team === BLACK
          ) {
            response.push(`${coordinateY}-${coordinateX}`);
          }
          break;
        case COLUMNS_WITH_PAWNS:
          if (
            currentBoard[coordinateY][coordinateX] &&
            currentBoard[coordinateY][coordinateX].english === 'Pawn' &&
            currentBoard[coordinateY][coordinateX].team === currentTeam
          ) {
            response.push(coordinateX);
          }
          break;
        default:
          break;
      }
    })
  );
  return response;
};

export const oppositeTeam = team => (team === BLACK ? WHITE : BLACK);
