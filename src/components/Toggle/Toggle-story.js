import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Toggle from '../Toggle';
import ToggleSkeleton from '../Toggle/Toggle.Skeleton';

const toggleProps = () => ({
  className: 'some-class',
  toggled: boolean('Toggled (toggled)', false),
  labelA: text('Label for untoggled state (labelA)', 'Off'),
  labelB: text('Label for toggled state (labelB)', 'On'),
  onChange: action('onChange'),
  onToggle: action('onToggle'),
});

storiesOf('Components|Toggle', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Toggle {...toggleProps()} className="some-class" id="toggle-1" />
  ))
  .add('skeleton', () => <ToggleSkeleton />);
