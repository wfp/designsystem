import { useTransitionMap } from 'react-transition-state';
import {
  TransitionProp,
  AccordionProviderOptions,
  AccordionProviderValue,
  ItemKey
} from '../utils/constants';

const getTransition = (
  transition: TransitionProp | undefined,
  name: 'enter' | 'exit' | 'preEnter' | 'preExit'
): boolean => transition === true || !!(transition && transition[name]);

const useAccordionProvider: (options?: AccordionProviderOptions) => AccordionProviderValue = ({
  transition,
  transitionTimeout,
  ...rest
} = {}) => {
  const transitionMap = useTransitionMap<ItemKey>({
    timeout: transitionTimeout,
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit'),
    ...rest
  });

  return {
    mountOnEnter: !!rest.mountOnEnter,
    initialEntered: !!rest.initialEntered,
    ...transitionMap
  };
};

export { useAccordionProvider };
