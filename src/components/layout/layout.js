import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from '../navbar/navbar-container';

import './layout.css';

const Layout = ({
  children,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `,
  );

  const { author } = site.siteMetadata;

  return (
    <div
      className="layout"
    >
      <Navbar />
      <noscript className="noscript-warning">
        This site relies on JavaScript which is currently disabled in your browser.
        Some functionality will be missing as a result.
      </noscript>
      <main>{children}</main>
      <footer>
        ©
        {' '}
        {author}
        {' '}
        {new Date().getFullYear()}
        .
      </footer>
    </div>
  );
};


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
