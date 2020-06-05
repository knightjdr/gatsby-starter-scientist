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
                    fluid(quality: 90, maxWidth: 300) {
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
    <Research markdown={markdown} />
  );
};

export default ResearchContainer;
