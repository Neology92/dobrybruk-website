import React from 'react';
import styled from 'styled-components';

const SortingBar = () => {
  return (
    <Wrapper>
      <CategoryButton>Donice</CategoryButton>
      <CategoryButton>Płyty Tarasowe</CategoryButton>
      <CategoryButton>Kostka Brukowa</CategoryButton>
      <CategoryButton>Mała Architektura</CategoryButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  height: 230px;
  padding: 0 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: ${({ theme }) => theme.color.greyL2};
`;

const CategoryButton = styled.button`
  background: none;
  border: none;

  margin: 9px 0;
  padding: 0;

  color: ${({ theme }) => theme.color.darkGrey};

  font-size: 2.2rem;
  font-weight: 500;
`;
export default SortingBar;
