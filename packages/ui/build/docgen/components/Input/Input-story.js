"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Input = _interopRequireDefault(require("../Input"));

var _TextInput = _interopRequireDefault(require("../TextInput/TextInput.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = {
  None: '',
  'Text (text)': 'text',
  'For email (email)': 'email',
  'For password (password)': 'password'
};

var TextInputProps = function TextInputProps() {
  return {
    className: 'some-class',
    id: 'test2',
    defaultValue: (0, _addonKnobs.text)('Default value (defaultValue)', 'This is a default value'),
    labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Text Input label'),
    placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder)', 'Placeholder text'),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
    invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
    invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'A valid value is required'),
    readOnly: (0, _addonKnobs.boolean)('Read-only (readOnly)', false),
    helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text.'),
    onClick: (0, _addonActions.action)('onClick'),
    type: (0, _addonKnobs.select)('Form control type (type)', types, 'text'),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('Components|Input', module).addDecorator(_addonKnobs.withKnobs)
/*.add('Default', () => (
  <Input {...TextInputProps()}>
    <input></input>
  </Input>
))*/
.add('Functional', function () {
  return /*#__PURE__*/_react.default.createElement(_Input.default, TextInputProps(), function (props) {
    return /*#__PURE__*/_react.default.createElement("input", props);
  });
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    hideLabel: true
  }));
});