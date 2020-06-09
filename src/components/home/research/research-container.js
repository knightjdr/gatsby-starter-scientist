import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Research from './research';

import sortMarkdown from '../../../utils/sort-markdown';

const ResearchContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/research/" } }) {
          edges {
            node {
              html
              frontmatter {
                image {
                  childImageSharp {
                    fluid(quality: 90, maxHeight: 300, maxWidth: 300) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                title
                order
              }
            }
          }
        }
      }
    `,
  );

  const markdown = sortMarkdown(query.markdown.edges, ['order', 'title']);

  return (
    markdown.length > 0
      ? <Research markdown={markdown} />
      : null
  );
};

export default ResearchContainer;
