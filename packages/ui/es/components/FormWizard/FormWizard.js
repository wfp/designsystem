function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Module, ModuleBody, ModuleHeader, ModuleFooter } from '../Module';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** The FormWizard is a wrapper for creating Wizard forms. */

var FormWizard = function FormWizard(_ref) {
  var className = _ref.className,
      children = _ref.children,
      formHeader = _ref.formHeader,
      formControls = _ref.formControls,
      sidebar = _ref.sidebar,
      stickySidebar = _ref.stickySidebar;
  var classes = {
    formControls: classNames("".concat(prefix, "--form-wizard"), _defineProperty({}, "".concat(prefix, "--form-wizard--sticky"), stickySidebar), className)
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes.formControls
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--form-wizard__sidebar")
  }, sidebar), /*#__PURE__*/React.createElement(Module, {
    className: "".concat(prefix, "--form-wizard__content"),
    noMargin: true
  }, formHeader && /*#__PURE__*/React.createElement(ModuleHeader, null, formHeader), /*#__PURE__*/React.createElement(ModuleBody, null, children), formControls && /*#__PURE__*/React.createElement(ModuleFooter, null, formControls)));
};

FormWizard.propTypes = {
  /**
   * Specify a custom css class
   * which is added to the container
   */
  className: PropTypes.string,

  /**
   * Specify the custom
   * main content component
   */
  children: PropTypes.node.isRequired,

  /**
   * Specify the custom
   * sidebar component
   */
  sidebar: PropTypes.node.isRequired,

  /**
   * Sticky sidebar
   */
  stickySidebar: PropTypes.bool
};
FormWizard.defaultProps = {};
export default FormWizard;