import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { withReadme } from 'storybook-readme';
import readme from './README.md';

import store from '../../internal/configureStore';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';
import ReduxFormWrapper from '../ReduxFormWrapper';

import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
import Select from '../Select';
import ReactSelect from 'react-select';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import Toggle from '../Toggle';

const inputs = {
  Checkbox: 'Checkbox',
  RadioButton: 'RadioButton',
  Select: 'Select',
  ReactSelect: 'ReactSelect',
  TextArea: 'TextArea',
  TextInput: 'TextInput',
  Toggle: 'Toggle',
};

const inputMap = {
  Checkbox,
  RadioButton,
  Select,
  ReactSelect,
  TextArea,
  TextInput,
  Toggle,
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

/* const children = () => (
  <React.Fragment>
    <option />
    <option value="#ff0000">Red</option>
    <option value="#00ff00">Green</option>
    <option value="#0000ff">Blue</option>
  </React.Fragment>
); */

const props = {
  regular: () => ({
    id: 'id-input',
    className: 'wfp--react-select-container',
    classNamePrefix: 'wfp--react-select',
    component: ReduxFormWrapper(
      inputMap[
        select('Component (ReduxFormWrapper(Input))', inputs, 'TextInput')
      ]
    ),
    defaultMenuIsOpen: true,
    onClick: action('onClick'),
    labelText: text('Label (labelText)', 'Label Text'),
    name: text('Name', 'input'),
    placeholder: text('Placeholder', 'Placeholder content here'),
    required: boolean('Required (required)', true),
    onFocus: action('onFocus'),
    options: options
  }),
};

storiesOf('ReduxFormWrapper', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper>{story()}</FormWrapper>
    </Provider>
  ))
  .add(
    'Default',
    withInfo({
      text: `
        A wrapper for inputs so they can be used with ReduxForm.
      `,
    })(() => {
      const regularProps = props.regular();
      return <Field {...regularProps} validate={[required, maxLength15]} />;
    })
  );
