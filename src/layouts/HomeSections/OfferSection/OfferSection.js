import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import OfferHeading from './OfferHeading';

const OfferSection = () => (
  <SectionWrapper>
    <Heading>Poznaj nasze:</Heading>
    <OfferHeading>Produkty</OfferHeading>
    <OfferHeading>Usługi</OfferHeading>
  </SectionWrapper>
);

const SectionWrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default OfferSection;
