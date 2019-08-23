import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { StyledImg } from './styled';

const GallerySectionPhoto = ({ children, image }) => (
  <Wrapper>
    {children}
    <StyledImg fluid={image.childImageSharp.fluid} />
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
`;

GallerySectionPhoto.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};

export default GallerySectionPhoto;
