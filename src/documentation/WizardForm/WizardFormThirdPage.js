import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import FormControls from '../../components/FormControls';

import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import FormGroup from '../../components/FormGroup';
import TextArea from '../../components/TextArea';

const WizardFormThirdPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Field
          component={ReduxFormWrapper}
          InputComponent={TextArea}
          name="notes"
          labelText="Notes"
          placeholder="Notes"
        />
      </FormGroup>
      <FormControls
        onPreviousClick={previousPage}
        nextText="Save Form"
        nextIcon={false}
      />
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
