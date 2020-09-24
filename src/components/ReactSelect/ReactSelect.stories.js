import React from 'react';
import ReactSelect from 'react-select';

import markdown from './README.mdx';

export default {
  title: 'Forms/ReactSelect',
  component: ReactSelect,
  markdown: 'hello',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    introductionText: 'Description for components',
    // mdx: markdown,
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
  isSearch: true,
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
