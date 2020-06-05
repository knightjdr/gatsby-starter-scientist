import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import Footer from './footer/footer-container';
import Navbar from './navbar/navbar-container';

import './layout.css';

const Layout = ({
  children,
}) => (
  <Location>
    {
      ({ location }) => (
        <div className="layout">
          <Navbar location={location} />
          <noscript className="noscript-warning">
            This site relies on JavaScript which is currently disabled in your browser.
            Some functionality will be missing as a result.
          </noscript>
          <main>{children}</main>
          <Footer />
        </div>
      )
    }
  </Location>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
