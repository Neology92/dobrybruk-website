import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Photo2 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "galleryHeaderPhoto2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 541, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
};

export default Photo2;
