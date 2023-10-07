import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { StyledImg } from './styled';

const GallerySectionPhoto = ({ children, image, isLeft }) => (
  <Wrapper isLeft={isLeft}>
    <div>{children}</div>
    <StyledImg image={image.childImageSharp.gatsbyImageData} isLeft={isLeft} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.white};
  font-size: 2.4rem;
  text-align: center;

  > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
  }

  ${({ theme }) => theme.media.above.m} {
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
    justify-content: space-between;

    font-size: 2.6rem;
  }

  ${({ theme }) => theme.media.above.l} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.media.above.xl} {
    font-size: 3.2rem;
  }

  ${({ theme }) => theme.media.above.xxl} {
    font-size: 3.6rem;
  }
`;

GallerySectionPhoto.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  isLeft: PropTypes.bool,
};

GallerySectionPhoto.defaultProps = {
  isLeft: false,
};

export default GallerySectionPhoto;

