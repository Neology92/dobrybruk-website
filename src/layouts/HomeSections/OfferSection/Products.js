import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import brick from 'assets/images/brick.svg';
import plate from 'assets/images/plate.svg';
import aggregate from 'assets/images/aggregate.svg';
import pot from 'assets/images/pot.svg';

import { Product } from 'components';

import OfferHeading from './OfferHeading';
import OfferBlock from './OfferBlock';

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      brickPhoto1: file(relativePath: { eq: "offer/brickPhoto1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brickPhoto2: file(relativePath: { eq: "offer/brickPhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      platePhoto1: file(relativePath: { eq: "offer/platePhoto1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      platePhoto2: file(relativePath: { eq: "offer/platePhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      potPhoto1: file(relativePath: { eq: "offer/potPhoto1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      potPhoto2: file(relativePath: { eq: "offer/potPhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      aggregatePhoto1: file(relativePath: { eq: "offer/aggregatePhoto1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aggregatePhoto2: file(relativePath: { eq: "offer/aggregatePhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <OfferHeading>Produkty</OfferHeading>
      <OfferBlock>
        <Product
          icon={brick}
          name="Kostka brukowa"
          photo1={data.brickPhoto1.childImageSharp.fluid}
          photo2={data.brickPhoto2.childImageSharp.fluid}
        >
          content
        </Product>
        <Product
          icon={plate}
          name="Płyty tarasowe"
          photo1={data.platePhoto1.childImageSharp.fluid}
          photo2={data.platePhoto2.childImageSharp.fluid}
        >
          content
        </Product>
        <Product
          icon={aggregate}
          name="Kruszywa, kamienie"
          photo1={data.aggregatePhoto1.childImageSharp.fluid}
          photo2={data.aggregatePhoto2.childImageSharp.fluid}
        >
          content
        </Product>
        <Product
          icon={pot}
          name="Dodatki ogrodowe"
          photo1={data.potPhoto1.childImageSharp.fluid}
          photo2={data.potPhoto2.childImageSharp.fluid}
        >
          content
        </Product>
      </OfferBlock>
    </div>
  );
};

export default Products;
