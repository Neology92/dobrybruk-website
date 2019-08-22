import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Icon from '../Icon/Icon';

const Product = ({ children, icon }) => (
  <div>
    <IconWrapper>
      <Icon src={icon} />
    </IconWrapper>
    <Text>{children}</Text>
  </div>
);

const Text = styled.h4`
  color: ${({ theme }) => theme.color.lightGreen};
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  padding: 0;
  margin: 5px auto 0;
`;

const IconWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Product.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Product;
