const getMenuState = (currentState, ref) => {
  if (!currentState || currentState.isOpen) {
    return {
      isOpen: false,
      transform: 'translateX(0)',
    };
  }
  const { width } = ref.current.getBoundingClientRect();
  return {
    isOpen: true,
    transform: `translateX(-${width}px)`,
  };
};

export default getMenuState;
