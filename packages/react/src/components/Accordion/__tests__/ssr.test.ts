/**
 * @jest-environment node
 */

import { renderToString } from 'react-dom/server';
import { getAccordion } from './utils.tsx.new';

describe('Server rendering', () => {
  test('defalut state', () => {
    const htmlString = renderToString(getAccordion());
    expect(htmlString).toContain('szh-accordion__item--status-exited');
    expect(htmlString).toContain('item 1');
  });

  test('mountOnEnter', () => {
    const htmlString = renderToString(
      getAccordion({ props: { mountOnEnter: true } })
    );
    expect(htmlString).toContain('szh-accordion__item--status-unmounted');
    expect(htmlString).not.toContain('szh-accordion__item--status-exited');
    expect(htmlString).not.toContain('item 1');
  });

  test('initialEntered', () => {
    const htmlString = renderToString(
      getAccordion({ props: { initialEntered: true } })
    );
    expect(htmlString).toContain('szh-accordion__item--status-entered');
    expect(htmlString).not.toContain('szh-accordion__item--status-exited');
    expect(htmlString).toContain('item 1');
  });
});
