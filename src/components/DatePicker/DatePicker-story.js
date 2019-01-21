/* eslint-disable no-console */

import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, text } from '@storybook/addon-knobs';
import readme from './README.md';

import store from '../../internal/configureStore';
import FormWrapper from '../../internal/RfFormWrapper';
import moment from 'moment';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';

import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';

export const DatePickerField = ({
  labelText,
  meta: { active, error, touched },
  name,
  input: { value, onFocus, onBlur, onChange },
}) => (
  <div>
    <label htmlFor={name} className="wfp--label">
      {labelText}
    </label>
    <SingleDatePicker
      id={name}
      date={value}
      focused={active}
      hideKeyboardShortcutsPanel
      onDateChange={value => onChange({ value })}
      onFocusChange={({ focused }) => (focused ? onFocus(true) : onBlur(true))}
    />
    {error && touched && <span>{error}</span>}
  </div>
);

class DateRangePickerField extends PureComponent {
  state = { focusedInput: null };
  handleFocusChange = focusedInput => this.setState({ focusedInput });

  render() {
    const {
      labelText,
      meta: { error, touched },
      name,
      input: { value: { startDate = null, endDate = null }, onChange },
    } = this.props;
    const { focusedInput = null } = this.state;

    return (
      <div>
        <label htmlFor={name} className="wfp--label">
          {labelText}
        </label>
        <DateRangePicker
          endDateId="endDate"
          endDate={endDate}
          endDatePlaceholderText="End Date"
          focusedInput={focusedInput}
          hideKeyboardShortcutsPanel
          id={name}
          onDatesChange={onChange}
          onFocusChange={this.handleFocusChange}
          startDateId="startDate"
          startDate={startDate}
          startDatePlaceholderText="Start Date"
        />
        {error && touched && <span>{error}</span>}
      </div>
    );
  }
}

const props = {
  datePicker: () => ({
    component: DatePickerField,
    name: text('The input name (name)', 'inputname'),
    labelText: 'Select a date',
    onClick: (handler => evt => {
      evt.preventDefault(); // Prevent link from being followed for demo purpose
      handler(evt);
    })(action('onClick')),
  }),
  dateRangePicker: () => ({
    component: DateRangePickerField,
    name: 'datepicker',
    labelText: 'Select a date range',
    onClick: (handler => evt => {
      evt.preventDefault(); // Prevent link from being followed for demo purpose
      handler(evt);
    })(action('onClick')),
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
