import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import Slider from '../Slider';
import SliderSkeleton from '../Slider/Slider.Skeleton';
import { sliderValuePropSync } from '../../internal/FeatureFlags';

const props = () => ({
  name: text('Form item name (name)', ''),
  inputType: text('The form element type (inputType)', ''),
  ariaLabelInput: text('The ARIA label for the <input> (ariaLabelInput)', ''),
  disabled: boolean('Disabled (disabled)', false),
  light: boolean('Light variant (experimental) (light)', false),
  fullWidth: boolean('Use with of parent container (fullWidth)', false),
  hideTextInput: boolean('Without text input (hideTextInput)', false),
  value: !sliderValuePropSync ? 50 : number('The value (value)', 50),
  min: number('The minimum value (min)', 0),
  max: number('The maximum value (max)', 100),
  step: number('The step (step)', 1),
  stepMuliplier: number(
    'The step factor for Shift+arrow keys (stepMuliplier)',
    4
  ),
  labelText: text('Label text (labelText)', 'Slider Label'),
  minLabel: text('Label for minimum value (minLabel)', ''),
  maxLabel: text('Label for maximum value (maxLabel)', ''),
  onChange: action('onChange'),
});

storiesOf('Components|Slider', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ marginTop: '2rem' }}>
      <Slider id="slider" {...props()} />
    </div>
  ))
  .add('skeleton', () => (
    <div style={{ marginTop: '2rem' }}>
      <SliderSkeleton />
    </div>
  ));
