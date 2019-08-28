import React from 'react';
import PropTypes from 'prop-types';

import IconWrapper from './IconWrapper';
import Text from './Text';
import { StyledIcon } from './styled';

const Product = ({ children, icon }) => (
  <IconWrapper>
    <div>
      <StyledIcon src={icon} />
    </div>
    <Text>{children}</Text>
  </IconWrapper>
);

Product.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Product;
