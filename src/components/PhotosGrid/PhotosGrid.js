import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Photo from './Photo';

const PhotosGrid = ({ photos }) => {
  return (
    <Wrapper>
      {photos.map(photo => (
        <Photo node={photo.node} key={photo.node.id} />
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
    width: 81%;

    flex-direction: row;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.media.above.m} {
    margin: 70px auto;
  }
`;

PhotosGrid.propTypes = {
  photos: PropTypes.object.isRequired,
};

export default PhotosGrid;
