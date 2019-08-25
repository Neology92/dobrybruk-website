import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';

const PhotoFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      footerImage1: file(relativePath: { eq: "footerImage1.jpg" }) {
        childImageSharp {
          fixed(height: 290) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      footerImage2: file(relativePath: { eq: "footerImage2.jpg" }) {
        childImageSharp {
          fixed(height: 290) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      footerImage3: file(relativePath: { eq: "footerImage3.jpg" }) {
        childImageSharp {
          fixed(height: 290) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      footerImage4: file(relativePath: { eq: "footerImage4.jpg" }) {
        childImageSharp {
          fixed(height: 290) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Img fixed={data.footerImage1.childImageSharp.fixed} />
      <Img fixed={data.footerImage2.childImageSharp.fixed} />
      <Img fixed={data.footerImage3.childImageSharp.fixed} />
      <Img fixed={data.footerImage4.childImageSharp.fixed} />
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
