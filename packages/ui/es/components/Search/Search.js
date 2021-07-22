var _excluded = ["className", "closeButtonLabelText", "disabled", "formItemClassName", "id", "hideLabel", "hideControls", "labelText", "kind", "onChange", "onClick", "onSearchIconClick", "helperText", "light", "inputRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Input from '../Input';
import Icon from '../Icon';
import { iconSearch, iconCloseGlyph } from '@wfp/icons';
var prefix = settings.prefix;
/** Search enables users to specify a word or a phrase to find relevant pieces of content without the use of navigation. */

function Search(props) {
  var _classNames;

  var className = props.className,
      closeButtonLabelText = props.closeButtonLabelText,
      disabled = props.disabled,
      formItemClassName = props.formItemClassName,
      id = props.id,
      hideLabel = props.hideLabel,
      hideControls = props.hideControls,
      labelText = props.labelText,
      _props$kind = props.kind,
      kind = _props$kind === void 0 ? 'large' : _props$kind,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      _props$onSearchIconCl = props.onSearchIconClick,
      onSearchIconClick = _props$onSearchIconCl === void 0 ? function () {} : _props$onSearchIconCl,
      helperText = props.helperText,
      light = props.light,
      inputRef = props.inputRef,
      other = _objectWithoutProperties(props, _excluded);

  var initialValue = props.value;

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useEffect(function () {
    setValue(props.value);
  }, [props.value]);
  var newInputRef = useRef(null);

  var _inputRef = inputRef ? inputRef : newInputRef;

  var handleChange = function handleChange(evt) {
    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      setValue(evt.target.value);
      onChange(evt.target.value, evt);
    }
  };

  var clearSearch = function clearSearch() {
    var valueState = '';
    setValue(valueState);
    onChange(valueState);
  };

  var numberInputClasses = classNames("".concat(prefix, "--number"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--number--light"), light), _defineProperty(_classNames, "".concat(prefix, "--number--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix, "--number--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--number--nocontrols"), hideControls), _defineProperty(_classNames, 'wfp--search', true), _defineProperty(_classNames, 'wfp--search--lg', kind === 'large'), _defineProperty(_classNames, 'wfp--search--sm', kind === 'small'), _defineProperty(_classNames, 'wfp--search--main', kind === 'main'), _defineProperty(_classNames, 'wfp--search--banner', kind === 'banner'), _defineProperty(_classNames, 'wfp--search--light', kind === 'light'), _classNames));
  var newProps = {
    disabled: disabled,
    id: id,
    onChange: handleChange,
    value: value
  };
  var clearClasses = classNames({
    'wfp--search-close': true,
    'wfp--search-close--hidden': !value
  });
  return /*#__PURE__*/React.createElement(Input, _extends({}, props, {
    formItemClassName: numberInputClasses,
    inputWrapperClassName: "".concat(prefix, "--search-input__wrapper")
  }), function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      icon: iconSearch,
      description: labelText,
      className: "".concat(prefix, "--search-magnifier"),
      onClick: onSearchIconClick
    }), /*#__PURE__*/React.createElement("input", _extends({
      className: "wfp--search-input",
      type: "text"
    }, other, newProps, {
      ref: _inputRef
    })), /*#__PURE__*/React.createElement("button", {
      className: clearClasses,
      onClick: clearSearch,
      type: "button",
      "aria-label": closeButtonLabelText
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: iconCloseGlyph,
      description: closeButtonLabelText
    })));
  });
}

Search.propTypes = {
  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: PropTypes.string,

  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes.string.isRequired,

  /**
   * The new value is available first arg 'searchValue' and evt object if needed is on second arg.
   * i.e.
   * const handleChange = (searchValue, evt) => {
   * console.log("searchValue", searchValue); // a string
   * console.log("evt", evt); // the whole event object
   * }
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes.func
};
Search.defaultProps = {
  disabled: false
};
export default Search;