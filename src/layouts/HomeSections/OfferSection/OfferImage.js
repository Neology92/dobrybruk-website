import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const OfferImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "offerImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 532, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  // fixed(width: 493, height: 500) {
  // ...GatsbyImageSharpFixed_noBase64

  return <StyledImg fluid={data.file.childImageSharp.fluid} />;
};

const StyledImg = styled(Img)`
  position: absolute;
  top: -20px;
  left: -20px;
`;

export default OfferImage;
