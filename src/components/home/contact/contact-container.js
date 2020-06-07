import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Contact from './contact';

const ContactContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
          html
        }
      }
    `,
  );

  return (
    <Contact html={query.markdown.html} />
  );
};

export default ContactContainer;
