import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from '../../buttons/icon/button';
import Icon from './icon/icon-container';
import Link from '../../link/link';
import Theme from './theme/theme-container';

import getLinks from './links/get-links';

import './navbar.css';

const Navbar = forwardRef((
  {
    handleClick,
    links,
    location,
    transform,
  },
  ref,
) => {
  const navLinks = getLinks(links);

  return (
    <div className="nav">
      <Icon location={location} />
      <div
        className="nav__menu"
        style={{ transform }}
      >
        <ButtonIcon
          ariaLabel="navigation menu"
          icon={faBars}
          kind="primary"
          onClick={handleClick}
          type="button"
        />
        <div
          className="nav__menu-links"
          ref={ref}
        >
          <Link to="/">Home</Link>
          {navLinks}
          <Theme />
        </div>
      </div>
      <div className="nav__right">
        {navLinks}
        <Theme />
      </div>
    </div>
  );
});


Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.shape({}).isRequired,
  transform: PropTypes.string.isRequired,
};

export default Navbar;
