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
            footerLinks{
              link
              text
            }
          }
        }
      }
    `,
  );

  const { author, footerLinks } = site.siteMetadata;

  const filteredLinks = filterLinks(footerLinks);

  return (
    <Footer
      author={author}
      links={filteredLinks}
    />
  );
};

export default FooterContainer;
