import React, { forwardRef } from 'react';
import { AccordionProviderOptions } from '../utils/constants';
import { useAccordionProvider } from '../hooks/useAccordionProvider';
import {
  ControlledAccordion,
  ControlledAccordionProps,
} from './ControlledAccordion';

interface AccordionProps
  extends AccordionProviderOptions,
    Omit<ControlledAccordionProps, 'providerValue'> {}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      allowMultiple,
      initialEntered,
      mountOnEnter,
      unmountOnExit,
      transition,
      transitionTimeout,
      onStateChange,
      ...rest
    },
    ref
  ) => {
    const providerValue = useAccordionProvider({
      allowMultiple,
      initialEntered,
      mountOnEnter,
      unmountOnExit,
      transition,
      transitionTimeout,
      onStateChange,
    });
    return (
      <ControlledAccordion {...rest} ref={ref} providerValue={providerValue} />
    );
  }
);

Accordion.displayName = 'Accordion';

export { Accordion, AccordionProps };
