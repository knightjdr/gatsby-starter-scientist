import React from 'react';

import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

import './404.css';

const NotFoundPage = () => (
  <>
    <SEO
      description="Page not found"
      title="404"
    />
    <div className="missing">
      <h1>404</h1>
      <p>
        The page you were looking for could not be found.
      </p>
      <Link
        className="missing__link"
        nav
        to="/"
      >
        Home
      </Link>
    </div>
  </>
);

export default NotFoundPage;
