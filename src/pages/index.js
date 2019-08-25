import React from 'react';

import {
  MainLayout,
  HeroSection,
  OfferSection,
  GallerySection,
  ContactSection,
} from 'layouts';
import { SEO, PhotoFooter } from 'components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
    <GallerySection />
    <ContactSection />
    <PhotoFooter />
  </MainLayout>
);

export default IndexPage;
