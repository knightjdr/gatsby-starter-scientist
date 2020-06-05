import getMenuState from './get-menu-state';

describe('Get menu state', () => {
  it('should return closed state when there is no current state', () => {
    const expected = {
      isOpen: false,
      transform: 'translateX(0)',
    };
    expect(getMenuState()).toEqual(expected);
  });

  it('should return closed state when current state is open', () => {
    const currentState = {
      isOpen: true,
    };

    const expected = {
      isOpen: false,
      transform: 'translateX(0)',
    };
    expect(getMenuState(currentState)).toEqual(expected);
  });

  it('should return open state when current state is closed', () => {
    const currentState = {
      isOpen: false,
    };
    const ref = {
      current: {
        getBoundingClientRect: () => ({ width: 100 }),
      },
    };

    const expected = {
      isOpen: true,
      transform: 'translateX(-100px)',
    };
    expect(getMenuState(currentState, ref)).toEqual(expected);
  });
});
