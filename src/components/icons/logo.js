import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const IconLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const image = getImage(data.myImage);

  return <GatsbyImage image={image} alt="My Image" />;
};

export default IconLogo;
