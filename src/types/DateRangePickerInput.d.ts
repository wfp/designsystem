import * as React from 'react';
import { SingleDatePickerInputProps } from './SingleDatePickerInput';

declare namespace DateRangePickerInput {
  interface DateRangePickerInputProps extends SingleDatePickerInputProps {
    startDatePlaceholderText?: string;
    endDatePlaceholderText?: string;
  }
}

declare class DateRangePickerInput extends React.Component<DateRangePickerInput.DateRangePickerInputProps> {}
export = DateRangePickerInput;
