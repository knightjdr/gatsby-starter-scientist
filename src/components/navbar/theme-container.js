import React from 'react';

import Theme from './theme';

import useTheme from './use-theme';

const ThemeContainer = () => {
  const theme = useTheme();

  return (
    <Theme
      darkMode={theme.darkMode}
      toggle={theme.toggle}
    />
  );
};

export default ThemeContainer;
