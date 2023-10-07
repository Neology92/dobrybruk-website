import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const OfferImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "offerSectionImage.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 532
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `);
  // fixed(width: 493, height: 500) {
  // ...GatsbyImageSharpFixed_noBase64

  return <StyledImg image={data.file.childImageSharp.gatsbyImageData} />;
};

const StyledImg = styled(GatsbyImage)`
  position: absolute;
  top: -20px;
  left: -20px;
`;

export default OfferImage;

