import * as React from 'react';
import { IIcon } from './utils';

declare namespace FormControls {
  interface FormControlsProps extends React.HTMLProps<FormControls> {
    onNextClick?: () => void;
    nextDisabled?: boolean;
    nextIcon?: IIcon;
    nextHidden?: boolean;
    nextText?: React.ReactNode;
    onPreviousClick?: () => void;
    previousDisabled?: boolean;
    previousIcon?: IIcon;
    previousHidden?: boolean;
    previousText?: React.ReactNode;
    onSubmitClick?: () => void;
    submitDisabled?: boolean;
    submitIcon?: IIcon;
    submitHidden?: boolean;
    submitText?: React.ReactNode;
  }
}

declare class FormControls extends React.Component<FormControls.FormControlsProps> {}
export = FormControls;
