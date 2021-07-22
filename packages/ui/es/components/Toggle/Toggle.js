var _excluded = ["className", "defaultToggled", "toggled", "onChange", "onToggle", "id", "name", "labelA", "labelB"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
/** A toggle is used to quickly switch between two possible states. They are commonly used for “on/off” switches */

var Toggle = function Toggle(_ref) {
  var _classNames;

  var className = _ref.className,
      defaultToggled = _ref.defaultToggled,
      toggled = _ref.toggled,
      _onChange = _ref.onChange,
      onToggle = _ref.onToggle,
      id = _ref.id,
      name = _ref.name,
      labelA = _ref.labelA,
      labelB = _ref.labelB,
      other = _objectWithoutProperties(_ref, _excluded);

  var input;
  var wrapperClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames, className, className), _classNames));
  var checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  var htmlFor = id ? id : name;
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/React.createElement("input", _extends({}, other, checkedProps, {
    type: "checkbox",
    id: htmlFor,
    className: "".concat(prefix, "--toggle"),
    onChange: function onChange(evt) {
      _onChange && _onChange(evt);
      onToggle(input.checked, htmlFor, evt);
    },
    ref: function ref(el) {
      input = el;
    }
  })), /*#__PURE__*/React.createElement("label", {
    className: "".concat(prefix, "--toggle__label"),
    htmlFor: htmlFor
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "--toggle__text--left")
  }, labelA), /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "--toggle__appearance")
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "--toggle__text--right")
  }, labelB)));
};

Toggle.propTypes = {
  /**
   * Specify a custom className to apply to the form-item node
   */
  className: PropTypes.string,

  /**
   * Specify whether the toggle should be on by default
   */
  defaultToggled: PropTypes.bool,

  /**
   * Provide an optional hook that is called when the control is toggled
   */
  onToggle: PropTypes.func,

  /**
   * Provide an id that unique represents the underlying `input`
   */
  id: PropTypes.string,

  /**
   * Provide an name that unique represents the underlying `input`
   */
  name: PropTypes.string.isRequired,

  /**
   * Specify whether the control is toggled
   */
  toggled: PropTypes.bool,

  /**
   * Specify the label for the "off" position
   */
  labelA: PropTypes.string.isRequired,

  /**
   * Specify the label for the "on" position
   */
  labelB: PropTypes.string.isRequired
};
Toggle.defaultProps = {
  defaultToggled: false,
  labelA: 'Off',
  labelB: 'On',
  name: 'toggle',
  onToggle: function onToggle() {}
};
export default Toggle;