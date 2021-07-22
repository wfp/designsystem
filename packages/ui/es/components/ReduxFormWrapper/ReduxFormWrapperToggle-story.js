import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Form, Field } from 'react-final-form';
import Toggle from '../Toggle';
import ReduxFormWrapper from '../ReduxFormWrapper';
import Button from '../Button';
import Blockquote from '../Blockquote';

var onSubmit = function onSubmit() {};

storiesOf('Components|ReduxFormWrapper', module).addDecorator(withKnobs).add('Toggle (react-final-form)', function () {
  return /*#__PURE__*/React.createElement(Form, {
    onSubmit: onSubmit,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit,
          form = _ref.form,
          submitting = _ref.submitting,
          pristine = _ref.pristine,
          values = _ref.values;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit,
        className: "wfp--form-long"
      }, /*#__PURE__*/React.createElement(Field, {
        component: ReduxFormWrapper,
        InputComponent: Toggle,
        id: "radio-1",
        name: "mode",
        value: "select 1",
        labelText: "select 1"
      }), /*#__PURE__*/React.createElement("div", {
        className: "buttons"
      }, /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        disabled: submitting || pristine
      }, "Submit"), ' ', /*#__PURE__*/React.createElement(Button, {
        type: "button",
        onClick: form.reset,
        disabled: submitting || pristine
      }, "Reset")), /*#__PURE__*/React.createElement(Blockquote, {
        code: true
      }, JSON.stringify(values, 0, 2)));
    }
  });
});