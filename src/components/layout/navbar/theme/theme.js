import PropTypes from 'prop-types';
import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from '../../../buttons/icon/button';

const Theme = ({
  darkMode,
  toggle,
}) => (
  <ButtonIcon
    ariaLabel={`switch to ${darkMode ? 'light' : 'dark'} mode`}
    icon={darkMode ? faMoon : faSun}
    kind="primary"
    onClick={toggle}
    type="button"
  />
);

Theme.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Theme;
