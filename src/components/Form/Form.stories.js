import React from 'react';
import Checkbox from '../Checkbox';
import Form from './Form';
import FormGroup from '../FormGroup';
import FileUploader from '../FileUploader';
import NumberInput from '../NumberInput';
import RadioButton from '../RadioButton';
import InputGroup from '../InputGroup';
import Button from '../Button';
import Search from '../Search';
import Select from '../Select';
import SelectItem from '../SelectItem';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import Toggle from '../Toggle';

import markdown from './README.mdx';

export default {
  title: 'Forms/Form',
  component: Form,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
  /*argTypes: {
    children: { control: 'text' },
  },*/
};

export const Default = (args) => {
  return (
    <Form {...args}>
      <FormGroup legendText="Checkbox heading">
        <Checkbox defaultChecked labelText="Checkbox label" id="checkbox-0" />
        <Checkbox labelText="Checkbox label2" id="checkbox-1" />
        <Checkbox disabled labelText="Checkbox label3" id="checkbox-2" />
      </FormGroup>

      <NumberInput
        id="number-input-1"
        label="Number Input"
        labelText="Text Input label"
        iconDescription="icon desc"
        min={0}
        max={100}
        value={50}
        step={10}
      />

      <FormGroup>
        <Toggle id="toggle-1" />
        <Toggle disabled id="toggle-2" />
      </FormGroup>

      <FormGroup>
        <FileUploader
          id="file-1"
          labelDescription="Choose Files..."
          buttonLabel="Add files"
        />
      </FormGroup>

      <FormGroup legendText="Radio Button heading">
        <InputGroup name="input-group" defaultSelected="default-selected">
          <RadioButton
            value="standard"
            id="radio-1"
            labelText="Standard Radio Button"
          />
          <RadioButton
            value="default-selected"
            labelText="Default Selected Radio Button"
            id="radio-2"
          />
          <RadioButton
            value="blue"
            labelText="Standard Radio Button"
            id="radio-3"
          />
          <RadioButton
            value="disabled"
            labelText="Disabled Radio Button"
            id="radio-4"
            disabled
          />
        </InputGroup>
      </FormGroup>

      <FormGroup legendText="Radio Button heading">
        <Search id="search-1" labelText="Search" placeHolderText="Search" />
      </FormGroup>

      <Select id="select-1" defaultValue="placeholder-item">
        <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Choose an option"
        />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>

      <TextInput
        id="test2"
        labelText="Text Input label"
        placeholder="Placeholder text"
      />

      <TextInput
        type="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        id="test3"
        labelText="Password"
      />

      <TextInput
        type="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        id="test4"
        labelText="Password"
        invalid={true}
        invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
      />

      <TextArea
        labelText="Text Area label"
        placeholder="Placeholder text"
        id="test5"
        cols={50}
        rows={4}
      />

      <Button type="submit" className="some-class">
        Submit
      </Button>
    </Form>
  );
};

Default.args = {
  className: 'some-class',
  longForm: true,
};
