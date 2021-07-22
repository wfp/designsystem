"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextArea = _interopRequireDefault(require("../../components/TextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormThree(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    labelText: "Notes",
    name: "newnotes2",
    inputRef: props.register
  }), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    labelText: "Summary",
    name: "summary",
    inputRef: props.register
  }));
}

var _default = FormThree;
exports.default = _default;