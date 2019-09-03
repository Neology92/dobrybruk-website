/* eslint react/no-unused-state: 0 no-console:0*/

import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { MainLayout } from 'layouts';
import { SEO, PhotosGrid, GalleryHeader, SortingBar } from 'components';

class GaleriaInspiracji extends Component {
  constructor() {
    super();
    this.state = {
      Donice: false,
      Taras: false,
      Mala_architektura: false,
      Kostka_brukowa: false,
    };
  }

  render() {
    const {
      data: {
        graphcms: { photos },
      },
    } = this.props;

    const setFilterCats = obj => {
      this.setState(obj);
      console.log('update');
    };

    return (
      <MainLayout style={{ background: '#D3D3D3' }}>
        <SEO title="Galeria Inspiracji" />
        <GalleryHeader />
        <SortingBar setFilterCats={setFilterCats} filterCats={this.state} />
        <PhotosGrid photos={photos} />
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
        aggregate {
          count
        }
      }
    }
  }
`;

GaleriaInspiracji.propTypes = {
  data: PropTypes.node.isRequired,
};

export default GaleriaInspiracji;
