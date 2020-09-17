import React from 'react';

import { SingleDatePickerInput } from './SingleDatePickerInput';
import { DateRangePickerInput } from './DateRangePickerInput';
import store from '../../internal/configureStore';
import FormWrapper from '../../internal/RfFormWrapper';
import moment from 'moment';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';

import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import ReduxFormWrapper from '../ReduxFormWrapper';
import markdown from './README.mdx';

export default {
  title: 'Components/DatePicker',
  component: SingleDatePickerInput,
  markdown: 'hello',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const singleDatePicker = (args) => <SingleDatePickerInput {...args} />;
singleDatePicker.args = {
  datePicker: SingleDatePicker,
  date: moment(),
  labelText: 'Label text (labelText)',
  placeholder: 'Placeholder text (placeholder)',
  disabled: false,
  hideLabel: false,
  showClearDate: false,
  invalid: false,
  invalidText: 'A valid value is required',
  showDefaultInputIcon: true,
  inputIconPosition: 'after',
  helperText: 'Optional helper text.',
};

export const dateRangePicker = (args) => <DateRangePickerInput {...args} />;
dateRangePicker.args = {
  datePicker: DateRangePicker,
  date: moment(),
  labelText: 'Label text (labelText)',
  placeholder: 'Placeholder text (placeholder)',
  disabled: false,
  hideLabel: false,
  showClearDate: false,
  invalid: false,
  invalidText: 'A valid value is required',
  showDefaultInputIcon: true,
  inputIconPosition: 'after',
  helperText: 'Optional helper text.',
};

// export const datePickerField = (args) => (
//   <Field
//     format={(value) => (value ? moment(value) : undefined)}
//     normalize={(data) => data && data.value && data.value.format()}
//   />
// );
// datePickerField.args = {
//   component: ReduxFormWrapper,
//   inputComponent: SingleDatePickerInput,
//   datePicker: SingleDatePicker,
//   name: 'inputname',
//   helperText: 'inputname',
//   labelText: 'Select a date',
// };
