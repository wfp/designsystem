"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["children", "hideLabel", "input", "label", "id", "isRequired"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(_ref) {
  var children = _ref.children,
      hideLabel = _ref.hideLabel,
      input = _ref.input,
      label = _ref.label,
      id = _ref.id,
      isRequired = _ref.isRequired,
      other = _objectWithoutProperties(_ref, _excluded);

  if (children !== false && label !== false) {
    var labelClasses = (0, _classnames.default)({
      'wfp--label': true,
      'wfp--visually-hidden': hideLabel,
      'label--required': isRequired
    });
    return /*#__PURE__*/_react.default.createElement("label", _extends({}, other, {
      className: labelClasses,
      htmlFor: id ? id : input ? input.name : ''
    }), children ? children : label);
  } else {
    return null;
  }
};

Label.propTypes = {
  children: _propTypes.default.node,
  isRequired: _propTypes.default.bool
};
var _default = Label;
exports.default = _default;