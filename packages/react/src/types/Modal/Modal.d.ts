import * as React from 'react';

declare namespace Modal  {
  interface ModalProps extends React.HTMLProps<Modal> {
    modalLabel?: React.ReactNode
    modalHeading?: string
    modalText?: string
    lazyLoad?: boolean
    passiveModal?: boolean
    children?: React.ReactNode
    modalAriaLabel?: string
    secondaryButtonText?: string
    secondaryButtonDisabled?: boolean
    onSecondarySubmit?: boolean
    primaryButtonText?: string
    primaryButtonDisabled?: boolean
    open?: boolean
    danger?: boolean
    shouldSubmitOnEnter?: boolean
    selectorsFloatingMenus?: string[]
    selectorPrimaryFocus?: boolean | string
    type?: 'info' | 'warning' | 'danger'
    inPortal?: boolean
    wide?: boolean
    modalFooter?: () => {}
    onRequestClose?: () => void
    onRequestSubmit?: () => void
    iconDescription?: string
  }
}

declare class Modal extends React.Component<Modal.ModalProps>{ }
export = Modal
