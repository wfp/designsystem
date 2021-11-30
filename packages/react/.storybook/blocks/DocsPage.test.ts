import { extractTitle } from './Title';

describe('defaultTitleSlot', () => {
  it('splits on last /', () => {
    const parameters = {};
    expect(extractTitle({ kind: 'a/b/c', parameters })).toBe('c');
    expect(extractTitle({ kind: 'a|b', parameters })).toBe('a|b');
    expect(extractTitle({ kind: 'a/b/c.d', parameters })).toBe('c.d');
  });
});
