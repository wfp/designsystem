"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _Blockquote = _interopRequireDefault(require("../Blockquote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = _settings.default.prefix;

var FormError = function FormError(_ref) {
  var className = _ref.className,
      message = _ref.message,
      submitFailed = _ref.submitFailed;

  if (message && submitFailed === true) {
    return /*#__PURE__*/_react.default.createElement(_Blockquote.default, {
      className: className,
      warning: true,
      withIcon: false
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "".concat(prefix, "--form-error__title")
    }, message.generic), message.fields && /*#__PURE__*/_react.default.createElement("ul", {
      className: "".concat(prefix, "--form-error__list")
    }, message.fields.map(function (field, i) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: field.key
      }, field.message));
    })));
  } else {
    return null;
  }
};

FormError.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  info: _propTypes.default.string
};
var _default = FormError;
exports.default = _default;