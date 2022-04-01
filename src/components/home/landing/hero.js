import PropTypes from 'prop-types';
import React from 'react';
import { BgImage } from 'gbimage-bridge';

const Hero = ({
  children,
  image,
  ...props
}) => {
  const backgroundFluidImageStack = [
    image,
    'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))',
  ].reverse();

  return (
    <BgImage
      image={backgroundFluidImageStack}
      {...props}
    >
      {children}
    </BgImage>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default Hero;
