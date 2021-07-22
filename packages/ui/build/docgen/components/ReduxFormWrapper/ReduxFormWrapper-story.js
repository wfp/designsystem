"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _configureStore = _interopRequireDefault(require("../../internal/configureStore"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _RfFormWrapper = _interopRequireDefault(require("../../internal/RfFormWrapper"));

var _ReduxFormWrapper = _interopRequireDefault(require("../ReduxFormWrapper"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _Select = _interopRequireDefault(require("../Select"));

var _Slider = _interopRequireDefault(require("../Slider"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _TextArea = _interopRequireDefault(require("../TextArea"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  Checkbox: _Checkbox.default,
  RadioButton: _RadioButton.default,
  Select: _Select.default,
  Slider: _Slider.default,
  ReactSelect: _reactSelect.default,
  TextArea: _TextArea.default,
  TextInput: _TextInput.default,
  NumberInput: _NumberInput.default,
  Toggle: _Toggle.default
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
      component: _ReduxFormWrapper.default,
      inputComponent: inputMap[(0, _addonKnobs.select)('Input component (inputComponent)', inputs, 'TextInput')],
      onClick: (0, _addonActions.action)('onClick'),
      labelText: (0, _addonKnobs.text)('Label (labelText)', 'Label Text'),
      helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'This is a helper text'),
      name: (0, _addonKnobs.text)('Name', 'input'),
      placeholder: (0, _addonKnobs.text)('Placeholder', 'Placeholder content here'),
      required: (0, _addonKnobs.boolean)('Required (required)', true),
      onFocus: (0, _addonActions.action)('onFocus'),
      options: options,
      min: (0, _addonKnobs.number)('The minimum value (min)', 0),
      max: (0, _addonKnobs.number)('The maximum value (max)', 100),
      step: (0, _addonKnobs.number)('The step (step)', 1)
    };
  }
};
(0, _react2.storiesOf)('Components|ReduxFormWrapper', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _configureStore.default
  }, /*#__PURE__*/_react.default.createElement(_RfFormWrapper.default, null, story()));
}).add('Default', function () {
  var regularProps = props.regular();
  return /*#__PURE__*/_react.default.createElement(_reduxForm.Field, _extends({}, regularProps, {
    validate: [required, maxLength15]
  }));
});