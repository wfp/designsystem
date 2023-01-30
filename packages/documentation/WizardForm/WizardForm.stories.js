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
