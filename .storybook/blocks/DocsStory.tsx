import React, { FunctionComponent } from 'react';
import { Subheading } from './Subheading';
import { DocsStoryProps } from './types';
import { Anchor } from './Anchor';
//import { Description } from './Description';

import {
  Description,
  DescriptionProps as PureDescriptionProps,
} from '@storybook/components';

import { Story } from './Story';
import { Preview } from './Preview';

export const DocsStory: FunctionComponent<DocsStoryProps> = ({
  id,
  name,
  expanded = true,
  withToolbar = false,
  parameters,
  storyFn,
}) => (
  <Anchor storyId={id}>
    {expanded && <Subheading>{name}</Subheading>}
    {expanded &&
      parameters &&
      parameters.docs &&
      parameters.docs.storyDescription && (
        <Description markdown={parameters.docs.storyDescription} />
      )}
    <Preview withToolbar={withToolbar} storyComponent={storyFn}>
      <Story id={id} />
    </Preview>
  </Anchor>
);
