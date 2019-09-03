import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { StyledLink, StyledImg } from './styled';
import ImgWrapper from './ImgWrapper';

const PhotosGrid = ({ photos }) => {
  return (
    <Wrapper>
      {photos.map(photo => (
        <ImgWrapper key={photo.node.id}>
          <StyledLink to={`/galeria-inspiracji/${/*photo.node.id*/ ``}`}>
            <StyledImg src={photo.node.image.url} alt={photo.node.name} />
          </StyledLink>
        </ImgWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 95%;
  margin: 60px auto;

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.above.s} {
    width: 80%;

    flex-direction: row;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 80%;
    margin: 70px auto;
  }

  ${({ theme }) => theme.media.above.m} {
    width: 80%;
  }
`;

PhotosGrid.propTypes = {
  photos: PropTypes.object.isRequired,
};

export default PhotosGrid;
