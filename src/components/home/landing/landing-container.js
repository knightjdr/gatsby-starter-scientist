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
            primaryLinks
          }
        }
      }
    `,
  );

  const { author, description, primaryLinks } = site.siteMetadata;

  return (
    <Landing
      author={author}
      description={description}
      links={primaryLinks}
    />
  );
};

export default LandingContainer;
