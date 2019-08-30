import React from 'react';
import styled from 'styled-components';

const GalleryHeader = () => (
  <Wrapper>
    <Heading>Galeria Inspiracji</Heading>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  height: 215px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.color.greyL1};
  ${({ theme }) => theme.media.above.m} {
    height: 300px;
  }
`;

const Heading = styled.h1`
  width: 320px;
  height: 70px;

  background: ${({ theme }) => theme.color.green};

  text-align: center;
  line-height: 65px;
  color: ${({ theme }) => theme.color.white};
  font-size: 3.2rem;
  font-weight: 500;

  position: relative;

  ::after {
    content: '';
    width: 32px;
    height: 32px;

    transform: rotate(45deg);
    background: ${({ theme }) => theme.color.green};

    position: absolute;
    bottom: -16px;
    left: calc(50% - 16px);
  }
`;

export default GalleryHeader;
