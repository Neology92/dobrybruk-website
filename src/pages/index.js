import React from 'react';
import PropTypes from 'prop-types';

import {
  MainLayout,
  HeroSection,
  OfferSection,
  // NewsSection,
  GallerySection,
  ContactSection,
} from 'layouts';
import { SEO, PhotoFooter } from 'components';

const IndexPage = ({}) => (
  <MainLayout isNews={false}>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
    {/* <NewsSection edges={{}} /> */}
    <GallerySection />
    <ContactSection />
    <PhotoFooter />
  </MainLayout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

