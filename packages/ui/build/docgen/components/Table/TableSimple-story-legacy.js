"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Table', module).addDecorator(_addonKnobs.withKnobs).add('Simple table', function () {
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "wfp--table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: "wfp--table-thead-row--center"
  }, /*#__PURE__*/_react.default.createElement("th", {
    colspan: "2"
  }, "Name"), /*#__PURE__*/_react.default.createElement("th", {
    colspan: "4"
  }, "Info")), /*#__PURE__*/_react.default.createElement("tr", {
    class: ""
  }, /*#__PURE__*/_react.default.createElement("th", {
    colspan: "1"
  }, "First Name"), /*#__PURE__*/_react.default.createElement("th", {
    colspan: "1"
  }, "Last Name"), /*#__PURE__*/_react.default.createElement("th", {
    colspan: "1"
  }, "Age"), /*#__PURE__*/_react.default.createElement("th", {
    colspan: "1"
  }, "Visits"), /*#__PURE__*/_react.default.createElement("th", {
    colspan: "1"
  }, "Status"))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "Max"), /*#__PURE__*/_react.default.createElement("td", null, "Mustermann"), /*#__PURE__*/_react.default.createElement("td", null, "29"), /*#__PURE__*/_react.default.createElement("td", null, "32"), /*#__PURE__*/_react.default.createElement("td", null, "confirmed")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "John"), /*#__PURE__*/_react.default.createElement("td", null, "Doe"), /*#__PURE__*/_react.default.createElement("td", null, "32"), /*#__PURE__*/_react.default.createElement("td", null, "21"), /*#__PURE__*/_react.default.createElement("td", null, "pending"))));
});