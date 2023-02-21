import { ItemKey } from '../utils/constants';
import { useAccordionContext, getItemState } from './useAccordionContext';

const useAccordionState = () => {
  const context = useAccordionContext();
  return {
    getItemState: (key: ItemKey, { initialEntered }: { initialEntered?: boolean } = {}) =>
      getItemState(context, key, initialEntered),
    toggle: context.toggle,
    toggleAll: context.toggleAll
  };
};

export { useAccordionState };
