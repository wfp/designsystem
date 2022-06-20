import * as React from 'react';
import * as HookForm from 'react-hook-form';

declare namespace Slider {
  interface SliderProps extends React.HTMLProps<Slider> {
    hideTextInput?: boolean;
    formItemClassName?: string;
    disabled?: boolean;
    hideLabel?: boolean;
    id: string;
    labelText?: React.ReactNode;
    min: number;
    minLabel?: string;
    formatLabel?: () => {};
    onChange?: () => void;
    name?: string;
    inputType?: string;
    ariaLabelInput?: string;
    value?: number;
    invalid?: boolean | HookForm.FieldError;
    invalidText?: string | React.ReactNode;
    additional?: React.ReactNode;
    allowEmpty?: boolean;
    fullWidth?: boolean;
  }
}

declare class Slider extends React.Component<Slider.SliderProps> {}
export = Slider;
