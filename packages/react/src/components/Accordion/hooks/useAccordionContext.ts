import { useContext } from 'react';
import { TransitionState } from 'react-transition-state';
import { AccordionContext, AccordionProviderValue, ItemKey } from '../utils/constants';

const getItemState = (
  providerValue: AccordionProviderValue,
  key: ItemKey,
  itemInitialEntered?: boolean
): TransitionState => {
  const { stateMap, mountOnEnter, initialEntered } = providerValue;
  const _initialEntered = itemInitialEntered ?? initialEntered;
  return (
    stateMap.get(key) || {
      status: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
      isMounted: !mountOnEnter,
      isEnter: _initialEntered,
      isResolved: true
    }
  );
};

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !context.stateMap) {
    throw new Error(
      '[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.'
    );
  }
  return context as AccordionProviderValue;
};

export { useAccordionContext, getItemState };
