import React from 'react';
import Checkbox from '../Checkbox';
import Form from './Form';
import FormGroup from '../FormGroup';
//import FileUploader from '../FileUploader';
import Dropzone from 'react-dropzone';
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
  title: 'Components/Forms/Form',
  component: Form,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Default = (args) => {
  return (
    <Form {...args}>
      <TextInput
        id="testinput"
        labelText="Text Input label"
        placeholder="Placeholder text"
      />
      <br />

      <TextArea
        labelText="Text Area label"
        placeholder="Placeholder text"
        id="textarea5"
        cols={50}
        rows={3}
      />

      <Select id="select-12" defaultValue="placeholder-item">
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

      <Button type="submit" className="some-class">
        Submit
      </Button>
    </Form>
  );
};

Default.args = {
  children: 'Form',
  className: 'some-class',
  longForm: true,
};

const defaultformsourcecode = `
import { Form, TextInput, TextArea, Select, SelectItem, Button } from "@wfp/react";

<Form>
  <TextInput
    id="testinput"
    labelText="Text Input label"
    placeholder="Placeholder text"
  />
  <br />

  <TextArea
    labelText="Text Area label"
    placeholder="Placeholder text"
    id="textarea5"
    cols={50}
    rows={3}
  />

  <Select id="select-12" defaultValue="placeholder-item">
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

  <Button type="submit" className="some-class">
    Submit
  </Button>
</Form>
`;

Default.story = {
  parameters: {
    docs: {
      source: {
        code: defaultformsourcecode,
      },
    },
  },
};

export const DetailedForm = (args) => {
  return (
    <Form {...args}>
      <FormGroup legendText="Checkbox heading">
        <Checkbox defaultChecked labelText="Checkbox label" id="checkbox-0" />
        <Checkbox labelText="Checkbox label2" id="checkbox-1" />
        <Checkbox disabled labelText="Checkbox label3" id="checkbox-2" />
      </FormGroup>

      <NumberInput
        id="number-input-1"
        labelText="Text Input label"
        min={0}
        max={100}
        value={50}
        step={10}
      />

      <FormGroup>
        <Toggle id="toggle-1" />
        <Toggle disabled id="toggle-2" />
      </FormGroup>

      <FormGroup legendText="File Upload Types">
        <p>Legacy FileUploader</p>
        {/* TODO: <FileUploader
          id="file-1"
          labelDescription="Choose Files..."
          buttonLabel="Add files"
          labelText="Legacy"
  />*/}

        <p>Drag and Drop File Uploader</p>

        <Dropzone onDrop={(acceptedFiles) => acceptedFiles}>
          {({ getRootProps, getInputProps }) => (
            <section className="wfp--dropzone">
              <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
                <input {...getInputProps()} />
                <div>
                  Drag 'n' drop some files here, or click to select files
                </div>
              </div>
            </section>
          )}
        </Dropzone>
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
        <Search id="search-1" labelText="Search" placeholder="Search" />
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

      <br />
      <br />

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

DetailedForm.args = {
  children: 'Form',
  className: 'some-class',
  longForm: true,
};

const detailedformsourcecode = `
import { Form, FormGroup, Checkbox, NumberInput, Toggle, FileUploader, InputGroup, RadioButton, Search, TextInput, Button } from '@wfp/react';
import Dropzone from 'react-dropzone';

<Form>
  <FormGroup legendText="Checkbox heading">
    <Checkbox defaultChecked labelText="Checkbox label" id="checkbox-0" />
  </FormGroup>

  <NumberInput
    id="number-input-1"
    label="Number Input"
    labelText="Text Input label"
    min={0}
    max={100}
    value={50}
    step={10}
  />

  <FormGroup>
    <Toggle id="toggle-1" />
  </FormGroup>

  <FormGroup legendText="File Upload Types">
    <p>Legacy FileUploader</p>
    <FileUploader
      id="file-1"
      labelDescription="Choose Files..."
      buttonLabel="Add files"
      labelText="Legacy"
    />

    <p>Drag and Drop File Uploader</p>

    <Dropzone onDrop={(acceptedFiles) => acceptedFiles}>
      {({ getRootProps, getInputProps }) => (
        <section className="wfp--dropzone">
          <div {...getRootProps({ className: "wfp--dropzone__input" })}>
            <input {...getInputProps()} />
            <div>
              Drag 'n' drop some files here, or click to select files
            </div>
          </div>
        </section>
      )}
    </Dropzone>
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
    </InputGroup>
  </FormGroup>

  <Search id="search-1" placeHolder="Search" />

  <TextInput
    type="password"
    required
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    id="test3"
    labelText="Password"
  />
  <Button type="submit" className="some-class">
    Submit
  </Button>
</Form>
`;

DetailedForm.story = {
  parameters: {
    docs: {
      source: {
        code: detailedformsourcecode,
      },
    },
  },
};

export const Login = (args) => {
  return (
    <Form {...args}>
      <FormGroup legendText="Login Form Example">
        <TextInput
          type="email"
          id="email1"
          labelText="Email"
          placeholder="c*****@wfp.org"
        />
        <br />
        <TextInput
          type="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          id="password2"
          labelText="Password"
        />
        <br />
        <Button type="submit" className="some-class">
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

Login.args = {
  longForm: false,
};

export const Contact = (args) => {
  return (
    <Form {...args}>
      <FormGroup align="horizontal" legendText="Contact Form Example: name">
        <TextInput
          type="text"
          id="firstname"
          labelText="Firstname"
          placeholder="Noami"
        />
        <TextInput
          type="text"
          id="lastname"
          labelText="lastname"
          placeholder="ADAMS"
        />
      </FormGroup>
      <TextInput
        type="email"
        id="email4"
        labelText="Email"
        placeholder="c******@wfp.org"
      />

      <FormGroup legendText="Additional details">
        <TextArea
          labelText="Message"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          id="test5"
          cols={50}
          rows={5}
        />
      </FormGroup>
      <>
        <Button type="button" kind="secondary">
          cancel
        </Button>
        <Button type="submit" className="some-class">
          Send
        </Button>
      </>
    </Form>
  );
};

const contactsourcecode = `
import { Form, FormGroup, TextInput, Button  } from "@wfp/react";


<Form>
  <FormGroup align="horizontal" legendText="Contact Form Example: name">
    <TextInput
      type="text"
      id="firstname"
      labelText="Firstname"
      placeholder="Noami"
    />
    <TextInput
      type="text"
      id="lastname"
      labelText="lastname"
      placeholder="ADAMS"
    />
  </FormGroup>
  <TextInput
    type="email"
    id="email4"
    labelText="Email"
    placeholder="c******@wfp.org"
  />

  <FormGroup legendText="Additional details">
    <TextArea
      labelText="Message"
      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat..."
      id="test5"
      cols={50}
      rows={5}
    />
  </FormGroup>
  <>
    <Button type="button" kind="secondary">
      cancel
    </Button>
    <Button type="submit" className="some-class">
      Send
    </Button>
  </>
</Form>
`;

Contact.story = {
  parameters: {
    docs: {
      source: {
        code: contactsourcecode,
      },
    },
  },
};
