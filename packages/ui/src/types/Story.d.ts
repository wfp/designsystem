import * as React from 'react';

declare namespace Story  {
  interface StoryProps extends React.HTMLProps<Story> {
    children?: React.ReactNode
  }
}

declare class Story extends React.Component<Story.StoryProps>{ }
export = Story