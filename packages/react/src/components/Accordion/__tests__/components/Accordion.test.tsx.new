import { screen, fireEvent } from '@testing-library/react';
import { render, getAccordion } from '../utils';
import { Accordion, AccordionItem } from '../../';

test('Accordion should forward props and ref', () => {
  const ref = jest.fn();
  const onKeyDown = jest.fn();
  render(
    getAccordion({
      props: { 'data-testid': 'accordion', className: 'my-accordion', onKeyDown },
      ref
    })
  );
  expect(screen.getByTestId('accordion')).toHaveClass('szh-accordion my-accordion');
  expect(ref).toHaveBeenCalled();
  const button = screen.getByRole('button', { name: 'header 1' });
  button.focus();
  fireEvent.keyDown(button, { key: 'ArrowDown' });
  expect(onKeyDown).toHaveBeenCalled();
});

test('Accordion should expand and collapse items', () => {
  render(getAccordion());
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 3' })).toBeNull();

  fireEvent.click(screen.getByRole('button', { name: 'header 1' }));
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeVisible();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 3' })).toBeNull();

  fireEvent.click(screen.getByRole('button', { name: 'header 2' }));
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeVisible();
  expect(screen.queryByRole('region', { name: 'header 3' })).toBeNull();
});

test('Accordion should allow multiple items to expand', () => {
  render(getAccordion({ props: { allowMultiple: true }, item1Props: { initialEntered: true } }));
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeVisible();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 3' })).toBeNull();

  fireEvent.click(screen.getByRole('button', { name: 'header 2' }));
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeVisible();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeVisible();
  expect(screen.queryByRole('region', { name: 'header 3' })).toBeNull();
});

test('Accordion should support keyboard interaction', () => {
  const onKeyDown = jest.fn();
  render(
    <Accordion onKeyDown={onKeyDown}>
      <AccordionItem header="header 1">item 1</AccordionItem>
      <AccordionItem header="header 2" initialEntered>
        <Accordion>
          <AccordionItem header="header 2.1">item 2.1</AccordionItem>
          <AccordionItem header="header 2.2">item 2.2</AccordionItem>
        </Accordion>
      </AccordionItem>
      <AccordionItem header="disabled" disabled>
        disabled item is excluded from keyboard navigation
      </AccordionItem>
      <AccordionItem header="header 3" initialEntered>
        <Accordion>
          <AccordionItem header="header 3.1">item 3.1</AccordionItem>
        </Accordion>
      </AccordionItem>
    </Accordion>
  );

  // Top level navigation
  let currentFocus = screen.getByRole('button', { name: 'header 1' });
  currentFocus.focus();
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowDown' });
  currentFocus = screen.getByRole('button', { name: 'header 2' });
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowDown' });
  currentFocus = screen.getByRole('button', { name: 'header 3' });
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowDown' });
  currentFocus = screen.getByRole('button', { name: 'header 1' });
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowUp' });
  currentFocus = screen.getByRole('button', { name: 'header 3' });
  expect(currentFocus).toHaveFocus();

  // Nested level navigation
  currentFocus = screen.getByRole('button', { name: 'header 2.1' });
  currentFocus.focus();
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowDown' });
  currentFocus = screen.getByRole('button', { name: 'header 2.2' });
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowDown' });
  currentFocus = screen.getByRole('button', { name: 'header 2.1' });
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowUp' });
  currentFocus = screen.getByRole('button', { name: 'header 2.2' });
  expect(currentFocus).toHaveFocus();
  // eslint-disable-next-line
  expect(onKeyDown.mock.lastCall[0].isDefaultPrevented()).toBe(true);

  // Nested level navigation through a single item
  currentFocus = screen.getByRole('button', { name: 'header 3.1' });
  currentFocus.focus();
  expect(currentFocus).toHaveFocus();

  fireEvent.keyDown(currentFocus, { key: 'ArrowDown' });
  expect(currentFocus).toHaveFocus();
  // eslint-disable-next-line
  expect(onKeyDown.mock.lastCall[0].isDefaultPrevented()).toBe(false);
});
