"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidSvg = exports.Invalid = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For invalid Values
var Invalid = function Invalid(props) {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: props.className + ' invalid'
  }, "\u2013");
}; // For invalid Values


exports.Invalid = Invalid;

var InvalidSvg = function InvalidSvg(props) {
  return /*#__PURE__*/_react.default.createElement("tspan", {
    className: props.className + ' invalid'
  }, "\u2013");
};

exports.InvalidSvg = InvalidSvg;