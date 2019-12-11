import styled, { css, createGlobalStyle } from 'styled-components';
import { Background } from '../../../assets/images';
import { BLACK } from '../../../system/constants';
import { returnResponsiveValue } from '../../../system/utils';

export const ClearStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const InfoArea = styled.aside`
  z-index: 9;
  position: absolute;
  width: 100%;
  height: 100px;
  ${props =>
    props.team === BLACK
      ? css`
          bottom: ${returnResponsiveValue('20px;', '60px;', '20px;', '6px;')};
        `
      : css`
          top: ${returnResponsiveValue('20px;', '70px;', '10px;', '6px;')};
        `}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.p`
  font-family: 'Sawarabi Mincho', sans-serif;
  font-size: ${returnResponsiveValue('2rem;', '1.3rem;', '2rem;', '1.5rem;')};
  text-shadow: 0 0 2px black;
  color: white;
  opacity: 0.9;
  transition: all 1s ease;
`;

export const GameArea = styled.main`
  position: fixed;
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
  padding-top: ${returnResponsiveValue('-70px', '20px', '80px', '30px')};
  height: ${returnResponsiveValue(
    '100vh',
    '100vh',
    `${window.innerHeight - 65}px`,
    `${window.innerHeight - 20}px`
  )};
`;
