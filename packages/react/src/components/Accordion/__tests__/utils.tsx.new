import { Ref, ReactElement, StrictMode } from 'react';
import {
  render as nonStrictRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import {
  Accordion,
  AccordionProps,
  AccordionItem,
  AccordionItemProps,
} from '..';

export { nonStrictRender };

export const render: (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => RenderResult = (ui, options) =>
  nonStrictRender(ui, { wrapper: StrictMode, ...options });

export const getAccordion = ({
  ref,
  item1Ref,
  props,
  item1Props,
  item2Props,
}: {
  ref?: Ref<HTMLDivElement>;
  item1Ref?: Ref<HTMLDivElement>;
  props?: AccordionProps;
  item1Props?: AccordionItemProps;
  item2Props?: AccordionItemProps;
} = {}) => (
  <Accordion {...props} ref={ref}>
    <AccordionItem
      {...item1Props}
      header={item1Props?.header || 'header 1'}
      ref={item1Ref}>
      {item1Props?.children || 'item 1'}
    </AccordionItem>
    <AccordionItem {...item2Props} header={item2Props?.header || 'header 2'}>
      {item2Props?.children || 'item 2'}
    </AccordionItem>
    <AccordionItem header="header 3">item 3</AccordionItem>
  </Accordion>
);
