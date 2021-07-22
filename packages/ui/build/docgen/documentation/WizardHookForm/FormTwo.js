"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputGroup = _interopRequireDefault(require("../../components/InputGroup"));

var _TextArea = _interopRequireDefault(require("../../components/TextArea"));

var _FormGroup = _interopRequireDefault(require("../../components/FormGroup"));

var _RadioButton = _interopRequireDefault(require("../../components/RadioButton/RadioButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormTwo(props) {
  return /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement(_InputGroup.default, {
    labelText: "Sex",
    name: "input-group",
    vertical: true
  }, /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    id: "female",
    labelText: "Female",
    name: "sex",
    value: "female",
    inputRef: props.register
  }), /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    id: "male",
    labelText: "Male",
    name: "sex",
    value: "male",
    inputRef: props.register
  })), /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement(_TextArea.default, {
    labelText: "Notes",
    name: "notes2",
    inputRef: props.register
  })));
}

var _default = FormTwo;
exports.default = _default;