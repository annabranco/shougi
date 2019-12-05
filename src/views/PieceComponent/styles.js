import styled, { css } from 'styled-components';

export const Piece = styled.div`
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

  &:hover {
    box-shadow: 2px 2px 5px 0 black, inset 1px 1px 2px 0 white,
      inset 0 0 30px 2px rgb(145, 105, 105);
  }

  &.active {
    box-shadow: 2px 2px 5px 0 black, 0 0 10px 2px yellow,
      inset 1px 1px 2px 0 white, inset 0 0 20px 0 rgb(128, 128, 29);
  }
`;

export const PieceName = styled.div`
  margin: 0;
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 800;
`;
