import React from 'react';
import styled from 'styled-components';

import truck from 'assets/images/truck.svg';
import paving from 'assets/images/paving.svg';

import { Product } from 'components';

import OfferHeading from './OfferHeading';
import OfferBlock from './OfferBlock';

const Services = () => (
  <Wrapper>
    <OfferHeading>Usługi</OfferHeading>
    <OfferBlock>
      <Product icon={truck}>Transport HDS</Product>
      <Product icon={paving}>Brukarstwo</Product>
    </OfferBlock>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;

  &::before {
    display: none;

    ${({ theme }) => theme.media.above.l} {
      display: block;
      content: '';
      width: 2px;
      height: 60%;
      background: ${({ theme }) => theme.color.white};

      position: absolute;
      top: 30%;
      left: -1px;
    }
  }
`;

export default Services;
