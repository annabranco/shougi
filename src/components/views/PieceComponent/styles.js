import styled, { css } from 'styled-components';
import { returnResponsiveValue } from '../../../system/utils';
import { BLACK, WHITE } from '../../../system/constants';

export const PieceFigure = styled.div`
  position: relative;
  border: 1px solid black;
  background: white;
  padding: 5px;
  text-align: center;
  height: 70%;
  width: 50%;
  box-shadow: 1px 1px 4px 1px black,
    inset 1px ${props => (props.piece.team === BLACK ? '0' : '1px')} 2px 0 white;
  background: linear-gradient(rgb(243, 223, 196), rgb(148, 135, 115));
  outline: none;
  cursor: ${props => (props.active ? 'pointer' : 'default')};
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: ${props => (props.piece.team === WHITE ? 'auto' : '-15px')};
    bottom: ${props => (props.piece.team === BLACK ? 'auto' : '-15px')};
    left: 0;
    content: '';
    width: 0;
    height: 5px;
    border-style: solid;
    border-color: ${props =>
        props.piece.team === WHITE ? 'rgb(161, 147, 126)' : 'transparent'}
      transparent
      ${props =>
        props.piece.team === BLACK ? 'rgb(243, 223, 196)' : 'transparent'};
    border-width: ${returnResponsiveValue(
      '5px 15.5px 5px 15.5px',
      '5px 18.5px 5px 18.5px',
      '5px 19px 5px 19px',
      '5px 21px 5px 21px'
    )};
    filter: drop-shadow(
      0 ${props => (props.piece.team === BLACK ? '-2px' : '2px')} 1px black
    );
    transition: border-color 0.5s ease;
  }

  &:hover {
    ${props =>
      props.selectedPiece && props.piece.id === props.selectedPiece.id
        ? css`
            box-shadow: 2px 2px 5px 0 black, 0 0 20px 5px gold,
              inset 1px 0 2px 0 white, inset 0 0 30px 2px rgb(145, 105, 105);
            &::before {
              position: absolute;
              content: '${props.placeholder}';
              top: ${props.piece.team === WHITE ? 'auto' : '-18px'};
              bottom: ${props.piece.team === BLACK ? 'auto' : '-18px'};
              font-size: 0.8rem;
              z-index: 9;
              height: auto;
              width: 100%;
              background: ${
                props.piece.team === WHITE
                  ? 'rgba(255, 255, 255, 0.8)'
                  : 'rgba(0, 0, 0, 0.8)'
              };
              color: ${props.piece.team === BLACK ? WHITE : BLACK};
              border-width: 0;
              border-radius: 2px;
              text-align: center;
            }
          `
        : css`
            ${props.active &&
              css`
                box-shadow: 2px 2px 5px 0 black, inset 1px 0 2px 0 white,
                  inset 0 0 30px 2px rgb(145, 105, 105);
                &::before {
                  border-color: ${props.piece.team === WHITE
                      ? 'rgb(177, 143, 135)'
                      : 'transparent'}
                    transparent
                    ${props.piece.team === BLACK
                      ? 'rgb(186, 158, 145)'
                      : 'transparent'};
                }
              `}
          `}
  }
  ${props =>
    props.selectedPiece &&
    props.piece.id === props.selectedPiece.id &&
    css`
      box-shadow: 2px 2px 5px 0 black, 0 0 20px 5px rgba(185, 164, 63, 0.8),
        inset 1px -1px 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 0 30px 2px rgb(145, 105, 105);
      &::before {
        border-color: ${props.piece.team === WHITE
            ? 'rgb(151, 123, 114)'
            : 'transparent'}
          transparent
          ${props.piece.team === BLACK ? 'rgb(186, 158, 145)' : 'transparent'};
      }
    `}
`;

export const PieceName = styled.div`
  color: ${props => (props.promoted ? 'darkred' : 'black')};
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
  font-size: ${returnResponsiveValue('1.4rem', '1.6rem', '1.8rem', '1.6rem')};
  line-height: ${returnResponsiveValue(0, 0, 0, 1)};
  font-weight: 400;
  user-select: none;
  font-family: 'Noto Sans JP', sans-serif;
`;
