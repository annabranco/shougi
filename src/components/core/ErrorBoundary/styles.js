import styled from 'styled-components';

export const ErrorArea = styled.div`
padding: 80px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      #ffffff,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
`;

export const ErrorTitle = styled.h2`
  margin-top: 100px;
  font-family: 'Corben', cursive;
  font-size: 2rem;
  text-align: left;
`;

export const ErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export const ErrorMessage = styled.p`
  margin: 0 0 20px;
  width: 80%;
  font-family: 'Corben', cursive;
  font-size: 1.3rem;
  line-height: 1.5;
  color: darkred;
  text-align: left;
`;

export const Link = styled.a`
  padding: 5px 0;
  text-decoration: none;
  margin-top: 40px;
`;

export const ErrorButton = styled.button`
width: 120px;
  position: relative;
  right: 0;
  margin: 4px 0 0 5px;
  font-family: 'Acme', sans-serif;
  font-size: 1.3rem;
  color: black;
  cursor: pointer;

  &:hover::before {
    background: green;
  }

  padding-left: 25px;
  &::before {
    content:'';
    width: 10px;
    height: 10px;
    background: red;
    display: inline-block;
    position: absolute;
    left: 5px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: background ease .5s;
`;

export const GithubIcon = styled.i`
  display: inline;
  margin-left: 15px;
  vertical-align: middle;
  text-shadow: 0 0 1px black;
  font-size: 2rem;
`;
