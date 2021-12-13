import React from 'react';
import { getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby';

import Hero from './hero';

const HeroContainer = ({
  ...props
}) => {
  const query = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 70,
              placeholder: BLURRED,
              width: 1920,
            )
          }
        }
      }
    `,
  );

  const image = getImage(query.hero);

  return (
    <Hero
      image={image}
      {...props}
    />
  );
};

export default HeroContainer;
