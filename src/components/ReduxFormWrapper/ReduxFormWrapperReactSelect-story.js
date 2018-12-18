import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import store from '../../internal/configureStore';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';
import ReduxFormWrapper from '../ReduxFormWrapper';

import ReactSelect from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

storiesOf('ReduxFormWrapper', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper>{story()}</FormWrapper>
    </Provider>
  ))
  .add(
    'react-select',
    withInfo({
      text: `
        A wrapper for inputs so they can be used with ReduxForm.
      `,
    })(() => {

      const ReactSelectHelper = (props) => (
        <div className="wfp--form-item">
          <label htmlFor={props.id} className="wfp--label">{props.labelText}</label>
          <ReactSelect
            {...props}
          />
        </div>
      );

      return (
        <Field
          component={ReduxFormWrapper}
          InputComponent={ReactSelectHelper}
          className="wfp--react-select-container"
          classNamePrefix="wfp--react-select"
          isMulti
          labelText="The label"
          options={options}
        />
      );
    })
  );
