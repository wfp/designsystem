import * as React from 'react';

declare namespace SkeletonText {
  interface SkeletonTextProps extends React.HTMLProps<SkeletonText> {
    paragraph?: boolean;
    lineCount?: number;
    width?: string;
    heading?: boolean;
  }
}

declare class SkeletonText extends React.Component<SkeletonText.SkeletonTextProps> {}
export = SkeletonText;
