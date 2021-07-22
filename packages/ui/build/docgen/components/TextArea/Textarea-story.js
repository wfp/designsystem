"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _TextArea = _interopRequireDefault(require("../TextArea"));

var _TextArea2 = _interopRequireDefault(require("../TextArea/TextArea.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAreaProps = function TextAreaProps() {
  return {
    className: 'some-class',
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    readOnly: (0, _addonKnobs.boolean)('Read-only (readOnly)', false),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false),
    hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
    labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Text Area label'),
    invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
    invalidText: (0, _addonKnobs.text)('Content of form validation UI (invalidText)', 'A valid value is required'),
    helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text.'),
    placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder)', 'Placeholder text.'),
    id: 'test2',
    cols: (0, _addonKnobs.number)('Columns (columns)', 50),
    rows: (0, _addonKnobs.number)('Rows (rows)', 4),
    onChange: (0, _addonActions.action)('onChange'),
    onClick: (0, _addonActions.action)('onClick')
  };
};

(0, _react2.storiesOf)('Components|TextArea', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_TextArea.default, TextAreaProps());
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement(_TextArea2.default, null);
});