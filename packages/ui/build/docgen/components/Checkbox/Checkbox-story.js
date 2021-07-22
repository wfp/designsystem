"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Checkbox2 = _interopRequireDefault(require("../Checkbox/Checkbox.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = function props() {
  return {
    className: 'some-class',
    labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Checkbox label'),
    indeterminate: (0, _addonKnobs.boolean)('Intermediate (indeterminate)', false),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
    wrapperClassName: (0, _addonKnobs.text)('Wrapper CSS class name (wrapperClassName)', ''),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('Components|Checkbox', module).addDecorator(_addonKnobs.withKnobs).add('checked', function () {
  var checkboxProps = props();
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: "wfp--fieldset"
  }, /*#__PURE__*/_react.default.createElement("legend", {
    className: "wfp--label"
  }, "Checkbox heading"), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    defaultChecked: true
  }, checkboxProps, {
    id: "checkbox-label-1"
  })), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    defaultChecked: true
  }, checkboxProps, {
    id: "checkbox-label-2"
  })));
}).add('unchecked', function () {
  var checkboxProps = props();
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: "wfp--fieldset"
  }, /*#__PURE__*/_react.default.createElement("legend", {
    className: "wfp--label"
  }, "Checkbox heading"), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({}, checkboxProps, {
    id: "checkbox-label-1"
  })), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({}, checkboxProps, {
    id: "checkbox-label-2"
  })));
}).add('inline', function () {
  var checkboxProps = props();
  return /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement("legend", {
    className: "wfp--label"
  }, "Checkbox heading"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--fieldset__inline"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({}, checkboxProps, {
    id: "checkbox-label-1"
  })), /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({}, checkboxProps, {
    id: "checkbox-label-2"
  }))));
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Checkbox2.default, null));
});