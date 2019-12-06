import styled, { css } from 'styled-components';
import { MAX_GRID_SIZE, MIN_GRID_SIZE } from '../../settings/board';

export const Gameboard = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(
    ${props => props.size},
    ${`${
      window.innerWidth / 12 <= MAX_GRID_SIZE
        ? window.innerWidth / 12
        : MAX_GRID_SIZE
    }px`}
  );
  box-shadow: 4px 4px 5px 2px black;
`;

export const Square = styled.div`
  height: ${`${window.innerWidth / 12}px`};
  width: ${`${window.innerWidth / 12}px`};
  max-height: ${`${MAX_GRID_SIZE}px`};
  max-width: ${`${MAX_GRID_SIZE}px`};
  min-height: ${`${MIN_GRID_SIZE}px`};
  min-width: ${`${MIN_GRID_SIZE}px`};
  background: gray;
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
