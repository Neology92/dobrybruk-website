import React from 'react';
import styled from 'styled-components';

import { CallToScroll } from 'components';

import Heading from './Heading';
import Products from './Products';
import Services from './Services';
import OfferImage from './OfferImage';

const OfferSection = () => (
  <SectionWrapper>
    <LeftWrapper>
      <OfferImage />
    </LeftWrapper>

    <RightWrapper>
      <Heading>Poznaj nasze:</Heading>
      <ProductsWrapper>
        <Products />
        <Services />
      </ProductsWrapper>

      <CallToScroll bgColor={({ theme }) => theme.color.white} />
    </RightWrapper>
  </SectionWrapper>
);

const SectionWrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftWrapper = styled.div`
  display: none;
  width: 0;

  ${({ theme }) => theme.media.above.m} {
    display: block;
    background: ${({ theme }) => theme.color.greyL3};

    position: relative;
    overflow: hidden;

    width: 50%;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 37.5%;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 30%;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.media.above.m} {
    width: 50%;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 62.5%;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 70%;
  }
`;

const ProductsWrapper = styled.div`
  ${({ theme }) => theme.media.above.l} {
    height: calc(100% - 90px);

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;

    > div {
      flex-grow: 1;
    }
  }
`;

export default OfferSection;
