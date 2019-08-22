import React from 'react';

import HeroWrapper from './HeroWrapper';
import Heading from './Heading';
import Logo from './Logo';
import HeroImage from './HeroImage';
import Buttons from './Buttons';

const HeroSection = () => (
  <HeroWrapper>
    <div style={{ height: '10px' }} />
    <div>
      <Logo />
      <Heading />
      <Buttons />
    </div>
    <HeroImage />
  </HeroWrapper>
);

export default HeroSection;
