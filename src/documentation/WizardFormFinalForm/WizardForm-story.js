/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Field } from 'react-final-form';
import Wizard from './Wizard';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import FormGroup from '../../components/FormGroup';
import RadioButton from '../../components/RadioButton/RadioButton';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span className="wfp--form-requirement">{error}</span>
  ) : (
    false
  );

storiesOf(' Documentation', module).add(
  'Wizard Form final-form (draft)',
  () => (
    <Wizard
      initialValues={{ employed: true, stooge: 'larry' }}
      onSubmit={onSubmit}>
      <Wizard.Page
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          if (!values.lastName) {
            errors.lastName = 'Required';
          }
          return errors;
        }}>
        <Field
          id="firstName"
          name="firstName"
          component={ReduxFormWrapper}
          inputComponent={TextInput}
          labelText="First Name"
        />
        <Field
          id="lastName"
          name="lastName"
          component={ReduxFormWrapper}
          inputComponent={TextInput}
          labelText="Last Name"
        />
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.favoriteColor) {
            errors.favoriteColor = 'Required';
          }
          return errors;
        }}>
        <FormGroup>
          <label htmlFor="sex">Sex</label>
          <FormGroup
            className="wfp--radio-button-group"
            name="radio-button-group"
            defaultSelected="default-selected"
            legend="Group Legend">
            <Field
              name="sex"
              component={ReduxFormWrapper}
              inputComponent={RadioButton}
              type="radio"
              value="male"
              labelText="Male"
            />
            <Field
              name="sex"
              component={ReduxFormWrapper}
              inputComponent={RadioButton}
              type="radio"
              value="female"
              labelText="Female"
            />
          </FormGroup>
          <FormGroup>
            <Field
              component={ReduxFormWrapper}
              inputComponent={TextArea}
              name="notes"
              labelText="Notes"
              placeholder="Notes"
            />
          </FormGroup>
          <Field name="sex" component={renderError} />
        </FormGroup>
      </Wizard.Page>
    </Wizard>
  )
);
