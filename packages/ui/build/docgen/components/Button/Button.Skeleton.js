"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ButtonSkeleton = function ButtonSkeleton(_ref) {
  var small = _ref.small,
      href = _ref.href;
  var buttonClasses = (0, _classnames.default)({
    'wfp--skeleton': true,
    'wfp--btn': true,
    'wfp--btn--sm': small
  });
  var commonProps = {
    className: buttonClasses
  };

  var button = /*#__PURE__*/_react.default.createElement("button", _extends({}, commonProps, {
    type: "button"
  }));

  var anchor = /*#__PURE__*/_react.default.createElement("a", _extends({}, commonProps, {
    href: href,
    role: "button"
  })); // eslint-disable-line


  return href ? anchor : button;
};

ButtonSkeleton.propTypes = {
  small: _propTypes.default.bool,
  href: _propTypes.default.string
};
ButtonSkeleton.defaultProps = {
  small: false
};
var _default = ButtonSkeleton;
exports.default = _default;