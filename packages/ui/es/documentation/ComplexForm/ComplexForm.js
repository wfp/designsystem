function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';
import NumberInput from '../../components/NumberInput';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Blockquote from '../../components/Blockquote/Blockquote';

var ComplexForm = function ComplexForm() {
  var _useForm = useForm(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors,
      reset = _useForm.reset;

  var onSubmit = function onSubmit(values) {
    setOutput(values);
  };

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      output = _useState2[0],
      setOutput = _useState2[1];

  return /*#__PURE__*/React.createElement(Form, {
    longForm: true,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(TextInput, {
    labelText: "Email TextInput",
    name: "email",
    ref: register({
      required: 'Required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'invalid email address'
      }
    })
  }), errors.email && errors.email.message, /*#__PURE__*/React.createElement(TextInput, {
    labelText: "TextInput",
    name: "textinput",
    ref: register({
      validate: function validate(value) {
        return value !== 'admin' || 'Nice try!';
      }
    })
  }), /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: "numberinput",
    render: function render(props) {
      return /*#__PURE__*/React.createElement(NumberInput, _extends({}, props, {
        labelText: "Number input",
        name: "numberinput",
        step: "0.1"
      }));
    }
  }), /*#__PURE__*/React.createElement(Select, {
    name: "select",
    inputRef: register,
    labelText: "Select"
  }, /*#__PURE__*/React.createElement(SelectItem, {
    value: "",
    text: "not selected"
  }), /*#__PURE__*/React.createElement(SelectItem, {
    value: "daily",
    text: "daily"
  }), /*#__PURE__*/React.createElement(SelectItem, {
    value: "weekly",
    text: "weekly"
  }), /*#__PURE__*/React.createElement(SelectItem, {
    value: "monthly",
    text: "monthly"
  })), errors.username && errors.username.message, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Submit"), ' ', /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    kind: "secondary",
    onClick: function onClick() {
      return reset({
        numberinput: 3
      });
    }
  }, "Reset"), /*#__PURE__*/React.createElement(Blockquote, {
    title: "Output"
  }, JSON.stringify(output)));
};

export default ComplexForm;