import { renderHook } from '@testing-library/react';
import { useId } from '../../hooks/useId';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useId: undefined
}));

test('useId', () => {
  const id1 = renderHook(() => useId());
  const id2 = renderHook(() => useId());
  expect(id1.result.current).toBe('szh-adn-1');
  expect(id2.result.current).toBe('szh-adn-2');
  id1.rerender();
  id2.rerender();
  expect(id1.result.current).toBe('szh-adn-1');
  expect(id2.result.current).toBe('szh-adn-2');
});
