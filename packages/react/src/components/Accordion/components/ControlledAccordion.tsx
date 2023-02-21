import { ReactNode, forwardRef } from 'react';
import { ACCORDION_BLOCK, AccordionProviderValue, ElementProps } from '../utils/constants';
import { bem } from '../utils/bem';
import { mergeProps } from '../utils/mergeProps';
import { AccordionProvider } from './AccordionProvider';
import { useAccordion } from '../hooks/useAccordion';

interface ControlledAccordionProps extends ElementProps<HTMLDivElement> {
  providerValue: AccordionProviderValue;
  children?: ReactNode;
}

const ControlledAccordion = forwardRef<HTMLDivElement, ControlledAccordionProps>(
  ({ providerValue, className, ...rest }, ref) => {
    const { accordionProps } = useAccordion();
    return (
      <AccordionProvider value={providerValue}>
        <div
          {...mergeProps(accordionProps, rest)}
          ref={ref}
          className={bem(ACCORDION_BLOCK)(className)}
        />
      </AccordionProvider>
    );
  }
);

ControlledAccordion.displayName = 'ControlledAccordion';

export { ControlledAccordion, ControlledAccordionProps };
