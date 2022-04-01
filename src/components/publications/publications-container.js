import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Publications from './publications';

import sortMarkdown from '../../utils/sort-markdown';

const PublicationsContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/publications/" } }) {
          edges {
            node {
              html
              frontmatter {
              title
              order
              }
            }
          }
        }
      }
    `,
  );

  const markdown = sortMarkdown(query.markdown.edges, ['order', 'title','filter']);

  return (
    markdown.length > 0
      ? <Publications markdown={markdown} />
      : null
  );
};

export default PublicationsContainer;
