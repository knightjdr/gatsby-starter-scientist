import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({
  children,
  image,
  ...props
}) => {
  const backgroundFluidImageStack = [
    image,
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  ].reverse();

  return (
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      {...props}
    >
      {children}
    </BackgroundImage>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default Hero;
