import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO, MasonryGrid, GalleryHeader, SortingBar } from 'components';

class GaleriaInspiracji extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      data: {
        graphcms: { photos },
      },
    } = this.props;

    return (
      <MainLayout style={{ background: '#D3D3D3' }}>
        <SEO title="Galeria Inspiracji" />
        <GalleryHeader />
        <SortingBar />
        <MasonryGrid photos={photos} />
      </MainLayout>
    );
  }
}

export const imagesQuery = graphql`
  query {
    graphcms {
      photos: photosConnection(
        orderBy: createdAt_ASC
        where: { status: PUBLISHED }
      ) {
        edges {
          node {
            id
            name
            category
            image {
              url
            }
          }
        }
      }
    }
  }
`;

GaleriaInspiracji.propTypes = {
  data: PropTypes.node.isRequired,
};

export default GaleriaInspiracji;
