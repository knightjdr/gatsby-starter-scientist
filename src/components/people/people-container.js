import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import People from './people';

import sortMarkdown from '../../utils/sort-markdown';

const PeopleContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/people/" } }) {
          edges {
            node {
              html
              frontmatter {
                email
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
                name
                title
                order
              }
            }
          }
        }
      }
    `,
  );

  const markdown = sortMarkdown(query.markdown.edges, ['order', 'name']);

  return (
    markdown.length > 0
      ? <People markdown={markdown} />
      : null
  );
};

export default PeopleContainer;
