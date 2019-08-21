import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "heroImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 852, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  // fixed(width: 493, height: 500) {
  // ...GatsbyImageSharpFixed_noBase64

  return (
    <Wrapper>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40vw;
  position: absolute;
  top: 0;
  right: 0;
`;

export default HeroImage;
