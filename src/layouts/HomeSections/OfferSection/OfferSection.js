import React from 'react';
import styled from 'styled-components';

import brick from 'assets/images/brick.svg';
import plate from 'assets/images/plate.svg';
import aggregate from 'assets/images/aggregate.svg';
import pot from 'assets/images/pot.svg';

import truck from 'assets/images/truck.svg';
import paving from 'assets/images/paving.svg';

import { Product, CallToScroll } from 'components';

import Heading from './Heading';
import OfferHeading from './OfferHeading';
import OfferBlock from './OfferBlock';

const OfferSection = () => (
  <SectionWrapper>
    <Heading>Poznaj nasze:</Heading>
    <OfferHeading>Produkty</OfferHeading>
    <OfferBlock>
      <Product icon={brick}>Kostka brukowa</Product>
      <Product icon={plate}>Płyty tarasowe</Product>
      <Product icon={aggregate}>Kruszywa</Product>
      <Product icon={pot}>Dodatki ogrodowe</Product>
    </OfferBlock>
    <OfferHeading>Usługi</OfferHeading>
    <OfferBlock>
      <Product icon={truck}>Transport HDS</Product>
      <Product icon={paving}>Brukarstwo</Product>
    </OfferBlock>
    <CallToScroll color={({ theme }) => theme.color.white} />
  </SectionWrapper>
);

const SectionWrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default OfferSection;
