import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { StyledLink, StyledImg } from './styled';
import ImgWrapper from './ImgWrapper';

const MasonryGrid = ({ photos }) => {
  return (
    <Wrapper>
      {photos.edges.map(edge => (
        <ImgWrapper key={edge.node.id}>
          <StyledLink to={`/galeria-inspiracji/${/*edge.node.id*/ ``}`}>
            <StyledImg src={edge.node.image.url} alt={edge.node.name} />
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

MasonryGrid.propTypes = {
  photos: PropTypes.object.isRequired,
};

export default MasonryGrid;
