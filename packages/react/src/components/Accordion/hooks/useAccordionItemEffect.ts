import { useEffect, useRef, useCallback } from 'react';
import { ItemStateOptions } from '../utils/constants';
import { useAccordionContext, getItemState } from './useAccordionContext';

const useAccordionItemEffect = <E extends Element>({
  itemKey,
  initialEntered,
  disabled
}: ItemStateOptions = {}) => {
  const itemRef = useRef<E>(null);
  const context = useAccordionContext();
  const key = itemKey ?? itemRef.current!;
  const state = getItemState(context, key, initialEntered);
  const { setItem, deleteItem, toggle } = context;

  useEffect(() => {
    if (disabled) return;
    const key = itemKey ?? itemRef.current!;
    setItem(key, { initialEntered });
    return () => void deleteItem(key);
  }, [setItem, deleteItem, itemKey, initialEntered, disabled]);

  return {
    itemRef,
    state,
    toggle: useCallback((toEnter?: boolean) => toggle(key, toEnter), [toggle, key])
  };
};

export { useAccordionItemEffect };
