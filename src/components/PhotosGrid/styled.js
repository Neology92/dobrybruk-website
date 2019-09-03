import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  display: block;
  background: none;
  outline: none;
  border: none;

  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 100%;

  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.04);
  }
`;

export { StyledButton, StyledImg };
