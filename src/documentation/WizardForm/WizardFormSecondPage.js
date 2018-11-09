import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import FormGroup from '../../components/FormGroup';
import TextInput from '../../components/TextInput';
import FormControls from '../../components/FormControls';
import RadioButton from '../../components/RadioButton/RadioButton';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={ReduxFormWrapper(TextInput)}
        labelText="Email"
      />
      <FormGroup>
        <label>Sex</label>
        <FormGroup
          className="wfp--radio-button-group"
          name="radio-button-group"
          defaultSelected="default-selected"
          legend="Group Legend">
          <Field
            name="sex"
            component={ReduxFormWrapper(RadioButton)}
            type="radio"
            value="male"
            labelText="Male"
          />
          <Field
            name="sex"
            component={ReduxFormWrapper(RadioButton)}
            type="radio"
            value="female"
            labelText="Female"
          />
          <Field name="sex" component={renderError} />
        </FormGroup>
      </FormGroup>
      <FormControls />
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
