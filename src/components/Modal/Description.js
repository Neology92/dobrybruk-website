import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon/Icon';

const Description = ({ children, icon }) => {
  return (
    <Wrapper>
      <Icon src={icon} />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: calc(50% - 20px);
  height: calc(100% - 20px);
  margin: 10px;

  background: ${({ theme }) => theme.color.greyL2};
`;

Description.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Description;
