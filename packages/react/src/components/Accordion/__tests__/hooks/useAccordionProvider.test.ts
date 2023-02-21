import { renderHook } from '@testing-library/react';
import { useTransitionMap } from 'react-transition-state';
import { useAccordionProvider } from '../../';

jest.mock('react-transition-state', () => ({
  useTransitionMap: jest.fn().mockReturnValue({ mock: true })
}));

describe('useAccordionProvider', () => {
  test('can be called without params', () => {
    const { result } = renderHook(() => useAccordionProvider());
    expect(result.current).toEqual({ mock: true, mountOnEnter: false, initialEntered: false });
    expect(useTransitionMap).toHaveBeenCalledWith({
      enter: false,
      exit: false,
      preEnter: false,
      preExit: false
    });
  });

  test('should forward options', () => {
    const { result } = renderHook(() =>
      useAccordionProvider({
        mountOnEnter: true,
        initialEntered: true,
        transition: true,
        transitionTimeout: 300
      })
    );
    expect(result.current).toEqual({ mock: true, mountOnEnter: true, initialEntered: true });
    expect(useTransitionMap).toHaveBeenCalledWith({
      mountOnEnter: true,
      initialEntered: true,
      enter: true,
      exit: true,
      preEnter: true,
      preExit: true,
      timeout: 300
    });
  });

  test('should accept individual transition flag', () => {
    const { result } = renderHook(() =>
      useAccordionProvider({
        transition: { enter: true, preExit: true }
      })
    );
    expect(result.current).toEqual({ mock: true, mountOnEnter: false, initialEntered: false });
    expect(useTransitionMap).toHaveBeenCalledWith({
      enter: true,
      exit: false,
      preEnter: false,
      preExit: true
    });
  });
});
