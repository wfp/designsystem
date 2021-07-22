function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import FormGroup from '../FormGroup';
import TextInput from '../TextInput';
var fieldsetCheckboxProps = {
  className: 'some-class',
  legendText: 'FormGroup heading'
};
var TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text'
};
storiesOf('Components|FormGroup', module).add('Default', function () {
  return /*#__PURE__*/React.createElement(FormGroup, _extends({}, fieldsetCheckboxProps, {
    className: "wfp--form-long"
  }), /*#__PURE__*/React.createElement(TextInput, TextInputProps), /*#__PURE__*/React.createElement(TextInput, TextInputProps), /*#__PURE__*/React.createElement(TextInput, TextInputProps));
});