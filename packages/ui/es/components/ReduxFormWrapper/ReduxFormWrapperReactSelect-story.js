function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import store from '../../internal/configureStore';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import FormWrapper from '../../internal/RfFormWrapper';
import ReduxFormWrapper from '../ReduxFormWrapper';
import ReactSelect from 'react-select';
var options = [{
  value: 'chocolate',
  label: 'Chocolate'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];
storiesOf('Components|ReduxFormWrapper', module).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(FormWrapper, null, story()));
}).add('react-select', function () {
  var ReactSelectHelper = function ReactSelectHelper(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "wfp--form-item"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: props.id,
      className: "wfp--label"
    }, props.labelText), props.helperText && /*#__PURE__*/React.createElement("div", {
      className: "wfp--form__helper-text"
    }, props.helperText), /*#__PURE__*/React.createElement(ReactSelect, _extends({}, props, {
      className: "wfp--react-select-container",
      classNamePrefix: "wfp--react-select"
    })));
  };

  return /*#__PURE__*/React.createElement(Field, {
    component: ReduxFormWrapper,
    InputComponent: ReactSelectHelper,
    helperText: "This is a helper text",
    labelText: "The label",
    options: options
  });
});