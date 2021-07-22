var _excluded = ["children", "className", "centered", "noPadding"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var ModuleBody = function ModuleBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      centered = _ref.centered,
      noPadding = _ref.noPadding,
      other = _objectWithoutProperties(_ref, _excluded);

  var wrapperClasses = classNames('wfp--module__content', className, {
    'wfp--module__content--centered': centered,
    'wfp--module__content--no-padding': noPadding
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

ModuleBody.propTypes = {
  /**
   * Specify the content of the `ModuleBody`
   */
  children: PropTypes.node,

  /**
   * Specify wheater the content should be centered.
   */
  centered: PropTypes.bool,

  /**
   * Specify wheater the body should have no padding.
   */
  noPadding: PropTypes.bool,

  /**
   * The CSS class name for the `ModuleBody`.
   */
  className: PropTypes.string
};
ModuleBody.defaultProps = {};
export default ModuleBody;