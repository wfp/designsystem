import React from 'react';

import { useForm } from 'react-hook-form';
import { Wizard, Page } from './Wizard';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import FormGroup from '../../components/FormGroup';
import Blockquote from '../../components/Blockquote';
import Checkbox from '../../components/Checkbox';
import Wrapper from '../../components/Wrapper';
import RadioButton from '../../components/RadioButton/RadioButton';
import RegularPage from '../RegularPage';
import markdown from './README.mdx';

// const markdown = 'TODO: sourcecode coming soon';

export default {
  title: 'Templates/WizardForm',
  parameters: {
    componentSubtitle: 'Example',
    status: 'released',
    mdx: markdown,
  },
};

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span className="wfp--form-requirement">{error}</span>
  ) : (
    false
  );

export const Regular = (args) => {
  const { register, watch } = useForm();
  const watchAllFields = watch();
  return (
    <Wrapper background="lighter" pageWidth="lg" spacing="xl">
      <Wizard initialValues={{ employed: true, stooge: 'larry' }}>
        <Page label="Name and last name">
          <div style={{ marginBottom: '2rem' }}>
            <Blockquote title="Regular Blockquote">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Blockquote>
          </div>
          <TextInput
            helperText="Enter your full first name"
            labelText="First Name"
            {...register('firstName')}
          />
          <TextArea labelText="Notes" {...register('notes')} />
          <Checkbox
            id="checkbox"
            labelText="Checkbox"
            {...register('checkbox')}
          />
          {/* <Field
          id="firstName2"
          name="firstName2"
          helperText="Enter your full first name"
          component={ReduxFormWrapper}
          inputComponent={TextInput}
          labelText="First Name"
        /> */}
        </Page>
        <Page label="Contact data">
          <FormGroup>
            <label htmlFor="gender">Gender</label>
            <FormGroup
              className="wfp--input-group"
              name="input-group"
              defaultSelected="default-selected"
              legend="Group Legend">
              {/*} <Field
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
      />*/}
            </FormGroup>
            <FormGroup>
              {/*<Field
              component={ReduxFormWrapper}
              inputComponent={TextArea}
              name="notes2"
              labelText="Notes2"
              placeholder="Notes"
            />*/}
            </FormGroup>
            {/*<Field name="gender" component={renderError} />*/}
          </FormGroup>
        </Page>
        <Page
          label="Additional notes"
          validate={(values) => {
            const errors = {};
            if (!values.newNotes) {
              errors.newNotes = 'Required';
            }
            return errors;
          }}>
          {/*<Field
          component={ReduxFormWrapper}
          inputComponent={TextArea}
          name="newNotes"
          labelText="Notes"
          placeholder="Notes"
        />*/}
        </Page>
        <Page label="Sulamen mon anmen">Lorem Ipsum</Page>
        <Page label="Summary" helperText="Check & validate" status={'summary'}>
          {/*} <Field
          component={ReduxFormWrapper}
          inputComponent={TextArea}
          name="summary"
          labelText="Summary"
          placeholder="Summary"
      />*/}
        </Page>
      </Wizard>
      {JSON.stringify(watchAllFields)}
    </Wrapper>
  );
};

Regular.decorators = [
  (Story) => (
    <RegularPage title="Wizard form" withoutSecondaryTabs pageWidth="lg">
      <Story />
    </RegularPage>
  ),
];
