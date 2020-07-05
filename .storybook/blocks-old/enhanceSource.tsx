import { combineParameters } from '@storybook/client-api';
import { StoryContext, Parameters } from '@storybook/addons';

interface Location {
  line: number;
  col: number;
}

interface StorySource {
  source: string;
  locationsMap: { [id: string]: { startBody: Location; endBody: Location } };
}

/**
 * Replaces full story id name like: story-kind--story-name -> story-name
 * @param id
 */
const storyIdToSanitizedStoryName = (id: string) => id.replace(/^.*?--/, '');

const extract = (targetId: string, { source, locationsMap }: StorySource) => {
  if (!locationsMap) {
    return source;
  }

  const sanitizedStoryName = storyIdToSanitizedStoryName(targetId);
  const location = locationsMap[sanitizedStoryName];

  const { startBody: start, endBody: end } = location;
  const lines = source.split('\n');
  if (start.line === end.line && lines[start.line - 1] !== undefined) {
    return lines[start.line - 1].substring(start.col, end.col);
  }
  // NOTE: storysource locations are 1-based not 0-based!
  const startLine = lines[start.line - 1];
  const endLine = lines[end.line - 1];
  if (startLine === undefined || endLine === undefined) {
    return source;
  }
  return [
    startLine.substring(start.col),
    ...lines.slice(start.line, end.line - 1),
    endLine.substring(0, end.col),
  ].join('\n');
};

export const enhanceSource = (context: StoryContext): Parameters => {
  const { id, parameters } = context;
  const { storySource, docs = {} } = parameters;
  const { transformSource } = docs;

  // no input or user has manually overridden the output
  if (!storySource?.source || docs.source?.code) {
    return null;
  }

  const input = extract(id, storySource);
  const code = transformSource ? transformSource(input, id) : input;

  return { docs: combineParameters(docs, { source: { code } }) };
};
