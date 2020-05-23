import PropTypes from 'prop-types';
import styled from 'styled-components';

import DefaultButton from '../button-defaults';

const Button = styled(DefaultButton)`
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  font-size: inherit;
  padding: 0.2em 0.5em;

  &:focus:not([disabled]),
  &:hover:not([disabled]) {
    color: var(--color-font-dark);
  }
`;

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  kind: PropTypes.string,
};

export default Button;
