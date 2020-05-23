import isVisible from './is-visible';

global.getComputedStyle = jest.fn();

describe('Is element visible', () => {
  it('should return false when element is not defined', () => {
    expect(isVisible()).toBeFalsy();
  });

  describe('element is defined', () => {
    it('should return false when element is not opaque', () => {
      global.getComputedStyle.mockReturnValue({ getPropertyValue: () => 0 });
      const elem = {
        getBoundingClientRect: () => ({
          height: 1,
        }),
      };
      expect(isVisible(elem)).toBeFalsy();
    });

    it('should return false when element has dimensions of zero', () => {
      global.getComputedStyle.mockReturnValue({ getPropertyValue: () => 1 });
      const elem = {
        getBoundingClientRect: () => ({}),
      };
      expect(isVisible(elem)).toBeFalsy();
    });

    it('should return true when element has height', () => {
      global.getComputedStyle.mockReturnValue({ getPropertyValue: () => 1 });
      const elem = {
        getBoundingClientRect: () => ({
          height: 1,
        }),
      };
      expect(isVisible(elem)).toBeTruthy();
    });

    it('should return true when element has width', () => {
      global.getComputedStyle.mockReturnValue({ getPropertyValue: () => 1 });
      const elem = {
        getBoundingClientRect: () => ({
          width: 1,
        }),
      };
      expect(isVisible(elem)).toBeTruthy();
    });
  });
});
