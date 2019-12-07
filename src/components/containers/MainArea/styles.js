import styled, { css } from 'styled-components';
import { Background } from '../../../assets/images';

export const GameArea = styled.main`
  margin-top: -10px;
  width: 100vw;
  padding-top: ${window.innerWidth < 900 && '80px'};
  background-image: linear-gradient(
      -10deg,
      rgba(155, 151, 133, 0.8),
      rgba(234, 228, 201, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(${Background});
  background-size: contain;
  background-position: right top;

  ${window.innerWidth < 900
    ? css`
        padding-top: 80px;
        height: ${`${window.innerHeight - 80}px`};
      `
    : css`
        height: 100vh;
      `}
`;
