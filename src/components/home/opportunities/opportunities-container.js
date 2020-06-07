import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Opportunities from './opportunities';

const OpportunitiesContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/opportunities.md/" }) {
          html
        }
      }
    `,
  );

  return (
    query.markdown === null
    || query.markdown.html === ''
      ? null
      : <Opportunities html={query.markdown.html} />
  );
};

export default OpportunitiesContainer;
