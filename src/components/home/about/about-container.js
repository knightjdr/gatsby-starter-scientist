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
            portrait {
              childImageSharp {
                fluid(quality: 90, maxWidth: 350) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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
          image={query.markdown.frontmatter.portrait.childImageSharp.fluid}
          title={query.markdown.frontmatter.title}
        />
      )
      : null
  );
};

export default AboutContainer;
