import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

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

storiesOf('Components|ReduxFormWrapper', module)
  .addDecorator(withKnobs)

  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper>{story()}</FormWrapper>
    </Provider>
  ))
  .add('react-select', () => {
    const ReactSelectHelper = props => (
      <div className="wfp--form-item">
        <label htmlFor={props.id} className="wfp--label">
          {props.labelText}
        </label>
        {props.helperText && (
          <div className="wfp--form__helper-text">{props.helperText}</div>
        )}
        <ReactSelect
          {...props}
          className="wfp--react-select-container"
          classNamePrefix="wfp--react-select"
        />
      </div>
    );

    return (
      <Field
        component={ReduxFormWrapper}
        InputComponent={ReactSelectHelper}
        helperText="This is a helper text"
        labelText="The label"
        options={options}
      />
    );
  });
