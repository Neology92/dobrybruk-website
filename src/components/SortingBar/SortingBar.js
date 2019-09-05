import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CategoryButton from './CategoryButton';

const SortingBar = ({ activeCategory, setFilterCat }) => {
  const switchCategory = cat => {
    if (activeCategory === cat) {
      setFilterCat('');
    } else {
      setFilterCat(cat);
    }
  };

  return (
    <Wrapper>
      <CategoryButton
        isActive={activeCategory === 'Taras'}
        onClick={() => switchCategory('Taras')}
      >
        <span tabIndex="-1">Płyty Tarasowe</span>
      </CategoryButton>

      <CategoryButton
        isActive={activeCategory === 'Kostka_brukowa'}
        onClick={() => switchCategory('Kostka_brukowa')}
      >
        <span tabIndex="-1">Kostka Brukowa</span>
      </CategoryButton>

      <CategoryButton
        isActive={activeCategory === 'Mala_architektura'}
        onClick={() => switchCategory('Mala_architektura')}
      >
        <span tabIndex="-1">Mała Architektura</span>
      </CategoryButton>

      <CategoryButton
        isActive={activeCategory === 'Kamienie'}
        onClick={() => switchCategory('Kamienie')}
      >
        <span tabIndex="-1">Kamienie, kruszywa</span>
      </CategoryButton>

      <CategoryButton
        isActive={activeCategory === 'Betonowe_drewno'}
        onClick={() => switchCategory('Betonowe_drewno')}
      >
        <span tabIndex="-1">Betonowe Drewno</span>
      </CategoryButton>

      <CategoryButton
        isActive={activeCategory === 'Donice'}
        onClick={() => switchCategory('Donice')}
      >
        <span tabIndex="-1">Donice, dodatki</span>
      </CategoryButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  height: 300px;
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

SortingBar.propTypes = {
  setFilterCat: PropTypes.func.isRequired,
  activeCategory: PropTypes.object.isRequired,
};

export default SortingBar;
