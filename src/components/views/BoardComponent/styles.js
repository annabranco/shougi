import styled, { css } from 'styled-components';
import { MAX_GRID_SIZE, MIN_GRID_SIZE } from '../../../system/setup/board';
import { returnResponsiveValue } from '../../../system/utils';

export const Gameboard = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(
    ${props => props.size},
    ${`${returnResponsiveValue(
      MIN_GRID_SIZE,
      MIN_GRID_SIZE + 12,
      (MAX_GRID_SIZE + MIN_GRID_SIZE) / 2,
      MAX_GRID_SIZE
    )}px`}
  );
  box-shadow: 4px 4px 5px 2px black;
  background: linear-gradient(120deg, white, black, black, white);
`;

export const Square = styled.div`
  height: ${`${returnResponsiveValue(
    MIN_GRID_SIZE,
    MIN_GRID_SIZE + 12,
    (MAX_GRID_SIZE + MIN_GRID_SIZE) / 2,
    MAX_GRID_SIZE
  )}px`};
  width: ${`${returnResponsiveValue(
    MIN_GRID_SIZE,
    MIN_GRID_SIZE + 12,
    (MAX_GRID_SIZE + MIN_GRID_SIZE) / 2,
    MAX_GRID_SIZE
  )}px`};
  background: rgba(128, 128, 128, 0.8);
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.allowedMoves.includes(props.id) &&
    css`
      box-shadow: inset 0 0 10px 1px blue;
    `}
`;
