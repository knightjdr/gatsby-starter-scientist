import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import About from './about';

const AboutContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        portrait: file(relativePath: { eq: "portrait.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 350) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `,
  );

  return (
    <About
      author={query.site.siteMetadata.author}
      image={query.portrait.childImageSharp.fluid}
    />
  );
};

export default AboutContainer;
