/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, select, text } from '@storybook/addon-knobs';
import Search from '../Search';
import SearchSkeleton from '../Search/Search.Skeleton';

const options = {
  large: 'large',
  small: 'small',
  banner: 'banner',
  main: 'main',
  light: 'light',
  None: undefined,
};

const props = () => ({
  className: 'some-class',
  //light: boolean('Light variant (light)', false),
  kind: select('Kind (kind)', options, undefined),
  name: text('Form item name (name)', ''),
  value: text('Value (value)', ''),
  labelText: text('Label text (labelText)', 'Search'),
  closeButtonLabelText: text(
    'The label text for the close button (closeButtonLabelText)',
    ''
  ),
  placeHolderText: text('Placeholder text (placeHolderText)', 'Search'),
  onChange: action('onChange'),
});

storiesOf('Components|Search', module)
  .addDecorator(withKnobs)

  .add('Default', () => <Search {...props()} id="search-1" />)
  .add('skeleton', () => (
    <div style={{ width: '200px' }}>
      <SearchSkeleton />
      &nbsp;
      <SearchSkeleton small />
    </div>
  ));
