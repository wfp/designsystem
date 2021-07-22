"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbHome = _interopRequireDefault(require("../BreadcrumbHome"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _Breadcrumb2 = _interopRequireDefault(require("../Breadcrumb/Breadcrumb.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var props = function props() {
  return {
    className: 'some-class',
    onClick: (0, _addonActions.action)('onClick')
  };
};

(0, _react2.storiesOf)('Components|Breadcrumb', module).addParameters({
  jest: ['Breadcrumb']
}).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, props(), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/#"
  }, /*#__PURE__*/_react.default.createElement(_BreadcrumbHome.default, null))), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 2"), /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
    disableLink: true
  }, "Breadcrumb 3"));
}).add('skeleton', function () {
  return /*#__PURE__*/_react.default.createElement(_Breadcrumb2.default, null);
});