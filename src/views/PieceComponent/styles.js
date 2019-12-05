import styled, { css } from 'styled-components';

export const PieceFigure = styled.div`
  position: relative;
  border: 1px solid black;
  background: white;
  padding: 5px;
  text-align: center;
  height: 70%;
  width: 50%;
  box-shadow: 1px 1px 4px 1px black, inset 1px 1px 2px 0 white;
  background: linear-gradient(rgb(243, 223, 196), rgb(148, 135, 115));
  outline: none;
  cursor: pointer;
  transition: all 2s ease;

  &:hover {
    ${props =>
      props.selectedPiece && props.piece.name === props.selectedPiece.name
        ? css`
            box-shadow: 2px 2px 5px 0 black, 0 0 20px 5px blue,
              inset 1px 1px 2px 0 white, inset 0 0 30px 2px rgb(145, 105, 105);
          `
        : css`
            box-shadow: 2px 2px 5px 0 black, inset 1px 1px 2px 0 white,
              inset 0 0 30px 2px rgb(145, 105, 105);
          `}
  }

  ${props =>
    props.selectedPiece &&
    props.piece.name === props.selectedPiece.name &&
    css`
      box-shadow: 2px 2px 5px 0 black, 0 0 20px 5px blue,
        inset 1px 1px 2px 0 white, inset 0 0 30px 2px rgb(145, 105, 105);

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '${props.placeholder}';
        font-size: 1rem;
        z-index: 9;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 2px;
        text-align: center;
      }
    `}
`;

export const PieceName = styled.div`
  margin: 0;
  color: ${props => (props.promoted ? 'darkred' : 'black')};
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 800;
`;
