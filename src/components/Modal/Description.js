import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon/Icon';

const Description = ({ children, icon }) => {
  return (
    <Wrapper>
      <Stripe>
        <StyledIcon src={icon} />
        Dostępne u nas:
      </Stripe>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: calc(50% - 20px);
  height: calc(100% - 20px);
  margin: 10px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background: ${({ theme }) => theme.color.greyL2};
`;

const ChildrenWrapper = styled.div`
  height: 70%;
  width: calc(100% - 20px);

  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2.2rem;
    font-weight: 500;
  }

  span {
    color: ${({ theme }) => theme.color.darkGreen};
  }

  ul {
    list-style-type: circle;
  }

  li {
    padding: 3px 5px;
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.green};
  }

  ${({ theme }) => theme.media.above.xxxl} {
    p {
      font-size: 2.5rem;
    }
    li {
      font-size: 2.4rem;
    }
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: -50px;
  left: 30px;

  svg {
    width: 100px;
  }

  ${({ theme }) => theme.media.above.xxl} {
    svg {
      width: 120px;
    }
  }

  ${({ theme }) => theme.media.above.xxxl} {
    svg {
      width: 160px;
    }
  }
`;

const Stripe = styled.header`
  width: 70%;
  height: 13%;
  padding: 0 40px 0 0;

  background: ${({ theme }) => theme.color.green};
  position: absolute;
  left: -10px;
  top: 10%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
`;

Description.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Description;
