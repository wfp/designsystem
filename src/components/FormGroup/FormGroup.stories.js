import React from 'react';
import FormGroup from './FormGroup';
import TextInput from '../TextInput';
import NumberInput from '../NumberInput';
import ReactSelect from 'react-select';

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

const options = [
  { value: 'afghanistan', label: 'Afghanistan (AF)', city: [''] },
  {
    value: 'albania',
    label: 'Albania',
    city: ['ballsh', 'Fier', 'Labinot-Mal', 'Lumalas', 'Mullias'],
  },
  { value: ' algeria', label: ' Algeria', city: [] },
];

export const AddressDetails = (args) => (
  <>
    <FormGroup
      {...args}
      className="wfp--form-long"
      align="horizontal"
      legendText="Address Info"
      style={{ marginTop: '1rem' }}>
      <div className="wfp--form-item" style={{ minWidth: '100px' }}>
        <label htmlFor="country" className="wfp--label">
          Country*
        </label>
        <ReactSelect
          className="wfp--react-select-container"
          classNamePrefix="wfp--react-select"
          id="country"
          options={options}
          required
        />
      </div>
      <div className="wfp--form-item" style={{ minWidth: '100px' }}>
        <label htmlFor="city" className="wfp--label">
          City*
        </label>
        <ReactSelect
          className="wfp--react-select-container"
          classNamePrefix="wfp--react-select"
          id="city"
          required
        />
      </div>
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

AddressDetails.story = {
  name: 'Residence Address',
};
