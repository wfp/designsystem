import React from 'react';
import TextInput from '.';
import reactHookFormDecorator from '../../../.storybook/reactHookFormDecorator';

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
  },
};

export const Regular = (args) => <TextInput {...args} />;

Regular.args = {
  type: 'text',
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'The labelText',
  placeholder: 'placeholder',
};

export const PasswordInput = (args) => <TextInput {...args} />;

PasswordInput.args = {
  type: 'password',
  name: 'password',
  labelText: 'The labelText',
};

export const withError = (args) => <TextInput {...args} />;

withError.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'Enter password',
  invalid: { message: 'Please enter your first name' },
};

export const withDisabled = (args) => <TextInput {...args} />;

withDisabled.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'Disabled labelText',
  disabled: true,
};

export const withReactHookForm = (args) => <TextInput {...args} />;

withReactHookForm.args = {
  name: 'inputname',
  helperText: 'Optional helperText',
  labelText: 'Disabled labelText',
  disabled: true,
};

withReactHookForm.decorators = [reactHookFormDecorator];
