import { StoryContext } from '@storybook/addons';
import { enhanceSource } from './enhanceSource';

const emptyContext: StoryContext = {
  id: 'foo--bar',
  kind: 'foo',
  name: 'bar',
  args: {},
  globals: {},
  parameters: {},
};

const transformSource = (src?: string) => (src ? `formatted: ${src}` : 'no src');

describe('addon-docs enhanceSource', () => {
  describe('no source loaded', () => {
    const baseContext = emptyContext;
    it('no transformSource', () => {
      expect(enhanceSource(baseContext)).toBeNull();
    });
    it('transformSource', () => {
      const parameters = { ...baseContext.parameters, docs: { transformSource } };
      expect(enhanceSource({ ...baseContext, parameters })).toBeNull();
    });
  });
  describe('custom/mdx source loaded', () => {
    const baseContext = {
      ...emptyContext,
      parameters: { storySource: { source: 'storySource.source' } },
    };
    it('no transformSource', () => {
      expect(enhanceSource(baseContext)).toEqual({
        docs: { source: { code: 'storySource.source' } },
      });
    });
    it('transformSource', () => {
      const parameters = { ...baseContext.parameters, docs: { transformSource } };
      expect(enhanceSource({ ...baseContext, parameters }).docs.source).toEqual({
        code: 'formatted: storySource.source',
      });
    });
  });
  describe('storysource source loaded w/ locationsMap', () => {
    const baseContext = {
      ...emptyContext,
      parameters: {
        storySource: {
          source: 'storySource.source',
          locationsMap: {
            bar: { startBody: { line: 1, col: 5 }, endBody: { line: 1, col: 11 } },
          },
        },
      },
    };
    it('no transformSource', () => {
      expect(enhanceSource(baseContext)).toEqual({ docs: { source: { code: 'Source' } } });
    });
    it('transformSource', () => {
      const parameters = { ...baseContext.parameters, docs: { transformSource } };
      expect(enhanceSource({ ...baseContext, parameters }).docs.source).toEqual({
        code: 'formatted: Source',
      });
    });
  });
  describe('custom docs.source provided', () => {
    const baseContext = {
      ...emptyContext,
      parameters: {
        storySource: { source: 'storySource.source' },
        docs: { source: { code: 'docs.source.code' } },
      },
    };
    it('no transformSource', () => {
      expect(enhanceSource(baseContext)).toBeNull();
    });
    it('transformSource', () => {
      const { source } = baseContext.parameters.docs;
      const parameters = { ...baseContext.parameters, docs: { source, transformSource } };
      expect(enhanceSource({ ...baseContext, parameters })).toBeNull();
    });
  });
});
