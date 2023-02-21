import { useMemo, RefCallback, MutableRefObject } from 'react';

// Adapted from material-ui
// https://github.com/mui-org/material-ui/blob/f996027d00e7e4bff3fc040786c1706f9c6c3f82/packages/material-ui-utils/src/useForkRef.ts

type Ref<T> = RefCallback<T> | MutableRefObject<T | null>;

function setRef<T>(ref: Ref<T>, instance: T) {
  typeof ref === 'function' ? ref(instance) : (ref.current = instance);
}

function useMergeRef<T>(refA?: Ref<T> | null, refB?: Ref<T> | null) {
  return useMemo(() => {
    if (!refA) return refB;
    if (!refB) return refA;

    return (instance: T | null) => {
      setRef(refA, instance);
      setRef(refB, instance);
    };
  }, [refA, refB]);
}

export { useMergeRef };
