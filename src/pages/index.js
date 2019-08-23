import React from 'react';

import {
  MainLayout,
  HeroSection,
  OfferSection,
  GallerySection,
  ContactSection,
} from 'layouts';
import { SEO } from 'components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
    <GallerySection />
    <ContactSection />
  </MainLayout>
);

export default IndexPage;
