function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Checkbox from '../Checkbox';
import Form from '../Form';
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
var additionalProps = {
  className: 'some-class',
  longForm: true,
  onSubmit: function onSubmit(e) {
    e.preventDefault();
    action('FormSubmitted')(e);
  }
};
var checkboxEvents = {
  className: 'some-class',
  labelText: 'Checkbox label'
};

var fieldsetCheckboxProps = function fieldsetCheckboxProps() {
  return {
    className: 'some-class',
    legendText: text('Text in <legend> (legendText)', 'Checkbox heading'),
    message: boolean('Show form requirement (message)', false),
    messageText: text('Form requirement text (messageText)', ''),
    invalid: boolean('Mark as invalid (invalid)', false)
  };
};

var numberInputProps = {
  className: 'some-class',
  id: 'number-input-1',
  label: 'Number Input',
  min: 0,
  max: 100,
  value: 50,
  step: 10
};
var toggleProps = {
  className: 'some-class'
};
var fieldsetToggleProps = {
  className: 'some-class',
  legendText: 'Toggle heading'
};
var fileUploaderEvents = {
  buttonLabel: 'Add files',
  className: 'some-class'
};
var fieldsetFileUploaderProps = {
  className: 'some-class',
  legendText: 'File Uploader'
};
var radioProps = {
  className: 'some-class'
};
var fieldsetRadioProps = {
  className: 'some-class',
  legendText: 'Radio Button heading'
};
var searchProps = {
  className: 'some-class'
};
var fieldsetSearchProps = {
  className: 'some-class',
  legendText: 'Search'
};
var selectProps = {
  className: 'some-class'
};
var TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text'
};
var PasswordProps = {
  className: 'some-class',
  id: 'test3',
  labelText: 'Password'
};
var InvalidPasswordProps = {
  className: 'some-class',
  id: 'test4',
  labelText: 'Password',
  invalid: true,
  invalidText: 'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.'
};
var textareaProps = {
  labelText: 'Text Area label',
  className: 'some-class',
  placeholder: 'Placeholder text',
  id: 'test5',
  cols: 50,
  rows: 4
};
var buttonEvents = {
  className: 'some-class'
};
storiesOf('Components|Form', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(Form, additionalProps, /*#__PURE__*/React.createElement(FormGroup, fieldsetCheckboxProps(), /*#__PURE__*/React.createElement(Checkbox, _extends({
    defaultChecked: true
  }, checkboxEvents, {
    id: "checkbox-0"
  })), /*#__PURE__*/React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "checkbox-1"
  })), /*#__PURE__*/React.createElement(Checkbox, _extends({
    disabled: true
  }, checkboxEvents, {
    id: "checkbox-2"
  }))), /*#__PURE__*/React.createElement(NumberInput, numberInputProps), /*#__PURE__*/React.createElement(FormGroup, fieldsetToggleProps, /*#__PURE__*/React.createElement(Toggle, _extends({}, toggleProps, {
    id: "toggle-1"
  })), /*#__PURE__*/React.createElement(Toggle, _extends({
    disabled: true
  }, toggleProps, {
    id: "toggle-2"
  }))), /*#__PURE__*/React.createElement(FormGroup, fieldsetFileUploaderProps, /*#__PURE__*/React.createElement(FileUploader, _extends({}, fileUploaderEvents, {
    id: "file-1",
    labelDescription: "Choose Files..."
  }))), /*#__PURE__*/React.createElement(FormGroup, fieldsetRadioProps, /*#__PURE__*/React.createElement(InputGroup, {
    onChange: action('onChange'),
    name: "input-group",
    defaultSelected: "default-selected"
  }, /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "standard",
    id: "radio-1",
    labelText: "Standard Radio Button"
  }, radioProps)), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "default-selected",
    labelText: "Default Selected Radio Button",
    id: "radio-2"
  }, radioProps)), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "blue",
    labelText: "Standard Radio Button",
    id: "radio-3"
  }, radioProps)), /*#__PURE__*/React.createElement(RadioButton, _extends({
    value: "disabled",
    labelText: "Disabled Radio Button",
    id: "radio-4",
    disabled: true
  }, radioProps)))), /*#__PURE__*/React.createElement(FormGroup, fieldsetSearchProps, /*#__PURE__*/React.createElement(Search, _extends({}, searchProps, {
    id: "search-1",
    labelText: "Search",
    placeHolderText: "Search"
  }))), /*#__PURE__*/React.createElement(Select, _extends({}, selectProps, {
    id: "select-1",
    defaultValue: "placeholder-item"
  }), /*#__PURE__*/React.createElement(SelectItem, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), /*#__PURE__*/React.createElement(SelectItem, {
    value: "option-1",
    text: "Option 1"
  }), /*#__PURE__*/React.createElement(SelectItem, {
    value: "option-2",
    text: "Option 2"
  }), /*#__PURE__*/React.createElement(SelectItem, {
    value: "option-3",
    text: "Option 3"
  })), /*#__PURE__*/React.createElement(TextInput, TextInputProps), /*#__PURE__*/React.createElement(TextInput, _extends({
    type: "password",
    required: true,
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
  }, PasswordProps)), /*#__PURE__*/React.createElement(TextInput, _extends({
    type: "password",
    required: true,
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
  }, InvalidPasswordProps)), /*#__PURE__*/React.createElement(TextArea, textareaProps), /*#__PURE__*/React.createElement(Button, _extends({
    type: "submit",
    className: "some-class"
  }, buttonEvents), "Submit"));
});