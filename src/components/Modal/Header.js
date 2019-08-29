import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ name, photo1, photo2 }) => {
  return (
    <Wrapper>
      <div>
        <Img fluid={photo1} />
      </div>

      <div>
        <Img fluid={photo2} />
      </div>
      <Title>{name}</Title>
    </Wrapper>
  );
};

const Title = styled.h2`
  width: calc(18vh * 1.7);
  height: 30px;
  padding: 10px 0 0 0;
  margin: 0;

  position: absolute;
  top: 0;
  left: calc(50% - calc(9vh * 1.7));

  background: ${({ theme }) => theme.color.greyL1};

  & ::after {
    content: '';
    width: 0;
    height: 0;

    border-top: calc(9vh * 1.7) solid ${({ theme }) => theme.color.greyL1};
    border-right: calc(9vh * 1.7) solid transparent;
    border-bottom: calc(9vh * 1.7) solid transparent;
    border-left: calc(9vh * 1.7) solid transparent;

    position: absolute;
    top: 40px;
    left: calc(50% - calc(9vh * 1.7));
  }

  font-size: 2rem;
  text-align: center;

  ${({ theme }) => theme.media.above.xl} {
    font-size: 2.2rem;
  }

  ${({ theme }) => theme.media.above.xxl} {
    font-size: 2.4rem;
  }
`;

const Wrapper = styled.header`
  width: calc(100% - 20px);
  height: calc(32% - 15px);
  margin: 10px 10px 5px;

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: center;

  & > div {
    height: 100%;
    width: 31%;

    margin: 0 20px;
  }
`;

Header.propTypes = {
  name: PropTypes.string.isRequired,
  photo1: PropTypes.string.isRequired,
  photo2: PropTypes.string.isRequired,
};

export default Header;
