"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/label-has-for */

/* eslint-disable jsx-a11y/label-has-associated-control */
var SelectSkeleton = function SelectSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null : /*#__PURE__*/_react.default.createElement("label", {
    className: "wfp--label wfp--skeleton",
    htmlFor: id
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--form-item"
  }, label, /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--select wfp--skeleton"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "wfp--select-input"
  })));
};

SelectSkeleton.propTypes = {
  hideLabel: _propTypes.default.bool
};
var _default = SelectSkeleton;
exports.default = _default;