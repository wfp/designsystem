import { CSSProperties, useState, useRef } from 'react';
import { TransitionState } from 'react-transition-state';
import { useLayoutEffect } from '../utils/useIsomorphicLayoutEffect';

const useHeightTransition = <E extends Element>({ status, isResolved }: TransitionState) => {
  const [height, setHeight] = useState<number>();
  const elementRef = useRef<E>(null);

  useLayoutEffect(() => {
    (status === 'preEnter' || status === 'preExit') &&
      setHeight(elementRef.current!.getBoundingClientRect().height);
  }, [status]);

  const style: CSSProperties = {
    height:
      status === 'preEnter' || status === 'exiting'
        ? 0
        : status === 'entering' || status === 'preExit'
        ? height
        : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };

  return [style, elementRef] as const;
};

export { useHeightTransition };
