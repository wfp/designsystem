import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactSelect from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

storiesOf('React-Select', module)
  .addParameters({
    info: {
      source: false,
      propTables: false,
    },
  })
  .add('default', () => (
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
      />
    </div>
  ));
