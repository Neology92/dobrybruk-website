import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';

const PhotoFooter = () => {
  const data = useStaticQuery(graphql`{
  footerImage1: file(relativePath: {eq: "footerImage1.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 290, layout: FIXED)
    }
  }
  footerImage2: file(relativePath: {eq: "footerImage2.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 290, layout: FIXED)
    }
  }
  footerImage3: file(relativePath: {eq: "footerImage3.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 290, layout: FIXED)
    }
  }
  footerImage4: file(relativePath: {eq: "footerImage4.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 290, layout: FIXED)
    }
  }
}`);

  return (
    <Wrapper>
      <GatsbyImage image={data.footerImage1.childImageSharp.gatsbyImageData} />
      <GatsbyImage image={data.footerImage2.childImageSharp.gatsbyImageData} />
      <GatsbyImage image={data.footerImage3.childImageSharp.gatsbyImageData} />
      <GatsbyImage image={data.footerImage4.childImageSharp.gatsbyImageData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.above.m} {
    margin: 20px 0;
    width: 100%;
    height: 290px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    overflow: hidden;
    > * {
      flex-shrink: 0;
    }
  }
`;

export default PhotoFooter;
