import React, { useState } from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Checkbox from '.';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Checkbox {...args} />;

Regular.args = {
  labelText: 'Label text',
  id: 'check-1',
};

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const CheckedInput = (args) => {
  const [isChecked, setChecked] = useState(true);

  return (
    <Checkbox
      {...args}
      onChange={() => setChecked(!isChecked)}
      checked={isChecked}
    />
  );
};

CheckedInput.args = {
  labelText: 'Checked Input',
  id: 'check-2',
};

const check = `Specify whether the underlying input should be checked.`;

CheckedInput.story = {
  parameters: {
    docs: {
      storyDescription: check,
    },
  },
};

export const Indeterminate = (args) => <Checkbox {...args} />;

Indeterminate.args = {
  labelText: 'Indeterminate Input',
  indeterminate: true,
};

const indeterminate = `Is a state that is neither checked nor unchecked. It’s that in-between state that we might consider the “Maybe” between “Yes” and “No” options`;

Indeterminate.story = {
  parameters: {
    docs: {
      storyDescription: indeterminate,
    },
  },
};

export const DisabledInput = (args) => <Checkbox {...args} />;

DisabledInput.args = {
  labelText: 'Disabled Input',
  disabled: true,
};

const disabled = `Specify whether the Checkbox should be interactive or not`;

DisabledInput.story = {
  parameters: {
    docs: {
      storyDescription: disabled,
    },
  },
};

export const HideLabel = (args) => <Checkbox {...args} />;

HideLabel.args = {
  labelText: 'Hidden Label',
  hideLabel: true,
};

const nolabel = `Specify whether the label should be hidden or not`;

HideLabel.story = {
  parameters: {
    docs: {
      storyDescription: nolabel,
    },
  },
};
