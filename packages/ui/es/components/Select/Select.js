var _excluded = ["className", "id", "inline", "labelText", "disabled", "children", "iconDescription", "hideLabel", "small", "invalid", "invalidText", "helperText", "light", "name", "inputRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Modified for WFP 2019 (forked from Carbon Components Copyright IBM Corp. 2016, 2018)
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { iconCaretDown } from '@wfp/icons';
import Icon from '../Icon';
import settings from '../../globals/js/settings';
import Input from '../Input';
var prefix = settings.prefix;
/** The select component allows users to choose one option from a list. It is used in forms for users to submit data. */

var Select = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      id = props.id,
      inline = props.inline,
      labelText = props.labelText,
      disabled = props.disabled,
      children = props.children,
      iconDescription = props.iconDescription,
      hideLabel = props.hideLabel,
      small = props.small,
      invalid = props.invalid,
      invalidText = props.invalidText,
      helperText = props.helperText,
      light = props.light,
      name = props.name,
      _props$inputRef = props.inputRef,
      inputRef = _props$inputRef === void 0 ? ref : _props$inputRef,
      other = _objectWithoutProperties(props, _excluded);

  var usedId = id ? id : name;
  var selectClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--select"), true), _defineProperty(_classNames, "".concat(prefix, "--select--inline"), inline), _defineProperty(_classNames, "".concat(prefix, "--select--small"), small), _defineProperty(_classNames, "".concat(prefix, "--select--light"), light), _defineProperty(_classNames, "".concat(prefix, "--select--invalid"), invalid), _defineProperty(_classNames, "".concat(prefix, "--select--disabled"), disabled), _defineProperty(_classNames, className, className), _classNames));
  var ariaProps = {};

  if (invalid) {
    //TODO: check if correct
    ariaProps['aria-describedby'] = usedId;
  }

  var input = function () {
    return /*#__PURE__*/React.createElement("div", {
      className: selectClasses
    }, /*#__PURE__*/React.createElement("select", _extends({}, other, ariaProps, {
      id: usedId,
      name: name,
      className: "".concat(prefix, "--select-input"),
      disabled: disabled || undefined,
      "data-invalid": invalid || undefined,
      "aria-invalid": invalid || undefined,
      ref: inputRef
    }), children), /*#__PURE__*/React.createElement(Icon, {
      icon: iconCaretDown,
      className: "".concat(prefix, "--select__arrow"),
      description: iconDescription
    }));
  }();

  return /*#__PURE__*/React.createElement(Input, props, function () {
    return input;
  });
});
Select.propTypes = {
  /**
   * Provide the contents of your Select
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the node containing the label and the select box
   */
  className: PropTypes.string,

  /**
   * Specify a custom `id` for the `<select>`
   */
  id: PropTypes.string,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: PropTypes.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes.node,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `<input>` changes
   */
  onChange: PropTypes.func,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Optionally provide the default value of the `<select>`
   */
  defaultValue: PropTypes.any,

  /**
   * Provide a description for the twistie icon that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool,

  /**
   * Specify whether you want the small version of this control
   */
  small: PropTypes.bool
};
Select.defaultProps = {
  disabled: false,
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
export default Select;