var _excluded = ["className", "children", "description", "icon"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { iconInfoSolid } from '@wfp/icons';
import Icon from '../Icon';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Tooltip from '../Tooltip/Tooltip';
var prefix = settings.prefix;
/** FormHint allows you to add a longer explanation to an input element. */

var FormHint = function FormHint(_ref) {
  var className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      icon = _ref.icon,
      other = _objectWithoutProperties(_ref, _excluded);

  var formHintClasses = classNames("".concat(prefix, "--form-hint"), className);
  return /*#__PURE__*/React.createElement(Tooltip, {
    content: children
  }, /*#__PURE__*/React.createElement("div", {
    className: formHintClasses
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: iconInfoSolid,
    width: "15",
    height: "15",
    description: children
  })));
};

FormHint.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * The tooltips content can be a string or an component
   */
  children: PropTypes.node,

  /**
   * Specify a custom icon for the hint
   */
  icon: PropTypes.object
};
FormHint.defaultProps = {
  icon: iconInfoSolid
};
export default FormHint;