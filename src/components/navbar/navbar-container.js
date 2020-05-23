import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Navbar from './navbar';

import useClickOutside from '../../utils/hooks/click-outside/use-click-outside';

const NavbarContainer = ({
  pathName,
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
      pathName={pathName}
      ref={navRef}
    />
  );
};

NavbarContainer.defaultProps = {
  pathName: '/',
};

NavbarContainer.propTypes = {
  pathName: PropTypes.string,
};

export default NavbarContainer;
