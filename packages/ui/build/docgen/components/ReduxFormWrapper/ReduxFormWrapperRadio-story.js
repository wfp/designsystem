"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _reactFinalForm = require("react-final-form");

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

var _ReduxFormWrapper = _interopRequireDefault(require("../ReduxFormWrapper"));

var _Button = _interopRequireDefault(require("../Button"));

var _Blockquote = _interopRequireDefault(require("../Blockquote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onSubmit = function onSubmit() {};

(0, _react2.storiesOf)('Components|ReduxFormWrapper', module).addDecorator(_addonKnobs.withKnobs).add('RadioButton (react-final-form)', function () {
  return /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {
    onSubmit: onSubmit,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit,
          form = _ref.form,
          submitting = _ref.submitting,
          pristine = _ref.pristine,
          values = _ref.values;
      return /*#__PURE__*/_react.default.createElement("form", {
        onSubmit: handleSubmit,
        className: "wfp--form-long"
      }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        component: _ReduxFormWrapper.default,
        InputComponent: _RadioButton.default,
        id: "radio-1",
        name: "mode",
        value: "select 1",
        labelText: "select 1",
        type: "radio"
      }), /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
        component: _ReduxFormWrapper.default,
        InputComponent: _RadioButton.default,
        id: "radio-2",
        name: "mode",
        value: "select 2",
        labelText: "select 2",
        type: "radio"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        type: "submit",
        disabled: submitting || pristine
      }, "Submit"), ' ', /*#__PURE__*/_react.default.createElement(_Button.default, {
        type: "button",
        onClick: form.reset,
        disabled: submitting || pristine
      }, "Reset")), /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
        code: true
      }, JSON.stringify(values, 0, 2)));
    }
  });
});