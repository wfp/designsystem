"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RfFormItem = function RfFormItem(props) {
  var showInvalid = props.meta && (props.meta.touched && props.meta.error || props.meta.submitFailed === true && props.meta.error);
  /*const inputClasses = classNames({
  	'required': props.isRequired,
  	'disabled': props.disabled,
  	'field--read-only': props.readOnly,
  	'wfp-form--group' : props.wrapper === true,
      'wfp--form-item--invalid' : showInvalid,
      [`wfp-form--group--${props.labelPosition}`]: props.labelPosition,
  	[`${props.className}`]: props.className,
  }); 
  */

  var inputClasses = (0, _classnames.default)({
    'wfp--form-item': true,
    disabled: props.disabled
  });
  if (showInvalid) return /*#__PURE__*/_react.default.createElement("div", {
    className: inputClasses
  }, props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--form-requirement"
  }, props.meta.error));else return /*#__PURE__*/_react.default.createElement("div", {
    className: inputClasses
  }, props.children);
};

RfFormItem.propTypes = {
  meta: _propTypes.default.object,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  required: _propTypes.default.bool
};
var _default = RfFormItem;
exports.default = _default;