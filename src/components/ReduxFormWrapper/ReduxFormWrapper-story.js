import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

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
import NumberInput from '../NumberInput';

const inputs = {
  Checkbox: 'Checkbox',
  RadioButton: 'RadioButton',
  Select: 'Select',
  ReactSelect: 'ReactSelect',
  TextArea: 'TextArea',
  TextInput: 'TextInput',
  NumberInput: 'NumberInput',
  Toggle: 'Toggle',
};

const inputMap = {
  Checkbox,
  RadioButton,
  Select,
  ReactSelect,
  TextArea,
  TextInput,
  NumberInput,
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
    component: ReduxFormWrapper,
    inputComponent:
      inputMap[
        select('Component (ReduxFormWrapper(Input))', inputs, 'TextInput')
      ],
    onClick: action('onClick'),
    labelText: text('Label (labelText)', 'Label Text'),
    helperText: text('Helper text (helperText)', 'This is a helper text'),
    name: text('Name', 'input'),
    placeholder: text('Placeholder', 'Placeholder content here'),
    required: boolean('Required (required)', true),
    onFocus: action('onFocus'),
    options: options,
  }),
};

storiesOf('ReduxFormWrapper', module)
  .addDecorator(withKnobs)

  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper>{story()}</FormWrapper>
    </Provider>
  ))
  .add('Default', () => {
    const regularProps = props.regular();
    return <Field {...regularProps} validate={[required, maxLength15]} />;
  });
