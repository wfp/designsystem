var _excluded = ["value", "secondaryValue", "className", "href", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Modified from https://github.com/IBM/carbon-components-react/
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** Value are typically used to show KPI values and additional information. */

var Value = function Value(_ref) {
  var value = _ref.value,
      secondaryValue = _ref.secondaryValue,
      className = _ref.className,
      href = _ref.href,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--value"), className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, other), /*#__PURE__*/React.createElement("h4", {
    className: "".concat(prefix, "--value__title")
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--value__primary-value")
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--value__secondary-value")
  }, secondaryValue));
};

Value.propTypes = {
  /**
   * Provide the content for the primary Value
   */
  value: PropTypes.node,

  /**
   * Provide the content for the secondary Value
   */
  secondaryValue: PropTypes.node,

  /**
   * Provide the content for the title
   */
  title: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string
};
export default Value;