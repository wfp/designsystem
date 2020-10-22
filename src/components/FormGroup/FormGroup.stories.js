import React from 'react';
import FormGroup from './FormGroup';
import TextInput from '../TextInput';
import NumberInput from '../NumberInput';

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
      legendText="Address Info"
      style={{ marginTop: '1rem' }}>
      <TextInput
        id="country"
        labelText="Country"
        placeholder="Placeholder text"
        required
      />
      <TextInput
        id="city"
        labelText="City"
        placeholder="Placeholder text"
        required
      />
      <TextInput
        id="zipcode"
        labelText="Postal code/ZIP code"
        placeholder="eg: 13-3456"
      />
    </FormGroup>
    <FormGroup {...args} className="wfp--form-long" align="horizontal">
      <TextInput
        id="street"
        labelText="Street"
        placeholder="eg: Chemin Aime Steinlein"
      />
      <NumberInput id="hno" labelText="House number" placeholder="5" />
    </FormGroup>
  </>
);
