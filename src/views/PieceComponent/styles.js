import styled, { css } from 'styled-components';

export const PieceFigure = styled.div`
  position: relative;
  border: 1px solid black;
  background: white;
  padding: 5px;
  text-align: center;
  height: 70%;
  width: 50%;
  box-shadow: 1px 1px 4px 1px black, inset 1px 0 2px 0 white;
  background: linear-gradient(rgb(243, 223, 196), rgb(148, 135, 115));
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${window.innerWidth > 700 &&
    css`
      &::before {
        position: absolute;
        top: -15px;
        left: 0;
        content: '';
        width: ${window.innerWidth > 1000 ? '10%' : '0'};
        height: 5px;
        border-style: solid;
        border-color: transparent transparent rgb(243, 223, 196);
        border-width: ${window.innerWidth > 1000
          ? '5px 23px 5px 23px'
          : '5px 22px 5px 22px'};
        filter: drop-shadow(0 -2px 1px black);
        transition: border-color 0.5s ease;
      }
    `}

  &:hover {
    ${props =>
      props.selectedPiece && props.piece.id === props.selectedPiece.id
        ? css`
            box-shadow: 2px 2px 5px 0 black, 0 0 20px 5px blue,
              inset 1px 0 2px 0 white, inset 0 0 30px 2px rgb(145, 105, 105);
            &::before {
              border-color: transparent transparent rgb(186, 158, 145);
            }
          `
        : css`
            box-shadow: 2px 2px 5px 0 black, inset 1px 0 2px 0 white,
              inset 0 0 30px 2px rgb(145, 105, 105);
            &::before {
              border-color: transparent transparent rgb(186, 158, 145);
            }
          `}
  }

  ${props =>
    props.selectedPiece &&
    props.piece.id === props.selectedPiece.id &&
    css`
      box-shadow: 2px 2px 5px 0 black, 0 0 20px 5px blue,
        inset 1px 1px 2px 0 white, inset 0 0 30px 2px rgb(145, 105, 105);

      &::before {
        position: absolute;
        content: '${props.placeholder}';
        top: -18px;
        font-size: 0.8rem;
        z-index: 9;
        height: auto;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        border-width: 0;
        border-radius: 2px;
        text-align: center;
      }
    `}
`;

export const PieceName = styled.div`
  margin: 0;
  color: ${props => (props.promoted ? 'darkred' : 'black')};
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
  font-size: ${window.innerWidth > 1000 ? '1.8rem' : '1.6rem'};
  line-height: 1;
  font-weight: 800;
  user-select: none;
`;
