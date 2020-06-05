import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../../../../utils/local-storage';

const useTheme = () => {
  const [darkMode, toggleState] = useState(false);

  const toggle = () => {
    const newMode = !darkMode;
    const classToAdd = newMode === true ? 'dark-mode' : 'light-mode';
    const classToRemove = newMode === true ? 'light-mode' : 'dark-mode';
    if (document.body.classList.contains(classToRemove)) {
      document.body.classList.replace(classToRemove, classToAdd);
    } else {
      document.body.classList.add(classToAdd);
    }
    toggleState(newMode);
    setLocalStorage('darkMode', newMode);
  };

  useEffect(() => {
    const updateMode = () => {
      const storedMode = getLocalStorage('darkMode');
      if (storedMode !== darkMode) {
        toggleState(storedMode);
      }
    };

    window.addEventListener('storage', updateMode);
    return window.removeEventListener('storage', updateMode);
  });

  useEffect(() => {
    const bodyMode = document.body.className.includes('dark-mode');
    if (bodyMode !== darkMode) {
      toggleState(bodyMode);
    }
  }, []);

  return {
    darkMode,
    toggle,
  };
};

export default useTheme;
