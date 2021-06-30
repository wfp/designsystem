export const CURRENT_SELECTION = '.';
export const PRIMARY_STORY = '^';

export type Component = any;

export interface StoryData {
  id?: string;
  kind?: string;
  name?: string;
  parameters?: any;
}

export type DocsStoryProps = StoryData & {
  expanded?: boolean;
  withToolbar?: boolean;
};
