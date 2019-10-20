import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  MainLayout,
  HeroSection,
  OfferSection,
  NewsSection,
  GallerySection,
  ContactSection,
} from 'layouts';
import { SEO, PhotoFooter } from 'components';

const IndexPage = ({ data }) => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
    <NewsSection edges={data.graphcms.newses.edges} />
    <GallerySection />
    <ContactSection />
    <PhotoFooter />
  </MainLayout>
);

export const infoQuery = graphql`
  query {
    graphcms {
      newses: newsesConnection(
        orderBy: createdAt_DESC
        where: { status: PUBLISHED }
      ) {
        edges {
          node {
            status
            updatedAt
            createdAt
            id
            info
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
