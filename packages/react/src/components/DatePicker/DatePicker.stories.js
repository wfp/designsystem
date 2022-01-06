import React, { useState } from 'react';

import { SingleDatePickerInput } from './SingleDatePickerInput';
import { DateRangePickerInput } from './DateRangePickerInput';
import Input from '../Input';
import moment from 'moment';
import { Controller, useForm } from 'react-hook-form';

import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import markdown from './README.mdx';

export default {
  title: 'Components/UI Elements/DatePicker',
  component: SingleDatePickerInput,
  markdown: 'hello',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const SingleDatePickerDefault = (args) => (
  <SingleDatePickerInput {...args} />
);
SingleDatePickerDefault.args = {
  datePicker: SingleDatePicker,
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

const singleSourceCode = `
import 'react-dates/initialize';
import { SingleDatePickerInput } from "@un/react";
import { SingleDatePicker } from 'react-dates';

<SingleDatePickerInput
  datePicker={SingleDatePicker}
  helperText="Optional helper text."
  inputIconPosition="after"
  invalidText="A valid value is required"
  labelText="Label datepicker"
  onBlur={()=>{}}
  onChange={()=>{}}
  onFocus={()=>{}}
  placeholder="Placeholder text (placeholder)"
  showDefaultInputIcon

/>
`;

SingleDatePickerDefault.story = {
  parameters: {
    docs: {
      source: {
        code: singleSourceCode,
      },
    },
  },
};



export const SingleDatePickerNew = (args) => {
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  return (
    <Input
      labelText="Input using SingleDatePicker by Airbnb"
      helperText="HelperText">
      {(e) => (
        <SingleDatePicker
          showDefaultInputIcon={true}
          inputIconPosition="after"
          onDateChange={(newDate) => setDate(newDate)}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused)}
          date={date}
          id="your_unique_id"
        />
      )}
    </Input>
  );
};

export const DatePickerHookForm = (args) => {
  const { control, watch } = useForm();
  const input = watch('test');

  return (
    <>
      {JSON.stringify(input)}
      <Controller
        control={control}
        name="test"
        render={({ field, fieldState, formState }) => (
          <SingleDatePickerInput
            {...field}
            {...fieldState}
            datePicker={SingleDatePicker}
            helperText="Optional helper text."
            inputIconPosition="after"
            invalidText="A valid value is required"
            labelText="Label datepicker"
            placeholder="Placeholder text (placeholder)"
            showDefaultInputIcon
          />
        )}
      />
    </>
  );
};



/*
export const SingleDatePickerNewReactHookForm = (args) => {
  const defaultValues = { test: '2020-12-01T11:00:00.000Z' };
  const [focused, setFocused] = useState(false);
  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="test"
        render={({ onChange, onBlur, value, name, ref }) => {
          console.log('onChnage checker', typeof onChange);
          return(
         
          <Input
            labelText="Input using SingleDatePicker by Airbnb"
            helperText="HelperText">
            {(e) => (
              <SingleDatePicker
                onDateChange={(newDate) => onChange(newDate)}
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                date={moment(value)}
                id="another_unique_id"
                showDefaultInputIcon={true}
                inputIconPosition="after"
              />
            )}
          </Input>
        )}}
      />
    </form>
  );
};
*/

export const DateRangePickerDefault = (args) => (
  <DateRangePickerInput {...args} />
);
DateRangePickerDefault.args = {
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
const dateRangeSourceCode = `
import 'react-dates/initialize';
import { DateRangePickerInput } from "@un/react";
import { DateRangePicker } from 'react-dates';

<DateRangePickerInput
  datePicker={DateRangePicker}
  helperText="Optional helper text."
  inputIconPosition="after"
  invalidText="A valid value is required"
  labelText="Label datepicker"
  onBlur={()=>{}}
  onChange={()=>{}}
  onFocus={()=>{}}
  placeholder="Placeholder text (placeholder)"
  showDefaultInputIcon

/>
`;

DateRangePickerDefault.story = {
  parameters: {
    docs: {
      source: {
        code: dateRangeSourceCode,
      },
    },
  },
};


export const DatePickerRangeHookForm = (args) => {
  const { control, watch } = useForm();
  const datePickerRange = watch('datePickerRange');
  return (
    <>
      {JSON.stringify(datePickerRange)}
      <Controller
        control={control}
        name="datePickerRange"
        render={({ field, fieldState, formState }) => (
          <DateRangePickerInput
            {...fieldState}
            {...field}
            datePicker={DateRangePicker}
            helperText="Optional helper text."
            inputIconPosition="after"
            invalidText="A valid value is required"
            labelText="Label datepicker"
            placeholder="Placeholder text (placeholder)"
            showDefaultInputIcon
          />
        )}
      />
    </>
  );
};



// singleDatePickerHookForm.args = {
//   datePicker: SingleDatePicker,
//   date: moment(),
//   labelText: 'Label text (labelText)',
//   placeholder: 'Placeholder text (placeholder)',
//   disabled: false,
//   hideLabel: false,
//   showClearDate: false,
//   invalid: false,
//   invalidText: 'A valid value is required',
//   showDefaultInputIcon: true,
//   inputIconPosition: 'after',
//   helperText: 'Optional helper text.',
// };

// export const datePickerField = (args) => (
//   <Field
//     {...args}
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

// datePickerField.decorators = [
//   (Story) => (
//     <Provider store={store}>
//       <FormWrapper
//         sampleData={{
//           datepicker: {
//             startDate: moment(),
//             endDate: moment().add(15, 'days'),
//           },
//           inputname: moment(),
//         }}>
//         <Story />
//       </FormWrapper>
//     </Provider>
//   ),
// ];

// export const DateRangePickerField = (args) => (
//   <Field
//     {...args}
//     format={(value) =>
//       value
//         ? {
//             startDate: moment(value.startDate),
//             endDate: moment(value.endDate),
//           }
//         : undefined
//     }
//   />
// );
// DateRangePickerField.args = {
//   component: ReduxFormWrapper,
//   inputComponent: DateRangePickerInput,
//   datePicker: DateRangePicker,
//   name: 'datepicker',
//   labelText: 'Select a date range',
// };

// DateRangePickerField.decorators = [
//   (Story) => (
//     <Provider store={store}>
//       <FormWrapper
//         sampleData={{
//           datepicker: {
//             startDate: moment(),
//             endDate: moment().add(15, 'days'),
//           },
//           inputname: moment(),
//         }}>
//         <Story />
//       </FormWrapper>
//     </Provider>
//   ),
// ];
