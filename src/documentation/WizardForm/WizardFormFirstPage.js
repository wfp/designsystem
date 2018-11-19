import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import FormControls from '../../components/FormControls';
import FormError from '../../components/FormError';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';

const WizardFormFirstPage = props => {
  const { error, submitFailed, handleSubmit } = props;

  return (
    <form className="wfp--form-long" onSubmit={handleSubmit}>
      {/*<FormError {...props} />*/}
      <Field
        id="firstName"
        name="firstName"
        component={ReduxFormWrapper(TextInput)}
        labelText="First Name"
      />
      <Field
        id="lastName"
        name="lastName"
        component={ReduxFormWrapper(TextInput)}
        labelText="Last Name"
      />
      <div>
        <FormControls previousHidden={true} submitHidden={true} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
  //validate: (values, formData) => { return validate(values, formData, 0)},
})(WizardFormFirstPage);
