import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from '../buttons/icon/button';
import Icon from './icon/icon-container';
import Link from '../link/link';
import Theme from './theme/theme-container';

import './navbar.css';

const SharedLinks = () => (
  <>
    <Link to="/publications">
      <FontAwesomeIcon icon={faBook} />
      Publications
    </Link>
  </>
);

const Navbar = forwardRef((
  {
    handleClick,
    location,
    transform,
  },
  ref,
) => (
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
        <SharedLinks />
        <Theme />
      </div>
    </div>
    <div className="nav__right">
      <SharedLinks />
      <Theme />
    </div>
  </div>
));


Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
  transform: PropTypes.string.isRequired,
};

export default Navbar;
