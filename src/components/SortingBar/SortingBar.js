import React from 'react';
import styled from 'styled-components';

import CategoryButton from './CategoryButton';

const SortingBar = () => {
  return (
    <Wrapper>
      <CategoryButton isActive={false}>Donice</CategoryButton>
      <CategoryButton isActive={false}>Płyty Tarasowe</CategoryButton>
      <CategoryButton isActive={false}>Kostka Brukowa</CategoryButton>
      <CategoryButton isActive={false}>Mała Architektura</CategoryButton>
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

  ${({ theme }) => theme.media.above.m} {
    width: 90%;
    height: 100px;
    padding: 0 5%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  ${({ theme }) => theme.media.above.l} {
    width: 80%;
    padding: 0 10%;
    justify-content: flex-start;
  }
`;

export default SortingBar;
