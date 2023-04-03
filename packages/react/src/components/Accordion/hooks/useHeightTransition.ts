/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { CSSProperties, useState, useRef } from 'react';
import { TransitionState } from 'react-transition-state';
import { useLayoutEffect } from '../utils/useIsomorphicLayoutEffect';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useHeightTransition = <E extends Element>({
  status,
  isResolved,
}: TransitionState) => {
  const [height, setHeight] = useState<number>();
  const elementRef = useRef<HTMLInputElement>(null);

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
    overflow: isResolved ? undefined : 'hidden',
  };

  return [style, elementRef] as const;
};

export { useHeightTransition };
