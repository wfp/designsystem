import React from 'react';
import Slider from '../Slider';
import markdown from './README.mdx';

export default {
  title: 'Components/UI Elements/Slider',
  component: Slider,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const RegularSlider = (args) => (
  <div style={{ marginTop: '2rem' }}>
    <Slider id="slider2" {...args} />
  </div>
);

RegularSlider.args = {
  children: 'Slider',
  name: 'Form item name (name)',
  inputType: 'number',
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  labelText: 'Slider Label',
  helperText: 'Additional helper text',
};

export const hideTextInput = (args) => (
  <div style={{ marginTop: '2rem' }}>
    <Slider id="slider2" {...args} />
  </div>
);

hideTextInput.args = {
  children: 'Slider',
  name: 'Form item name (name)',
  inputType: 'number',
  hideTextInput: true,
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  labelText: 'Slider Label',
  helperText: 'Additional helper text',
};

hideTextInput.story = {
  name: 'Hide TextInput',
  parameters: {
    docs: {
      storyDescription: `Hide the number input box by setting \`hideTextInput\` property to **true**`,
    },
  },
};

export const Disabled = (args) => (
  <div style={{ marginTop: '2rem' }}>
    <Slider id="slider2" {...args} />
  </div>
);

Disabled.args = {
  children: 'Slider',
  name: 'Form item name (name)',
  inputType: 'number',
  disabled: true,
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  labelText: 'Slider Label',
  helperText: 'Additional helper text',
};

Disabled.story = {
  parameters: {
    docs: {
      storyDescription: `Specify whether a slider should be interactive or non-interactive by setting the \`disabled\` property to **true** or **false**`,
    },
  },
};

export const Fullwidth = (args) => (
  <div style={{ marginTop: '2rem' }}>
    <Slider id="slider2" {...args} />
  </div>
);

Fullwidth.args = {
  children: 'Slider',
  name: 'Form item name (name)',
  inputType: 'number',
  fullWidth: true,
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  labelText: 'Slider Label',
  helperText: 'Additional helper text',
};

Fullwidth.story = {
  parameters: {
    docs: {
      storyDescription: `Specify \`fullWidth\` property to be full to use the width of parent element`,
    },
  },
};
