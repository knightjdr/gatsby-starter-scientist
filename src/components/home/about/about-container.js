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
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `,
  );

  return (
    <About
      author={query.site.siteMetadata.author}
      html={query.markdown.html}
      image={query.markdown.frontmatter.portrait.childImageSharp.fluid}
    />
  );
};

export default AboutContainer;
