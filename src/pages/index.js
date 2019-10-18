import React from 'react';
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

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <HeroSection />
    <OfferSection />
    <NewsSection />
    <GallerySection />
    <ContactSection />
    <PhotoFooter />
  </MainLayout>
);

// export const infoQuery = graphql`
//   query {
//     graphcms {
//       newses: newsesConnection(first: 1) {
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

export default IndexPage;
