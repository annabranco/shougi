import styled from 'styled-components';

export const GameArea = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${window.innerWidth < 900 && '80px'};
`;
