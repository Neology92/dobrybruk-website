import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalPhoto = ({ src, name, category }) => (
  <>
    <ModalImg src={src} />
    <Desc>
      <h1>{name}</h1>
      <span>
        {category === 'Donice'
          ? 'Dodatki ogrodowe'
          : category === 'Taras'
          ? 'Płyty tarasowe'
          : category === 'Kostka_brukowa'
          ? 'Kostka brukowa'
          : category === 'Mala_architektura'
          ? 'Mała architektura'
          : category}
      </span>
    </Desc>
  </>
);

const ModalImg = styled.img`
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  margin: 5px;
  object-fit: cover;
`;

const Desc = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;

  background: ${({ theme }) => theme.color.darkGreen};

  position: absolute;
  bottom: 0;
  left: 0;

  padding: 5px;

  span,
  h1 {
    font-size: 2.1rem;
    color: ${({ theme }) => theme.color.white};
    padding: 0;
    margin: 0;
    font-weight: 400;
    line-height: 140%;
  }

  span {
    color: ${({ theme }) => theme.color.greyL3};
  }

  display: flex;
  justify-content: space-between;
`;

ModalPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ModalPhoto;
