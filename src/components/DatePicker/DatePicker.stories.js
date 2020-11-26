import React, { useState } from 'react';


import { SingleDatePickerInput } from './SingleDatePickerInput';
import { DateRangePickerInput } from './DateRangePickerInput';
import Input from '../Input';
import store from '../../internal/configureStore';
import FormWrapper from '../../internal/RfFormWrapper';
import moment from 'moment';
import { Provider } from 'react-redux';
import { Field } from 'redux-form';
import { Controller, useForm } from 'react-hook-form';

import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import ReduxFormWrapper from '../ReduxFormWrapper';
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

export const singleDatePickerNew = (args) => {
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  return (
    <Input
      labelText="Input using SingleDatePicker by Airbnb"
      helperText="HelperText">
      {(e) => (
        <SingleDatePicker
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

export const singleDatePickerNewReactHookForm = (args) => {
  const defaultValues = { test: '2020-12-01T11:00:00.000Z' };
  const [focused, setFocused] = useState(false);
  const { control, register, handleSubmit } = useForm({ defaultValues });

  // const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="test"
        render={({ onChange, onBlur, value, name, ref }) => (
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
              />
            )}
          </Input>
        )}
      />
    </form>
  );
};

export const singleDatePicker = (args) => <SingleDatePickerInput {...args} />;
singleDatePicker.args = {
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
import { SingleDatePickerInput } from "@wfp/ui";
import { SingleDatePicker } from 'react-dates';

<SingleDatePickerInput
  datePicker={SingleDatePicker}
  helperText="Optional helper text."
  inputIconPosition="after"
  invalidText="A valid value is required"
  labelText="Label datepicker"
  onBlur={()=>{console.log("Blur")}}
  onChange={()=>{console.log("onChange")}}
  onFocus={()=>{console.log("onFocus")}}
  placeholder="Placeholder text (placeholder)"
  showDefaultInputIcon

/>
`

singleDatePicker.story = {
  parameters: {
    docs: {
      source: {
        code: singleSourceCode
      }
    }
  }
}

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
const dateRangeSourceCode = `
import 'react-dates/initialize';
import { DateRangePickerInput } from "@wfp/ui";
import { DateRangePicker } from 'react-dates';

<DateRangePickerInput
  datePicker={DateRangePicker}
  helperText="Optional helper text."
  inputIconPosition="after"
  invalidText="A valid value is required"
  labelText="Label datepicker"
  onBlur={()=>{console.log("Blur")}}
  onChange={()=>{console.log("onChange")}}
  onFocus={()=>{console.log("onFocus")}}
  placeholder="Placeholder text (placeholder)"
  showDefaultInputIcon

/>
`

dateRangePicker.story = {
  parameters: {
    docs: {
      source: {
        code: dateRangeSourceCode
      }
    }
  }
}

// export const singleDatePickerNewReactHookForm = (args) => {
//   const defaultValues = { test: '2020-12-01T11:00:00.000Z' };
//   const [focused, setFocused] = useState(false);
//   const { control, register, handleSubmit } = useForm({ defaultValues });
//   const onSubmit = (data) => alert(JSON.stringify(data));
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         control={control}
//         name="test"
//         render={({ onChange, onBlur, value, name, ref }) => (
//           <Input
//             labelText="Input using SingleDatePicker by Airbnb"
//             helperText="HelperText">
//             {(e) => (
//               <SingleDatePicker
//                 onDateChange={(newDate) => onChange(newDate)}
//                 focused={focused}
//                 onFocusChange={({ focused }) => setFocused(focused)}
//                 showDefaultInputIcon
//                 inputIconPosition='after'
//                 date={moment(value)}
//                 id="another_unique_id"
//               />
//             )}
//           </Input>
//         )}
//       />
//       <input type="submit" />
//     </form>
//   );
// };

export const DatePickerHookForm = (args) => {
  const {  control } = useForm();
  return(
  <div>
    <Controller
      as={
        <SingleDatePickerInput
          datePicker={SingleDatePicker}
          helperText="Optional helper text."
          inputIconPosition="after"
          invalidText="A valid value is required"
          labelText="Label datepicker"
          onBlur={()=>{console.log("Blur")}}
          onFocus={()=>{console.log("onFocus")}}
          placeholder="Placeholder text (placeholder)"
          showDefaultInputIcon
        />
      }
      control={control}
      valueName="selected" // DateSelect value's name is selected
      onChange={([selected]) =>  selected }
      name="SingleDatePicker"
      className="input"
      placeholderText="Select date"
    />
  </div>
)
};

export const DatePickerRangeHookForm = (args) => {
  const { control } = useForm();
  return(
  <div>
    <Controller
      as={
        <DateRangePickerInput
          datePicker={DateRangePicker}
          helperText="Optional helper text."
          inputIconPosition="after"
          invalidText="A valid value is required"
          labelText="Label datepicker"
          onBlur={()=>{console.log("Blur")}}
          onChange={()=>{console.log("onChange")}}
          onFocus={()=>{console.log("onFocus")}}
          placeholder="Placeholder text (placeholder)"
          showDefaultInputIcon

        />
      }
      control={control}
      valueName="selected" // DateSelect value's name is selected
      onChange={([selected]) => selected}
      name="DateRangePicker"
      className="input"
      placeholderText="Select date"
    />
  </div>
)
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
