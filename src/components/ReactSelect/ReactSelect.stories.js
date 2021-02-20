import React from 'react';
import ReactSelect from 'react-select';

import markdown from './README.mdx';

export default {
  title: 'Components/Forms/Dropdown/react-select',
  component: ReactSelect,
  markdown: 'hello',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    introText: `[React Select](https://react-select.com) is recommended for multiselect, autocomplete or dynamic inputs.`,
    mdx: markdown,
    code: false,
    html: false,
  },
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Default = (args) => (
  <div className="wfp--form-item" style={{ minWidth: '400px' }}>
    <label htmlFor="abc" className="wfp--label">
      The Label
    </label>
    <ReactSelect
      className="wfp--react-select-container"
      classNamePrefix="wfp--react-select"
      isMulti
      id="abc"
      options={options}
      {...args}
    />
  </div>
);
Default.args = {
  placeholder: 'Placeholder',
  isSearchable: false,
  isMulti: true,
  isDisabled: false,
};

Default.story = {
  name: 'Default',
  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};
