"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WizardForm;

var _react = _interopRequireDefault(require("react"));

var _WizardHook = _interopRequireDefault(require("./WizardHook"));

var _FormOne = _interopRequireDefault(require("./FormOne"));

var _FormTwo = _interopRequireDefault(require("./FormTwo"));

var _FormThree = _interopRequireDefault(require("./FormThree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WizardForm() {
  return /*#__PURE__*/_react.default.createElement(_WizardHook.default, {
    content: [{
      label: "Name and last name",
      content: /*#__PURE__*/_react.default.createElement(_FormOne.default, null)
    }, {
      label: "Contact data",
      content: /*#__PURE__*/_react.default.createElement(_FormTwo.default, null)
    }, {
      label: "Additional notes",
      content: /*#__PURE__*/_react.default.createElement(_FormThree.default, null)
    }]
  });
}