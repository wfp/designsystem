"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextInput = _interopRequireDefault(require("../../components/TextInput"));

var _TextArea = _interopRequireDefault(require("../../components/TextArea"));

var _Blockquote = _interopRequireDefault(require("../../components/Blockquote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormOne(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
    title: "Regular Blockquote"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.")), /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    id: "firstName",
    name: "firstName",
    helperText: "Enter your full first name",
    labelText: "First Name",
    inputRef: props.register
  }), /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    id: "lastName",
    name: "lastName",
    labelText: "Last Name",
    helperText: "Enter your last name",
    placeholder: "Placeholder text",
    inputRef: props.register
  }), /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    labelText: "Notes",
    name: "notes",
    inputRef: props.register
  }));
}

var _default = FormOne;
exports.default = _default;