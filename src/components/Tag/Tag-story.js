import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Tag, { types as typesList } from '../Tag';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

import TagSkeleton from '../Tag/Tag.Skeleton';

const types = typesList.reduce(
  (o, type) => ({
    ...o,
    [type]: `${type} (${type})`,
  }),
  {}
);

storiesOf('Tag', module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
        <Tag
          className="some-class"
          type={select('Tag type (type)', types, 'wfp')}>
          {text('Content (children)', '')}
        </Tag>
    ),
    {
      info: {
        text: readme
      }
    }
  )
  .add(
    'skeleton',
    withInfo({
      text: `
      Placeholder skeleton state to use when content is loading.
      `,
    })(() => (
        <TagSkeleton />
    ))
  );
