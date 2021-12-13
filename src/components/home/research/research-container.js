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
                    gatsbyImageData(
                      quality: 70,
                      placeholder: BLURRED,
                      height: 300,
                      width: 300,
                    )
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
