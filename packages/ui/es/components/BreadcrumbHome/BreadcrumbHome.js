var _excluded = ["className", "hometext"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { Home16 } from '@wfp/icons-react';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var BreadcrumbHome = function BreadcrumbHome(_ref) {
  var className = _ref.className,
      hometext = _ref.hometext,
      other = _objectWithoutProperties(_ref, _excluded);

  var classNames = classnames("".concat(prefix, "--breadcrumb-home"), className);
  return /*#__PURE__*/React.createElement(Home16 //icon={iconHome}
  , _extends({
    fill: "#0b77c2",
    width: "14",
    height: "14",
    description: hometext,
    className: classNames
  }, other));
};

BreadcrumbHome.propTypes = {
  /**
   * Specify an optional className to be added to the `Home` Icon
   */
  className: PropTypes.string,

  /**
   * Specify an optional text for the `Home` Icon
   */
  hometext: PropTypes.string
};
export default BreadcrumbHome;