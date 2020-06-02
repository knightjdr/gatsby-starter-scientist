import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Landing from './landing';

const LandingContainer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
          }
        }
      }
    `,
  );

  return (
    <Landing
      author={site.siteMetadata.author}
      description={site.siteMetadata.description}
    />
  );
};

export default LandingContainer;
