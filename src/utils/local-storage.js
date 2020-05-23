const windowGlobal = typeof window !== 'undefined' && window;
const localAdapter = windowGlobal
  ? windowGlobal.localStorage
  : {
    getItem: () => null,
    removeItem: () => {},
    setItem: () => {},
  };

const storageSupport = () => {
  try {
    const test = 'test-storage';
    localAdapter.setItem(test, test);
    localAdapter.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};

export const getLocalStorage = (key) => {
  if (storageSupport) {
    return JSON.parse(localAdapter.getItem(key));
  }
  return null;
};

export const setLocalStorage = (key, value) => {
  if (storageSupport) {
    return localAdapter.setItem(key, JSON.stringify(value));
  }
  return null;
};
