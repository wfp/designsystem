import { MouseEventHandler, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ACCORDION_BTN_ATTR, ItemState } from '../utils/constants';
import { useId } from './useId';

const useAccordionItem = ({ state, toggle, disabled }: ItemState) => {
  const buttonId = useId();
  const panelId = buttonId && buttonId + '-';

  const buttonProps: ButtonHTMLAttributes<Element> = {
    id: buttonId,
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggle as unknown as MouseEventHandler<Element>
  };
  disabled
    ? (buttonProps.disabled = true)
    : ((buttonProps as { [x: string]: string })[ACCORDION_BTN_ATTR] = '');

  const panelProps: HTMLAttributes<Element> = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };

  return {
    buttonProps,
    panelProps
  };
};

export { useAccordionItem };
