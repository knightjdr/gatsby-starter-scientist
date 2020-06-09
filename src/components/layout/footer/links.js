import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../link/link';
import Logo from '../../../images/logo.inline.svg';

const Links = ({
  links,
}) => (
  <div className="footer__links">
    <Link
      aria-label="Home"
      className="footer__icon"
      nav
      to="/"
    >
      <div className="footer__icon-svg-container">
        <Logo />
      </div>
    </Link>
    <ul>
      {
        links.map((link) => (
          <li key={link.text}>
            <Link to={link.link}>
              {link.text}
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
);

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Links;
