import React from 'react';

import { MainLayout, HeroSection } from 'layouts';
import { SEO } from 'components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
  </MainLayout>
);

export default IndexPage;
