import React from 'react';
import Select from './Select';
import SelectItem from '../SelectItem';
import markdown from './README.mdx';

export default {
  title: 'Components/Forms/Dropdown/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const SelectDefault = (args) => {
  return (
    <Select {...args}>
      <SelectItem value="option-1" text="Option 1" />
      <SelectItem value="option-2" text="Option 2" />
    </Select>
  );
};

SelectDefault.args = {
  labelText: 'Label text',
  helperText: 'This is a helper text',
};

const hello = `
Imagine this to be a \`much\` longer block of text that spans
several lines.
`;

const selectsourcecode = `
import { Select, SelectItem  } from "@wfp/react";

<Select>
  <SelectItem value="option-1" text="Option 1" />
  <SelectItem value="option-2" text="Option 2" />
</Select>
`;

SelectDefault.story = {
  parameters: {
    docs: {
      storyDescription: hello,
      source: {
        code: selectsourcecode,
      },
    },
  },
};
