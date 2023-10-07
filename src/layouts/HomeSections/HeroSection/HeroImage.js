import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "heroImage.png" }) {
        childImageSharp {
          gatsbyImageData(width: 583, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  `);
  // fixed(width: 493, height: 500) {
  // ...GatsbyImageSharpFixed_noBase64

  return (
    <Wrapper>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
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

