import React from 'react';
import ReactDOM from 'react-dom';
import simulant from 'simulant';

import isVisible from './is-visible';
import useClickedOutside from './use-click-outside';
import { act, renderHook } from '../../../test-utils/test-hook';

jest.mock('./is-visible');

const clickedOusideFunc = jest.fn();

let ref;
beforeAll(() => {
  const outerNode = document.createElement('div');
  document.body.appendChild(outerNode);
  ReactDOM.render(
    <div>
      <div id="div1">
        <div id="child" />
      </div>
      <div id="div2" />
    </div>,
    outerNode,
  );
  ref = {
    current: document.body.querySelector('#div1'),
  };
});

describe('Use click oustide hook', () => {
  describe('element must be visible for a click outside to occur', () => {
    let renderHookForTest;

    beforeAll(() => {
      renderHookForTest = () => {
        let clear;
        renderHook(() => {
          clear = useClickedOutside(ref, clickedOusideFunc);
        });
        return clear;
      };
    });

    describe('element is not visible', () => {
      beforeAll(() => {
        isVisible.mockReturnValue(false);
      });

      it('should return false when a click occurs inside target div', () => {
        const clear = renderHookForTest();
        clickedOusideFunc.mockClear();
        act(() => {
          simulant.fire(document.body.querySelector('#child'), 'click');
        });
        expect(clickedOusideFunc).not.toHaveBeenCalled();
        clear();
      });

      it('should return false when a click occurs outside target div', () => {
        const clear = renderHookForTest();
        clickedOusideFunc.mockClear();
        act(() => {
          simulant.fire(document.body.querySelector('#div2'), 'click');
        });
        expect(clickedOusideFunc).not.toHaveBeenCalled();
        clear();
      });

      it('should return false when pressing the escape key', () => {
        const clear = renderHookForTest();
        clickedOusideFunc.mockClear();
        act(() => {
          simulant.fire(document.body, 'keydown', { key: 'Escape' });
        });
        expect(clickedOusideFunc).not.toHaveBeenCalled();
        clear();
      });
    });

    describe('element is visible', () => {
      beforeAll(() => {
        isVisible.mockReturnValue(true);
      });

      it('should return false when a click occurs inside target div', () => {
        const clear = renderHookForTest();
        clickedOusideFunc.mockClear();
        act(() => {
          simulant.fire(document.body.querySelector('#child'), 'click');
        });
        expect(clickedOusideFunc).not.toHaveBeenCalled();
        clear();
      });

      it('should return false when a click occurs on target div', () => {
        const clear = renderHookForTest();
        clickedOusideFunc.mockClear();
        act(() => {
          simulant.fire(document.body.querySelector('#div1'), 'click');
        });
        expect(clickedOusideFunc).not.toHaveBeenCalled();
        clear();
      });

      it('should return true when a click occurs outside target div', () => {
        const clear = renderHookForTest();
        clickedOusideFunc.mockClear();
        act(() => {
          simulant.fire(document.body.querySelector('#div2'), 'click');
        });
        expect(clickedOusideFunc).toHaveBeenCalled();
        clear();
      });

      it('should return true when pressing the escape key', () => {
        const clear = renderHookForTest();
        clickedOusideFunc.mockClear();
        act(() => {
          simulant.fire(document.body, 'keydown', { key: 'Escape' });
        });
        expect(clickedOusideFunc).toHaveBeenCalled();
        clear();
      });
    });
  });

  describe('escape key should not be considered an outside click', () => {
    let renderHookForTest;

    beforeAll(() => {
      renderHookForTest = () => {
        let clear;
        renderHook(() => {
          clear = useClickedOutside(ref, clickedOusideFunc, false);
        });
        return clear;
      };
    });


    beforeAll(() => {
      isVisible.mockReturnValue(true);
    });

    it('should return false when pressing the escape key', () => {
      const clear = renderHookForTest();
      clickedOusideFunc.mockClear();
      act(() => {
        simulant.fire(document.body, 'keydown', { key: 'Escape' });
      });
      expect(clickedOusideFunc).not.toHaveBeenCalled();
      clear();
    });
  });

  describe('ignore element visibility', () => {
    let renderHookForTest;

    beforeAll(() => {
      renderHookForTest = () => {
        let clear;
        renderHook(() => {
          clear = useClickedOutside(ref, clickedOusideFunc, true, true);
        });
        return clear;
      };
    });

    it('should return false when a click occurs inside target div', () => {
      const clear = renderHookForTest();
      clickedOusideFunc.mockClear();
      act(() => {
        simulant.fire(document.body.querySelector('#child'), 'click');
      });
      expect(clickedOusideFunc).not.toHaveBeenCalled();
      clear();
    });

    it('should return false when a click occurs on target div', () => {
      const clear = renderHookForTest();
      clickedOusideFunc.mockClear();
      act(() => {
        simulant.fire(document.body.querySelector('#div1'), 'click');
      });
      expect(clickedOusideFunc).not.toHaveBeenCalled();
      clear();
    });

    it('should return true when a click occurs outside target div', () => {
      const clear = renderHookForTest();
      clickedOusideFunc.mockClear();
      act(() => {
        simulant.fire(document.body.querySelector('#div2'), 'click');
      });
      expect(clickedOusideFunc).toHaveBeenCalled();
      clear();
    });
  });
});
