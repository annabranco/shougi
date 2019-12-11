import styled, { css } from 'styled-components';
import { getBoardSize, getGridsSize } from '../../../system/utils';
import { BLACK } from '../../../system/constants';

export const CapturedPiecesWrapper = styled.section`
  background: rgba(255, 255, 255, 0.3);
  height: ${`${getBoardSize() - 30}px`};
  width: ${window.innerWidth >= 1030
    ? `${getGridsSize() * 2}px`
    : `${getGridsSize()}px`};
  border: 1px solid black;
  margin: 40px auto 0;
  display: flex;
  flex-direction: ${props =>
    props.team === BLACK ? 'column-reverse' : 'column'};
  justify-content: flex-start;
  align-items: center;
  overflow: scroll-y;

  ${window.innerWidth <= 700 &&
    css`
      align-items: flex-start;
      width: ${`${getBoardSize() - 30}px`};
      height: ${`${getGridsSize()}px`};
      margin-top: 20px;
    `}
`;

export const CapturedGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(
    ${window.innerWidth >= 1030 ? 2 : 1},
    ${`${getGridsSize()}px`}
  );
  grid-template-rows: ${`${getGridsSize()}px`};
  width: 100%;

  ${window.innerWidth <= 700 &&
    css`
      grid-template-columns: auto;
      grid-auto-flow: column;
      width: auto;
    `}
`;

export const CapturedSquare = styled.div`
  height: ${`${getGridsSize()}px`};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${window.innerWidth <= 700 &&
    css`
      width: ${`${getGridsSize()}px`};
    `}
`;

export const CapturedText = styled.p`
  position: ${window.innerWidth >= 1030 ? 'default' : 'absolute'};
  font-family: 'Sawarabi Mincho', sans-serif;
  font-size: ${window.innerWidth >= 1030 ? '1rem' : '0.8rem'};
  color: black;
  ${window.innerWidth <= 1030 &&
    css`
      transform: translate(
        0,
        ${props => (props.team === BLACK ? '5px' : '-30px')}
      );
    `}
  ${props =>
    window.innerWidth <= 700 &&
    props.team === BLACK &&
    css`
      align-self: flex-end;
    `}
`;
