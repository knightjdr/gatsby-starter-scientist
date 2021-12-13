import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import About from './about';

const AboutContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
          html
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(
                  quality: 70,
                  placeholder: BLURRED,
                  width: 350,
                )
              }
            }
            title
          }
        }
      }
    `,
  );

  return (
    query.markdown
      ? (
        <About
          html={query.markdown.html}
          image={query.markdown.frontmatter.image.childImageSharp.gatsbyImageData}
          title={query.markdown.frontmatter.title}
        />
      )
      : null
  );
};

export default AboutContainer;
