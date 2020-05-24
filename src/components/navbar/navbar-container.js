import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Navbar from './navbar';

import useClickOutside from '../../utils/hooks/click-outside/use-click-outside';

const NavbarContainer = ({
  location,
}) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const navRef = useRef();

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu(false);
    }
  };

  useClickOutside(navRef, closeMenu);

  const handleClick = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <Navbar
      handleClick={handleClick}
      isMenuOpen={isMenuOpen}
      location={location}
      ref={navRef}
    />
  );
};

NavbarContainer.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default NavbarContainer;
