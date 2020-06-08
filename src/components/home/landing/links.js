import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../link/link';

const routes = {
  contact: '/#contact',
  opportunities: '/#opportunities',
  people: '/people',
  publications: '/publications',
  research: '/#research',
};

const Links = ({
  links,
}) => (
  links.length > 0
  && (
    <div className="home__landing-links">
      {
        links.map((link) => (
          routes[link]
          && (
            <Link
              buttonStyle
              key={link}
              nav
              to={routes[link]}
            >
              {link}
            </Link>
          )
        ))
      }
    </div>
  )
);

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Links;
