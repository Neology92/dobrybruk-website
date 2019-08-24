import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Icon from '../Icon/Icon';

const Product = ({ children, icon }) => (
  <IconWrapper>
    <div>
      <StyledIcon src={icon} />
    </div>
    <Text>{children}</Text>
  </IconWrapper>
);

const Text = styled.h4`
  color: ${({ theme }) => theme.color.green};
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  padding: 0;
  margin: 5px auto 0;

  ${({ theme }) => theme.media.above.m} {
    color: ${({ theme }) => theme.color.lightGreen};

    &:hover {
      color: ${({ theme }) => theme.color.darkGreen};
    }
  }

  ${({ theme }) => theme.media.above.m} {
    font-size: 1.8rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    font-size: 2.1rem;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => theme.media.above.s} {
      height: 80px;
    }

    ${({ theme }) => theme.media.above.m} {
      height: 80px;
    }

    ${({ theme }) => theme.media.above.l} {
      height: 90px;
    }

    ${({ theme }) => theme.media.above.l} {
      height: 120px;
    }
  }
`;

const StyledIcon = styled(Icon)`
  & > svg {
    height: 72px;

    ${({ theme }) => theme.media.above.s} {
      height: 77px;
    }

    ${({ theme }) => theme.media.above.m} {
      height: 80px;
    }

    ${({ theme }) => theme.media.above.l} {
      height: 90px;
    }

    ${({ theme }) => theme.media.above.xl} {
      height: 95px;
    }

    ${({ theme }) => theme.media.above.xxl} {
      height: 110px;
    }
  }
`;

Product.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Product;
