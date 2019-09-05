import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Photo1 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "galleryHeaderPhoto1.jpg" }) {
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

export default Photo1;
