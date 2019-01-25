/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text } from '@storybook/addon-knobs';
import readme from './README.md';

import { SingleDatePickerField } from './SingleDatePickerField';
import { DateRangePickerField } from './DateRangePickerField';
import store from '../../internal/configureStore';
import FormWrapper from '../../internal/RfFormWrapper';
import moment from 'moment';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';

import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';

const props = {
  datePicker: () => ({
    component: SingleDatePickerField,
    datePicker: SingleDatePicker,
    name: text('The input name (name)', 'inputname'),
    labelText: 'Select a date',
  }),
  dateRangePicker: () => ({
    component: DateRangePickerField,
    datePicker: DateRangePicker,
    name: 'datepicker',
    labelText: 'Select a date range',
  }),
};

storiesOf('DatePicker', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper>{story()}</FormWrapper>
    </Provider>
  ))
  .add(
    'DatePicker (draft)',
    () => (
      <Field
        {...props.datePicker()}
        format={value => (value ? moment(value) : undefined)}
        normalize={data => data && data.value && data.value.format()}
      />
    ),
    {
      info: {
        text: readme,
      },
    }
  )
  .add(
    'DateRangePicker (draft)',
    () => <Field {...props.dateRangePicker()} />,
    {
      info: {
        text: readme,
      },
    }
  );
