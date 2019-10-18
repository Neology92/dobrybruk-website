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
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo2: file(relativePath: { eq: "inspirationPhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo3: file(relativePath: { eq: "inspirationPhoto3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
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
      <GallerySectionPhoto image={data.photo2} isLeft>
        Potrzebujesz ożywienia twórczego?
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
  overflow: hidden;

  width: 100%;
  min-height: 100px;

  background: ${({ theme }) => theme.color.green};

  ${({ theme }) => theme.media.above.m} {
    padding: 0 0 70px 0;

    position: relative;
    & ::before {
      content: '';
      width: 80px;
      height: 80px;
      background: ${({ theme }) => theme.color.darkGreen};
      transform: rotate(45deg);

      position: absolute;
      top: -40px;
      left: calc(50% - 40px);

      z-index: 9;
    }

    & ::after {
      content: '';
      width: 100%;
      height: 10px;

      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;

      background: ${({ theme }) => theme.color.darkGreen};
    }
  }
`;

export default GallerySection;
