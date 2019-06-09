/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

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

const props = {
  datePicker: () => ({
    datePicker: SingleDatePicker,
    labelText: text('Label text (labelText)', 'Text Input label'),
    placeholder: text('Placeholder text (placeholder)', 'Placeholder text'),
    disabled: boolean('Disabled (disabled)', false),
    hideLabel: boolean('No label (hideLabel)', false),
    invalid: boolean('Show form validation UI (invalid)', false),
    invalidText: text(
      'Form validation UI content (invalidText)',
      'A valid value is required'
    ),
    showDefaultInputIcon: boolean(
      'Show Input Icon (showDefaultInputIcon)',
      true
    ),
    showClearDates: boolean('Show clear date (showClearDates)', true),
    inputIconPosition: text('Icon Position(inputIconPosition)', 'after'),
    helperText: text('Helper text (helperText)', 'Optional helper text.'),
    onClick: action('onClick'),
    onChange: action('onChange'),
  }),
  dateRangePicker: () => ({
    datePicker: DateRangePicker,
    labelText: text('Label text (labelText)', 'Text Input label'),
    placeholder: text('Placeholder text (placeholder)', 'Placeholder text'),
    disabled: boolean('Disabled (disabled)', false),
    hideLabel: boolean('No label (hideLabel)', false),
    invalid: boolean('Show form validation UI (invalid)', false),
    showDefaultInputIcon: boolean(
      'Show Input Icon (showDefaultInputIcon)',
      true
    ),
    showClearDates: boolean('Show clear date (showClearDates)', true),
    inputIconPosition: text('Icon Position(showDefaultInputIcon)', 'after'),
    invalidText: text(
      'Form validation UI content (invalidText)',
      'A valid value is required'
    ),
    helperText: text('Helper text (helperText)', 'Optional helper text.'),
    onClick: action('onClick'),
    onChange: action('onChange'),
  }),

  datePickerField: () => ({
    component: ReduxFormWrapper,
    inputComponent: SingleDatePickerInput,
    datePicker: SingleDatePicker,
    name: text('The input name (name)', 'inputname'),
    helperText: text('Helper', 'inputname'),
    labelText: 'Select a date',
  }),
  dateRangePickerField: () => ({
    component: ReduxFormWrapper,
    inputComponent: DateRangePickerInput,
    datePicker: DateRangePicker,
    name: 'datepicker',
    labelText: 'Select a date range',
  }),
};

storiesOf('Components|DatePicker', module)
  .addDecorator(withKnobs)
  .add('SingleDatePicker (experimental)', () => (
    <SingleDatePickerInput {...props.datePicker()} />
  ))
  .add('DateRangePicker (experimental)', () => (
    <DateRangePickerInput {...props.dateRangePicker()} />
  ));

storiesOf('Components|DatePicker', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <Provider store={store}>
      <FormWrapper
        sampleData={{
          datepicker: {
            startDate: '2019-05-22T10:00:00.000Z',
            endDate: '2019-05-24T10:00:00.000Z',
          },
          inputname: '2019-05-23T12:00:00+02:00',
        }}>
        {' '}
        {story()}
      </FormWrapper>
    </Provider>
  ))
  .add('DatePicker Field (experimental)', () => (
    <Field
      {...props.datePickerField()}
      format={value => (value ? moment(value) : undefined)}
      normalize={data => data && data.value && data.value.format()}
    />
  ))
  .add('DateRangePicker Field (experimental)', () => (
    <Field {...props.dateRangePickerField()} />
  ));
