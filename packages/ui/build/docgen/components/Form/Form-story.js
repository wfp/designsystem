"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Form = _interopRequireDefault(require("../Form"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _FileUploader = _interopRequireDefault(require("../FileUploader"));

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _InputGroup = _interopRequireDefault(require("../InputGroup"));

var _Button = _interopRequireDefault(require("../Button"));

var _Search = _interopRequireDefault(require("../Search"));

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _TextArea = _interopRequireDefault(require("../TextArea"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var additionalProps = {
  className: 'some-class',
  longForm: true,
  onSubmit: function onSubmit(e) {
    e.preventDefault();
    (0, _addonActions.action)('FormSubmitted')(e);
  }
};
var checkboxEvents = {
  className: 'some-class',
  labelText: 'Checkbox label'
};

var fieldsetCheckboxProps = function fieldsetCheckboxProps() {
  return {
    className: 'some-class',
    legendText: (0, _addonKnobs.text)('Text in <legend> (legendText)', 'Checkbox heading'),
    message: (0, _addonKnobs.boolean)('Show form requirement (message)', false),
    messageText: (0, _addonKnobs.text)('Form requirement text (messageText)', ''),
    invalid: (0, _addonKnobs.boolean)('Mark as invalid (invalid)', false)
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
(0, _react2.storiesOf)('Components|Form', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Form.default, additionalProps, /*#__PURE__*/_react.default.createElement(_FormGroup.default, fieldsetCheckboxProps(), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    defaultChecked: true
  }, checkboxEvents, {
    id: "checkbox-0"
  })), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({}, checkboxEvents, {
    id: "checkbox-1"
  })), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    disabled: true
  }, checkboxEvents, {
    id: "checkbox-2"
  }))), /*#__PURE__*/_react.default.createElement(_NumberInput.default, numberInputProps), /*#__PURE__*/_react.default.createElement(_FormGroup.default, fieldsetToggleProps, /*#__PURE__*/_react.default.createElement(_Toggle.default, _extends({}, toggleProps, {
    id: "toggle-1"
  })), /*#__PURE__*/_react.default.createElement(_Toggle.default, _extends({
    disabled: true
  }, toggleProps, {
    id: "toggle-2"
  }))), /*#__PURE__*/_react.default.createElement(_FormGroup.default, fieldsetFileUploaderProps, /*#__PURE__*/_react.default.createElement(_FileUploader.default, _extends({}, fileUploaderEvents, {
    id: "file-1",
    labelDescription: "Choose Files..."
  }))), /*#__PURE__*/_react.default.createElement(_FormGroup.default, fieldsetRadioProps, /*#__PURE__*/_react.default.createElement(_InputGroup.default, {
    onChange: (0, _addonActions.action)('onChange'),
    name: "input-group",
    defaultSelected: "default-selected"
  }, /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "standard",
    id: "radio-1",
    labelText: "Standard Radio Button"
  }, radioProps)), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "default-selected",
    labelText: "Default Selected Radio Button",
    id: "radio-2"
  }, radioProps)), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "blue",
    labelText: "Standard Radio Button",
    id: "radio-3"
  }, radioProps)), /*#__PURE__*/_react.default.createElement(_RadioButton.default, _extends({
    value: "disabled",
    labelText: "Disabled Radio Button",
    id: "radio-4",
    disabled: true
  }, radioProps)))), /*#__PURE__*/_react.default.createElement(_FormGroup.default, fieldsetSearchProps, /*#__PURE__*/_react.default.createElement(_Search.default, _extends({}, searchProps, {
    id: "search-1",
    labelText: "Search",
    placeHolderText: "Search"
  }))), /*#__PURE__*/_react.default.createElement(_Select.default, _extends({}, selectProps, {
    id: "select-1",
    defaultValue: "placeholder-item"
  }), /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Choose an option"
  }), /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    value: "option-1",
    text: "Option 1"
  }), /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    value: "option-2",
    text: "Option 2"
  }), /*#__PURE__*/_react.default.createElement(_SelectItem.default, {
    value: "option-3",
    text: "Option 3"
  })), /*#__PURE__*/_react.default.createElement(_TextInput.default, TextInputProps), /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
    type: "password",
    required: true,
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
  }, PasswordProps)), /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
    type: "password",
    required: true,
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
  }, InvalidPasswordProps)), /*#__PURE__*/_react.default.createElement(_TextArea.default, textareaProps), /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    type: "submit",
    className: "some-class"
  }, buttonEvents), "Submit"));
});