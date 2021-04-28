import React from 'react';
import Select from './Select';
import SelectItem from '../SelectItem';
import markdown from './README.mdx';
import selectTwig from './Select.twig'

export default {
  title: 'Components/Forms/Dropdown/select',
  component: Select,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: selectTwig
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

SelectDefault.story = {
  parameters: {
    docs: {
      storyDescription: hello,
    },
  },
};
