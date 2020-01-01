import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactSelect from 'react-select';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const props = {
  regular: () => ({
    placeholder: text('Placeholder (placeholder)', 'Placeholder'),
    isSearch: boolean(
      'allow the user to search for matching options (isSearch)',
      true
    ),
    isMulti: boolean('allow the user to select multiple values (isMult)', true),
    isDisabled: boolean('disabled (isDisabled)', false),
  }),
};

storiesOf('Components|ReactSelect', module)
  .addDecorator(withKnobs)
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
        {...props.regular()}
      />
    </div>
  ))
  .add('Staff select', () => (
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
        {...props.regular()}
      />
    </div>
  ));
