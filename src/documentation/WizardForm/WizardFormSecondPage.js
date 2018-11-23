import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import FormError from '../../components/FormError';
import FormGroup from '../../components/FormGroup';
import TextInput from '../../components/TextInput';
import FormControls from '../../components/FormControls';
import RadioButton from '../../components/RadioButton/RadioButton';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span className="wfp--form-requirement">{error}</span>
  ) : (
    false
  );

const WizardFormSecondPage = props => {
  const { error, handleSubmit, previousPage, submitFailed } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={ReduxFormWrapper}
        InputComponent={TextInput}
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
            component={ReduxFormWrapper}
            InputComponent={RadioButton}
            type="radio"
            value="male"
            labelText="Male"
          />
          <Field
            name="sex"
            component={ReduxFormWrapper}
            InputComponent={RadioButton}
            type="radio"
            value="female"
            labelText="Female"
          />
        </FormGroup>
        <Field name="sex" component={renderError} />
      </FormGroup>
      <FormControls onPreviousClick={previousPage} submitHidden={true} />
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
