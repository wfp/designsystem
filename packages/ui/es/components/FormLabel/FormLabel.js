var _excluded = ["className", "children", "id"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** Form Label can be used whenever it is needed to show a label detached from a regular input. */

var FormLabel = function FormLabel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--label"), className);
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    className: classNames
  }, other), children);
};

FormLabel.propTypes = {
  /**
   * The content of the label
   */
  children: PropTypes.node,

  /**
   * Additional `class` attributes
   */
  className: PropTypes.string,

  /**
   * The ID of the related input which will be used as `htmlFor`
   */
  id: PropTypes.string
};
export default FormLabel;