import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import FormControls from '../../components/FormControls';

import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import FormGroup from '../../components/FormGroup';
import TextArea from '../../components/TextArea';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Field
          component={ReduxFormWrapper(TextArea)}
          name="notes"
          labelText="Notes"
          placeholder="Notes"
        />
      </FormGroup>
      <FormControls
        onPreviousClick={previousPage}
        nextHidden={true}
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
