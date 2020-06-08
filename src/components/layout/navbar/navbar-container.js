import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Navbar from './navbar';

import getMenuState from './get-menu-state';
import useClickOutside from '../../../utils/hooks/click-outside/use-click-outside';
import useLinks from './links/use-links';

const NavbarContainer = ({
  location,
}) => {
  const [menuState, toggleMenu] = useState(getMenuState());
  const navRef = useRef();
  const links = useLinks();

  const closeMenu = () => {
    if (menuState.isOpen) {
      toggleMenu(getMenuState(menuState, navRef));
    }
  };

  useClickOutside(navRef, closeMenu);

  const handleClick = () => {
    toggleMenu(getMenuState(menuState, navRef));
  };

  return (
    <Navbar
      handleClick={handleClick}
      links={links}
      location={location}
      ref={navRef}
      transform={menuState.transform}
    />
  );
};

NavbarContainer.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default NavbarContainer;
