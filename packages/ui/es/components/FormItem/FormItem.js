var _excluded = ["className", "children", "invalid", "inline"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var FormItem = function FormItem(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      invalid = _ref.invalid,
      inline = _ref.inline,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--form-item"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--form-item--inline"), inline), _defineProperty(_classnames, "".concat(prefix, "--form-item--invalid"), invalid), _classnames), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, other), children);
};

FormItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export default FormItem;