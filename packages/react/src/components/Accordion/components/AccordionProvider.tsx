import { ReactNode } from 'react';
import { AccordionContext, AccordionProviderValue } from '../utils/constants';

const AccordionProvider = (props: { value: AccordionProviderValue; children?: ReactNode }) => (
  <AccordionContext.Provider {...props} />
);

export { AccordionProvider };
