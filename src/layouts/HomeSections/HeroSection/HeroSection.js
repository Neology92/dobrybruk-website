import React from 'react';

import HeroWrapper from './HeroWrapper';
import Heading from './Heading';
import Logo from './Logo';
import HeroImage from './HeroImage';

const HeroSection = () => (
  <HeroWrapper>
    <div>
      <Logo />
      <Heading />
      {/* 
        Button 
        Button
        
        Photo - absolute
      */}
    </div>
    <HeroImage />
  </HeroWrapper>
);

export default HeroSection;
