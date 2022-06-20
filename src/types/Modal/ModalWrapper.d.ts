import * as React from 'react';
import { ButtonKind } from '../utils';

declare namespace ModalWrapper {
  interface ModalWrapperProps extends React.HTMLProps<ModalWrapper> {
    status?: string;
    children?: React.ReactNode;
    customButton?: React.ReactElement;
    id?: string;
    buttonTriggerText?: React.ReactNode;
    buttonTriggerClassName?: string;
    modalLabel?: string;
    modalHeading?: string;
    modalText?: string;
    passiveModal?: boolean;
    withHeader?: boolean;
    modalBeforeContent?: boolean;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    handleOpen?: () => void;
    handleSubmit?: () => void;
    handleClose?: () => void;
    triggerButtonKind?: ButtonKind;
    shouldCloseAfterSubmit?: boolean;
    disabled?: boolean;
  }
}

declare class ModalWrapper extends React.Component<ModalWrapper.ModalWrapperProps> {}
export = ModalWrapper;
