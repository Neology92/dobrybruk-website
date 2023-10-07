import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Photo2 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "galleryHeaderPhoto2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 541
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />;
};

export default Photo2;

