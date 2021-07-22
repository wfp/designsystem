import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Form, Field } from 'react-final-form';
import Select from '../Select';
import SelectItem from '../SelectItem';
import ReduxFormWrapper from '../ReduxFormWrapper';
import Button from '../Button';
import Blockquote from '../Blockquote';
import SelectSkeleton from '../Select/Select.Skeleton';

var onSubmit = function onSubmit() {};

storiesOf('Components|ReduxFormWrapper', module).addDecorator(withKnobs).add('Select (react-final-form)', function () {
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
        name: "firstName",
        component: ReduxFormWrapper,
        InputComponent: Select,
        type: "text",
        labelText: "Label",
        placeholder: "First Name"
      }, /*#__PURE__*/React.createElement(SelectItem, {
        value: "option-1",
        text: "Option 1"
      }), /*#__PURE__*/React.createElement(SelectItem, {
        value: "option-2",
        text: "Option 2"
      })), /*#__PURE__*/React.createElement("div", {
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
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '300px'
    }
  }, /*#__PURE__*/React.createElement(SelectSkeleton, null));
});