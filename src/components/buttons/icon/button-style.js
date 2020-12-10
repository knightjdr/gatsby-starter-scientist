import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import DefaultButton from '../button-defaults';

const Button = styled(DefaultButton)`
  align-items: center;
  border-color: transparent;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: flex;
  font-size: 1em;
  justify-content: center;
  height: 34px;
  padding: 2px;
  position: relative;
  width: 34px;
  z-index: 1;

  &::before {
    border-radius: 50%;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: inherit;
    transition-property: background-color, border-color, color, opacity, transform;
    transform: scale(0);
    transform-origin: center center;
    width: 100%;
    z-index: -1;
  }
  ${(props) => (props.kind === 'transparent'
    && css`& {
      background-color: transparent;
      border: none;
    }

    &::before {
      background-color: var(--color-primary);
      opacity: 0;
    }

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      box-shadow: none;
      color: var(--color-font-contrast);
    }
    &:focus:not([disabled])::before,
    &:hover:not([disabled])::before {
      opacity: 1;
      transform: scale(1);
    }`
  )}

  ${(props) => (props.square
    && css`& {
      border-radius: 0;
    }

    &::before {
      border-radius: 0;
    }`
  )}
`;

Button.defaultProps = {
  disabled: false,
  kind: 'transparent',
  square: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.string,
  square: PropTypes.bool,
};

export default Button;
