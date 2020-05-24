import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';


import Link from '../../link/link';

const Icon = ({
  image,
  isHomePage,
}) => (
  <Link
    className="nav__icon"
    nav
    to="/"
  >
    <Image
      alt="Webiste logo"
      fixed={image}
      height={34}
    />
    { !isHomePage && <span>Home</span> }
  </Link>
);

Icon.propTypes = {
  image: PropTypes.shape({}).isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default Icon;
