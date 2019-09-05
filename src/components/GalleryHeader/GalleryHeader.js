import React from 'react';

import styled from 'styled-components';

import Heading from './Heading';
import { Photo1, Photo2 } from './Photos';

const GalleryHeader = () => (
  <Wrapper>
    <div>
      <Photo1 />
    </div>
    <div>
      <Photo2 />
    </div>
    <Heading>Galeria Inspiracji</Heading>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.color.greyL1};

  & > div {
    display: none;
  }

  ${({ theme }) => theme.media.above.m} {
    height: 300px;
    & > div {
      display: block;
      height: 100%;
      width: 41%;

      margin: 50px 20px 0;
    }
  }

  ${({ theme }) => theme.media.above.l} {
    height: 375px;
    & > div {
      width: 41%;
      margin: 50px 20px 0;
    }
  }

  ${({ theme }) => theme.media.above.xxl} {
    & > div {
      width: 31%;
    }
  }

  ${({ theme }) => theme.media.above.xxxl} {
    & > div {
      width: 541px;
    }
  }
`;

export default GalleryHeader;
