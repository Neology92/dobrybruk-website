import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CategoryButton from './CategoryButton';

const SortingBar = ({ filterCats, setFilterCats }) => {
  return (
    <Wrapper>
      <CategoryButton
        isActive={filterCats.Donice}
        onClick={() => setFilterCats({ Donice: !filterCats.Donice })}
      >
        Donice
      </CategoryButton>
      <CategoryButton
        isActive={filterCats.Taras}
        onClick={() => setFilterCats({ Taras: !filterCats.Taras })}
      >
        Płyty Tarasowe
      </CategoryButton>
      <CategoryButton
        isActive={filterCats.Kostka_brukowa}
        onClick={() =>
          setFilterCats({ Kostka_brukowa: !filterCats.Kostka_brukowa })
        }
      >
        Kostka Brukowa
      </CategoryButton>
      <CategoryButton
        isActive={filterCats.Mala_architektura}
        onClick={() =>
          setFilterCats({ Mala_architektura: !filterCats.Mala_architektura })
        }
      >
        Mała Architektura
      </CategoryButton>
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

SortingBar.propTypes = {
  setFilterCats: PropTypes.func.isRequired,
  filterCats: PropTypes.object.isRequired,
};

export default SortingBar;
