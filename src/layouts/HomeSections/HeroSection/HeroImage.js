import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "heroImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 583, quality: 100) {
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
  width: 38vw;
  max-width: 583px;
  position: absolute;
  top: 40px;
  right: 0;

  ${({ theme }) => theme.media.above.m} {
    width: 35vw;
    top: 0;
  }

  ${({ theme }) => theme.media.above.l} {
    width: 40vw;
    top: 0;
  }

  ${({ theme }) => theme.media.above.xl} {
    width: 45vw;
    top: 0;
  }
`;

export default HeroImage;
