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
      category: '',
    };
  }

  render() {
    const {
      props: {
        data: {
          graphcms: { photos },
        },
      },
      state,
    } = this;

    const setFilterCat = str => {
      this.setState({ category: str });
    };

    const filterByCategories = () => {
      const filtered = photos.edges.filter(({ node }) => {
        return node.category === state.category;
      });

      if (filtered.length) {
        return filtered;
      } else {
        return photos.edges;
      }
    };

    const filteredPhotos = filterByCategories();

    return (
      <MainLayout style={{ background: '#D3D3D3' }}>
        <SEO title="Galeria Inspiracji" />
        <GalleryHeader />
        <SortingBar
          setFilterCat={setFilterCat}
          activeCategory={state.category}
        />
        <PhotosGrid photos={filteredPhotos} />
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
