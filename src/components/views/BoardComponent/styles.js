import styled, { css } from 'styled-components';
import {
  MAX_GRID_SIZE,
  MIN_GRID_SIZE,
  BOARD_BORDERS
} from '../../../system/setup/board';
import { returnResponsiveValue, getGridsSize } from '../../../system/utils';
import { Wood, Marble } from '../../../assets/images';

export const BoardArea = styled.div`
  margin-top: 20px;
  border: 2px solid black;
  padding: ${`${BOARD_BORDERS}px`};
  box-shadow: 4px 4px 5px 2px black;
  background-image: linear-gradient(
      134deg,
      rgba(0, 0, 0, 0.5),
      rgba(137, 122, 53, 0.5),
      rgba(155, 132, 94, 0.5),
      rgba(183, 164, 141, 0.5),
      rgba(137, 122, 53, 0.5),
      rgba(155, 132, 94, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${Wood});
  background-size: contain;
`;

export const Gameboard = styled.div`
  width: fit-content;
  display: grid;
  box-shadow: 2px 2px 2px 3px black;
  grid-template-columns: repeat(
    ${props => props.size},
    ${`${getGridsSize()}px`}
  );
  background-image: url(${Marble});
  background-size: cover;
`;

export const Square = styled.div`
  height: ${`${getGridsSize()}px`};
  width: ${`${getGridsSize()}px`};
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
