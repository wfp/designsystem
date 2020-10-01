import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import NumberInput from '.';

export default {
  title: 'Components/Forms/NumberInput',
  component: NumberInput,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <NumberInput {...args} />;

Regular.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
};

export const disabled = (args) => <NumberInput {...args} />;

disabled.story = {
  parameters: {
    docs: {
      storyDescription: `\`disabled\` property specify the input to be disabled or not. Set \`disabled\` to true to make input non-interative `,
    },
  },
};

disabled.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  disabled: true,
};

export const hideLabel = (args) => <NumberInput {...args} />;

hideLabel.story = {
  parameters: {
    docs: {
      storyDescription: `\`hideLabel\` property specify hides the label text specified to describe the input`,
    },
  },
};

hideLabel.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  hideLabel: true,
};

export const invalid = (args) => <NumberInput {...args} />;

const description = `
\`invalid\` property is applied to the \`NumberInput\` when the value expected is invalid.
`;

invalid.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

invalid.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  invalid: { message: 'Please enter your number' },
};
