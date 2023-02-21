import React from 'react';
import markdown from './README.mdx';
import SkeletonText from './SkeletonText';

export default {
  title: 'Components/UI Elements/SkeletonText',
  component: SkeletonText,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Basic = () => <SkeletonText width="100%" />;

export const MultipleLine = () => (
  <SkeletonText paragraph={true} width="50%" heading={false} lineCount={3} />
);
