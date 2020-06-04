import React from 'react';
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
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  return (
    <Hero
      image={query.hero.childImageSharp.fluid}
      {...props}
    />
  );
};

export default HeroContainer;
