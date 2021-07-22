function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import store from '../../internal/configureStore';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';
import ReduxFormWrapper from '../ReduxFormWrapper';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
import Select from '../Select';
import Slider from '../Slider';
import ReactSelect from 'react-select';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import Toggle from '../Toggle';
import NumberInput from '../NumberInput';
var inputs = {
  Checkbox: 'Checkbox',
  RadioButton: 'RadioButton',
  Select: 'Select',
  Slider: 'Slider',
  ReactSelect: 'ReactSelect',
  TextArea: 'TextArea',
  TextInput: 'TextInput',
  NumberInput: 'NumberInput',
  Toggle: 'Toggle'
};
var inputMap = {
  Checkbox: Checkbox,
  RadioButton: RadioButton,
  Select: Select,
  Slider: Slider,
  ReactSelect: ReactSelect,
  TextArea: TextArea,
  TextInput: TextInput,
  NumberInput: NumberInput,
  Toggle: Toggle
};
var options = [{
  value: 'chocolate',
  label: 'Chocolate'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];

var required = function required(value) {
  return value ? undefined : 'Required';
};

var maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max ? "Must be ".concat(max, " characters or less") : undefined;
  };
};

var maxLength15 = maxLength(15);
/* const children = () => (
  <React.Fragment>
    <option />
    <option value="#ff0000">Red</option>
    <option value="#00ff00">Green</option>
    <option value="#0000ff">Blue</option>
  </React.Fragment>
); */

var props = {
  regular: function regular() {
    return {
      id: 'id-input',
      className: 'wfp--react-select-container',
      classNamePrefix: 'wfp--react-select',
      component: ReduxFormWrapper,
      inputComponent: inputMap[select('Input component (inputComponent)', inputs, 'TextInput')],
      onClick: action('onClick'),
      labelText: text('Label (labelText)', 'Label Text'),
      helperText: text('Helper text (helperText)', 'This is a helper text'),
      name: text('Name', 'input'),
      placeholder: text('Placeholder', 'Placeholder content here'),
      required: boolean('Required (required)', true),
      onFocus: action('onFocus'),
      options: options,
      min: number('The minimum value (min)', 0),
      max: number('The maximum value (max)', 100),
      step: number('The step (step)', 1)
    };
  }
};
storiesOf('Components|ReduxFormWrapper', module).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(FormWrapper, null, story()));
}).add('Default', function () {
  var regularProps = props.regular();
  return /*#__PURE__*/React.createElement(Field, _extends({}, regularProps, {
    validate: [required, maxLength15]
  }));
});