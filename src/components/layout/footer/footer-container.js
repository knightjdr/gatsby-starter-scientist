import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from './footer';

import filterLinks from './filter-links';

const FooterContainer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            links{
              link
              text
            }
          }
        }
      }
    `,
  );

  const { author, links } = site.siteMetadata;

  const filteredLinks = filterLinks(links);

  return (
    <Footer
      author={author}
      links={filteredLinks}
    />
  );
};

export default FooterContainer;
