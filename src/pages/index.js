import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';

import {
  MainLayout,
  HeroSection,
  OfferSection,
  NewsSection,
  GallerySection,
  ContactSection,
} from 'layouts';
import { SEO, PhotoFooter } from 'components';

const IndexPage = ({  }) => (
  <MainLayout isNews={false}>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
    <NewsSection edges={{}} />
    <GallerySection />
    <ContactSection />
    <PhotoFooter />
  </MainLayout>
);

// export const infoQuery = graphql`
//   query {
//     graphcms {
//       newses: newsesConnection(
//         orderBy: createdAt_DESC
//         where: { status: PUBLISHED }
//       ) {
//         edges {
//           node {
//             status
//             updatedAt
//             createdAt
//             id
//             info
//           }
//         }
//       }
//     }
//   }
// `;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
