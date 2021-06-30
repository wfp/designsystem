import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Tag, { types as typesList } from '../Tag';

import TagSkeleton from '../Tag/Tag.Skeleton';

const types = typesList.reduce(
  (o, type) => ({
    ...o,
    [type]: `${type} (${type})`,
  }),
  {}
);

storiesOf('Components|Tag', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Tag className="some-class" type={select('Tag type (type)', types, 'wfp')}>
      {text('Content (children)', 'This is a tag')}
    </Tag>
  ))
  .add('skeleton', () => <TagSkeleton />);
