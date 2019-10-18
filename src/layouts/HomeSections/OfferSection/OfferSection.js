import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import Products from './Products';
import Services from './Services';
import OfferImage from './OfferImage';

const OfferSection = () => (
  <SectionWrapper id="oferta">
    <LeftWrapper>
      <OfferImage />
    </LeftWrapper>

    <RightWrapper>
      <Heading>Poznaj nasze:</Heading>
      <ProductsWrapper>
        <Products />
        <Services />
      </ProductsWrapper>
    </RightWrapper>
  </SectionWrapper>
);

const SectionWrapper = styled.section`
  margin: 0 0 40px 0;
  overflow: hidden;

  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  ${({ theme }) => theme.media.above.m} {
    margin: 0;
  }
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
