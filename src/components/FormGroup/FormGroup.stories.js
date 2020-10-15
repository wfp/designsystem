import React from 'react';
import FormGroup from './FormGroup';
import TextInput from '../TextInput';

import markdown from './README.mdx';

export default {
  title: 'Components/Forms/FormGroup',
  component: FormGroup,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Default = (args) => (
  <FormGroup {...args} className="wfp--form-long">
    <TextInput
      id="test11"
      labelText="Text Input label"
      placeholder="Placeholder text"
    />
    <TextInput
      id="test21"
      labelText="Text Input label"
      placeholder="Placeholder text"
    />
    <TextInput
      id="test31"
      labelText="Text Input label"
      placeholder="Placeholder text"
    />
  </FormGroup>
);
Default.args = {
  legendText: 'FormGroup heading',
};

export const AddressDetails = (args) => (
  <>
    <FormGroup
      {...args}
      className="wfp--form-long"
      align="horizontal"
      legendText="Personal Info">
      <TextInput
        id="Firstname1"
        labelText="Firstname"
        placeholder="Placeholder text"
        required
      />
      <TextInput
        id="Lastname2"
        labelText="Lastname"
        placeholder="Placeholder text"
      />
      <TextInput
        id="phone3"
        labelText="Phone Number"
        placeholder="Placeholder text"
      />
    </FormGroup>
    <FormGroup
      {...args}
      className="wfp--form-long"
      align="horizontal"
      legendText="Address Info"
      style={{ marginTop: '1rem' }}>
      <TextInput
        id="address1"
        labelText="Address line 1"
        placeholder="Placeholder text"
      />
      <TextInput
        id="address2"
        labelText="Address line 2"
        placeholder="Placeholder text"
      />
    </FormGroup>
    <FormGroup {...args} className="wfp--form-long" align="horizontal">
      <TextInput id="city" labelText="City" placeholder="Placeholder text" />
      <TextInput id="state" labelText="State" placeholder="Placeholder text" />
      <TextInput
        id="zipcode"
        labelText="Zip code"
        placeholder="Placeholder text"
      />
    </FormGroup>
  </>
);
