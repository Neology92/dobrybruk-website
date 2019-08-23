import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { GallerySectionPhoto, CallToScroll } from 'components';
import { StyledButton } from './styled';

const GallerySection = () => {
  const data = useStaticQuery(graphql`
    query {
      photo1: file(relativePath: { eq: "inspirationPhoto1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo2: file(relativePath: { eq: "inspirationPhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      photo3: file(relativePath: { eq: "inspirationPhoto3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <SectionWrapper>
      <GallerySectionPhoto image={data.photo1}>
        Szukasz inspiracji?
      </GallerySectionPhoto>
      <GallerySectionPhoto image={data.photo2}>
        Potrzebujesz ożywienia twórczego
      </GallerySectionPhoto>
      <GallerySectionPhoto image={data.photo3}>
        Zajrzyj do naszej galerii
        <StyledButton to="/galeria-inspiracji" isWhite>
          Zobacz więcej
        </StyledButton>
      </GallerySectionPhoto>
      <CallToScroll bgColor={({ theme }) => theme.color.green} />
    </SectionWrapper>
  );
};
const SectionWrapper = styled.section`
  width: 100%;
  min-height: 100px;

  background: ${({ theme }) => theme.color.green};
`;

export default GallerySection;
