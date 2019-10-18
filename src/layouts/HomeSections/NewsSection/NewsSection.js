import React from 'react';

import { CallToScroll } from 'components';

import SectionWrapper from './SectionWrapper';
import Header from './Header';
import Info from './Info';

const NewsSection = () => (
  <>
    <SectionWrapper>
      <Header>Aktualności</Header>
      <Info>26 Październik 2019 [sobota] - nieczynne</Info>
    </SectionWrapper>
    <CallToScroll bgColor={({ theme }) => theme.color.white} />
  </>
);

export default NewsSection;
