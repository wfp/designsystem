import * as React from 'react';

declare namespace Modal {
  interface ModalProps extends React.HTMLProps<Modal> {
    modalLabel?: React.ReactNode;
    modalHeading?: string;
    modalText?: string;
    lazyLoad?: boolean;
    passiveModal?: boolean;
    children?: React.ReactNode;
    modalAriaLabel?: string;
    modalSecondaryAction?: React.ReactNode;
    secondaryButtonText?: string;
    secondaryButtonDisabled?: boolean;
    onSecondarySubmit?: () => void;
    primaryButtonText?: string;
    primaryButtonDisabled?: boolean;
    open?: boolean;
    hideClose?: boolean;
    danger?: boolean;
    shouldSubmitOnEnter?: boolean;
    selectorsFloatingMenus?: string[];
    selectorPrimaryFocus?: boolean | string;
    type?: 'info' | 'warning' | 'danger';
    inPortal?: boolean;
    wide?: boolean;
    modalFooter?: () => void;
    onRequestClose?: () => void;
    onRequestSubmit?: () => void;
    iconDescription?: string;
    className?: string;
    id?: string;
    backgroundImage?: string;
    onKeyDown?: () => void;
  }
}

declare class Modal extends React.Component<Modal.ModalProps> {}
export = Modal;
