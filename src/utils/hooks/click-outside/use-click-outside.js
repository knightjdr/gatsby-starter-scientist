import { useEffect } from 'react';

import isVisible from './is-visible';

/* Detect click outside element specified by ref.current. If the visibility
** of the element is irrelevant, set ignoreVisibility argument to true. The
** element is considered visible if it has height or width as computed with
** getBoundingClientRect(). If esc argument is true, pressing the escape
** key is the same as clicking outside the element. func is called when
** a click occurs outside the element. */
const useClickOutside = (ref, func, esc = true, ignoreVisibility = false) => {
  const clickedOutside = (isOutside, e) => {
    if (isOutside) {
      func(e);
    }
  };

  const clickListener = (e) => {
    const element = ref.current;
    const outside = !element.contains(e.target) && (ignoreVisibility || isVisible(element));
    clickedOutside(outside, e);
  };

  const escListener = (e) => {
    const element = ref.current;
    if (e.key === 'Escape' && isVisible(element)) {
      clickedOutside(true, e);
    }
  };

  useEffect(() => {
    window.addEventListener('click', clickListener);
    return () => {
      window.removeEventListener('click', clickListener);
    };
  });

  useEffect(() => {
    if (esc) {
      window.addEventListener('keydown', escListener);
    }
    return () => {
      if (esc) {
        window.removeEventListener('keydown', escListener);
      }
    };
  });

  const clear = () => {
    window.removeEventListener('click', clickListener);
    if (esc) {
      window.removeEventListener('keydown', escListener);
    }
  };

  return clear;
};

export default useClickOutside;
