import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CityName = ({ name }) => <Name>{name}</Name>;

const Name = styled.h3`
  font-size: 2rem;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 400;
`;

CityName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CityName;
