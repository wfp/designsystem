import { useRef } from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../utils';
import { ControlledAccordion, AccordionItem, useAccordionProvider } from '../../';

const Accordion = () => {
  const value = useAccordionProvider();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div>
      <button onClick={() => value.toggle(ref.current!)}>Toggle</button>

      <ControlledAccordion providerValue={value}>
        <AccordionItem header="header 1" ref={ref}>
          item 1
        </AccordionItem>
        <AccordionItem header="header 2" initialEntered>
          item 2
        </AccordionItem>
        <AccordionItem header="header 3">item 3</AccordionItem>
      </ControlledAccordion>
    </div>
  );
};

test('ControlledAccordion', () => {
  render(<Accordion />);
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeVisible();

  fireEvent.click(screen.getByRole('button', { name: 'Toggle' }));
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeVisible();
});
