var _excluded = ["startDate", "endDate", "controlled", "datePicker", "labelText", "className", "id", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "value", "startDateId", "startDatePlaceholderText", "endDateId", "endDatePlaceholderText", "name", "onBlur", "onDragStart", "onDrop", "onFocus"];

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
import React, { memo, useState } from 'react';
import { DateRangePickerInput } from './DateRangePickerInput';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
export default /*#__PURE__*/memo(function DateRangePickerInput(_ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate,
      controlled = _ref.controlled,
      datePicker = _ref.datePicker,
      labelText = _ref.labelText,
      className = _ref.className,
      id = _ref.id,
      placeholder = _ref.placeholder,
      type = _ref.type,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      value = _ref.value,
      startDateId = _ref.startDateId,
      startDatePlaceholderText = _ref.startDatePlaceholderText,
      endDateId = _ref.endDateId,
      endDatePlaceholderText = _ref.endDatePlaceholderText,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onDragStart = _ref.onDragStart,
      onDrop = _ref.onDrop,
      onFocus = _ref.onFocus,
      other = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      focusedInput = _useState2[0],
      setfocusedInput = _useState2[1];

  var _useState3 = useState(startDate ? startDate : null),
      _useState4 = _slicedToArray(_useState3, 2),
      stateStartDate = _useState4[0],
      setstartDate = _useState4[1];

  var _useState5 = useState(endDate ? endDate : null),
      _useState6 = _slicedToArray(_useState5, 2),
      stateEndDate = _useState6[0],
      setendDate = _useState6[1];

  var handleFocusChange = function handleFocusChange(focusedInput) {
    if (!focusedInput && typeof onBlur === 'function') {
      onBlur();
    }

    setfocusedInput(focusedInput);
  }; // const { focusedInput, startDate, endDate } = this.state;


  var DateRangePicker = datePicker;
  var labelClasses = classNames("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
  var label = labelText ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var errorMessage = invalid ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--form-requirement invalid")
  }, invalidText) : null;
  var helper = helperText ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--form__helper-text")
  }, helperText) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, helper, /*#__PURE__*/React.createElement(DateRangePicker, _extends({
    endDateId: endDateId,
    endDate: onChange && value ? value.endDate : stateEndDate,
    endDatePlaceholderText: endDatePlaceholderText,
    focusedInput: focusedInput,
    hideKeyboardShortcutsPanel: true,
    onDatesChange: function onDatesChange(_ref2) {
      var startDate = _ref2.startDate,
          endDate = _ref2.endDate;

      if (onChange) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });
      }

      setstartDate(startDate);
      setendDate(endDate);
    },
    onFocusChange: handleFocusChange,
    startDateId: startDateId,
    startDate: onChange && value ? value.startDate : stateStartDate,
    startDatePlaceholderText: startDatePlaceholderText
  }, other)), errorMessage);
});
DateRangePickerInput.defaultProps = {
  startDateId: 'startDate',
  endDateId: 'endDate',
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date'
};
DateRangePickerInput.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: PropTypes.func.isRequired,

  /**
   * Provide the placeholder for the start input
   */
  startDatePlaceholderText: PropTypes.string,

  /**
   * Provide the placeholder for the end input
   */
  endDatePlaceholderText: PropTypes.string
}; // export default DateRangePickerInput;