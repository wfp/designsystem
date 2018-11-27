import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactSelect from 'react-select';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

storiesOf('React-Select', module)
  .addDecorator(withReadme([readme]))
  .add(
    'default',
    () => (
      <div style={{ minWidth: '400px' }}>
        <ReactSelect
          className="wfp--react-select-container"
          classNamePrefix="wfp--react-select"
          isMulti
          options={options}
        />
      </div>
    )
  );
