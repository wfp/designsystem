var _excluded = ["children", "className", "colon", "kind", "small"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** List component show a number of connected items written consecutively, typically one below the other. */

export var List = function List(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      colon = _ref.colon,
      kind = _ref.kind,
      small = _ref.small,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--list"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--list--").concat(kind), kind), _defineProperty(_classnames, "".concat(prefix, "--list--small"), small), _defineProperty(_classnames, "".concat(prefix, "--list--colon"), colon), _classnames));
  return /*#__PURE__*/React.createElement(React.Fragment, null, kind == "ordered" ? /*#__PURE__*/React.createElement("ol", _extends({
    className: classNames
  }, other), children) : /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames
  }, other), children));
};
List.propTypes = {
  /**
   * Provide multiple `ListItem` components
   */
  children: PropTypes.node,

  /**
   * Specify a custom className
   */
  className: PropTypes.string,

  /**
   * Specify if colons should be used
   */
  colon: PropTypes.bool,

  /**
   * Specify a kind.
   */
  kind: PropTypes.oneOf(['unstyled', 'simple-inline', 'details', 'unordered', 'ordered', 'tooltip']),

  /**
   * Specify if the List should be small
   */
  small: PropTypes.bool
};
List.defaultProps = {
  kind: 'unstyled',
  colon: false,
  small: false
};
export default List;