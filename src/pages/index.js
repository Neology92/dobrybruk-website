import React from 'react';

import { MainLayout, HeroSection, OfferSection } from 'layouts';
import { SEO } from 'components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
  </MainLayout>
);

export default IndexPage;
