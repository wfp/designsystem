import { screen, fireEvent } from '@testing-library/react';
import { render, getAccordion } from '../utils';
import { useAccordionState } from '../../';

const MyComponent = ({ itemKey }: { itemKey: string }) => {
  const { getItemState, toggle, toggleAll } = useAccordionState();
  return (
    <>
      <div data-testid="item-state">{getItemState(itemKey).status}</div>
      <button data-testid="toggle-item" onClick={() => toggle(itemKey)}>
        Toggle
      </button>
      <button data-testid="toggle-all" onClick={() => toggleAll()}>
        Toggle All
      </button>
    </>
  );
};

test('useAccordionState toggle item', () => {
  render(
    getAccordion({
      item1Props: {
        itemKey: 'item1',
        children: <MyComponent itemKey="item1" />
      }
    })
  );
  expect(screen.getByTestId('item-state')).toHaveTextContent('exited');
  fireEvent.click(screen.getByTestId('toggle-item'));
  expect(screen.getByTestId('item-state')).toHaveTextContent('entered');
});

test('useAccordionState toggle all', () => {
  render(
    getAccordion({
      props: {
        allowMultiple: true
      },
      item2Props: {
        initialEntered: true,
        children: <MyComponent itemKey="item2" />
      }
    })
  );
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeVisible();
  expect(screen.queryByRole('region', { name: 'header 3' })).toBeNull();

  fireEvent.click(screen.getByTestId('toggle-all'));
  expect(screen.queryByRole('region', { name: 'header 1' })).toBeVisible();
  expect(screen.queryByRole('region', { name: 'header 2' })).toBeNull();
  expect(screen.queryByRole('region', { name: 'header 3' })).toBeVisible();
});
