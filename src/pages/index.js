import React from 'react';

import { MainLayout, HeroSection, OfferSection, GallerySection } from 'layouts';
import { SEO } from 'components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
    <GallerySection />
  </MainLayout>
);

export default IndexPage;
