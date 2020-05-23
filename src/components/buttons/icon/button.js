import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledButton from './button-style';

const IconButton = ({
  ariaLabel,
  icon,
  pulse,
  rotation,
  size,
  spin,
  ...props
}) => (
  <StyledButton
    aria-hidden={false}
    aria-label={ariaLabel}
    {...props}
  >
    <FontAwesomeIcon
      icon={icon}
      pulse={pulse}
      rotation={rotation}
      size={size}
      spin={spin}
    />
  </StyledButton>
);

IconButton.defaultProps = {
  pulse: false,
  rotation: null,
  size: '1x',
  spin: false,
};

IconButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  icon: PropTypes.shape({}).isRequired,
  pulse: PropTypes.bool,
  rotation: PropTypes.number,
  size: PropTypes.string,
  spin: PropTypes.bool,
};

export default IconButton;
