import { extractTitle } from './Title';

describe('defaultTitleSlot', () => {
  it('showRoots', () => {
    const parameters = {
      options: { showRoots: true },
    };
    expect(extractTitle({ kind: 'a/b/c', parameters })).toBe('c');
    expect(extractTitle({ kind: 'a|b', parameters })).toBe('a|b');
    expect(extractTitle({ kind: 'a/b/c.d', parameters })).toBe('c.d');
  });
  it('no showRoots', () => {
    const parameters = {};
    expect(extractTitle({ kind: 'a/b/c', parameters })).toBe('c');
    expect(extractTitle({ kind: 'a|b', parameters })).toBe('b');
    expect(extractTitle({ kind: 'a/b/c.d', parameters })).toBe('d');
  });
  it('empty options', () => {
    const parameters = { options: {} };
    expect(extractTitle({ kind: 'a/b/c', parameters })).toBe('c');
    expect(extractTitle({ kind: 'a|b', parameters })).toBe('b');
    expect(extractTitle({ kind: 'a/b/c.d', parameters })).toBe('d');
  });
});
