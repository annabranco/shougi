import styled, { css } from 'styled-components';
import { BOARD_BORDERS } from '../../../system/setup/board';
import { getGridsSize } from '../../../system/utils';
import { Wood, Marble } from '../../../assets/images';

export const BoardArea = styled.div`
  position: relative;
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

  ${props => {
    if (props.allowedMoves.includes(props.id)) {
      if (
        props.pieceOnSquare &&
        props.attackingPiece &&
        props.pieceOnSquare.team !== props.attackingPiece.team
      ) {
        return css`
          box-shadow: inset 0 0 10px 1px red, 0 0 10px 0 red;
        `;
      }
      return css`
        box-shadow: inset 0 0 10px 1px blue;
      `;
    }
    return null;
  }}
`;

export const Author = styled.p`
  position: absolute;
  bottom: 60px;
  right: -42px;
  transform: rotate(270deg);
  font-family: 'Noto Sans JP', sans-serif;
  opacity: 0.2;
`;
