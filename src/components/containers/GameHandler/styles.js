import styled, { css } from 'styled-components';

export const PlayingArea = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  ${window.innerWidth <= 700 &&
    css`
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`;
