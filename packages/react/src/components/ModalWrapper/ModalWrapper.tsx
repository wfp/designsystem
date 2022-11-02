import React, { useState, KeyboardEvent } from 'react';
import type { PropsWithChildren } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import useSettings from '../../hooks/useSettings';
import { ButtonKind } from '../../types/utils';

/** Modal Wrapper component to encapsulate your Modal within a button. */
type ModalWrapperProps = PropsWithChildren<{
  id?: string;
  status?: string;
  disabled?: boolean;
  customButton?: React.ReactElement;
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
  handleSubmit?: (handle: () => void) => void;
  handleClose?: () => void;
  triggerButtonKind?: ButtonKind;
  shouldCloseAfterSubmit?: boolean;
  onKeyDown?: (evt: KeyboardEvent<HTMLDivElement>) => void;
}>;

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  customButton,
  id,
  onKeyDown,
  buttonTriggerText,
  buttonTriggerClassName,
  triggerButtonKind,
  disabled,
  handleSubmit = () => {},
  shouldCloseAfterSubmit = true,
  ...other
}) => {
  const { prefix } = useSettings();
  const triggerButton = React.createRef<HTMLButtonElement>();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (!isOpen) {
      triggerButton.current && triggerButton.current.focus();
      if (handleClose) {
        handleClose();
      }
    }
  };

  const handleOnRequestSubmit = () => {
    if (handleSubmit) {
      handleSubmit(handleClose);
      if (shouldCloseAfterSubmit) {
        handleClose();
      }
    }
  };

  const props = {
    ...other,
    open: isOpen,
    onRequestClose: handleClose,
    onRequestSubmit: handleOnRequestSubmit,
  };

  const customButtonEl = customButton
    ? React.cloneElement(customButton, {
        disabled: disabled,
        onClick: handleOpen,
        inputref: triggerButton,
      })
    : undefined;

  return (
    <div
      role="presentation"
      className={`${prefix}--modal__wrapper`}
      onKeyDown={(evt) => {
        if (evt.which === 27) {
          handleClose();
          onKeyDown && onKeyDown(evt);
        }
      }}>
      {customButton ? (
        <React.Fragment>{customButtonEl}</React.Fragment>
      ) : (
        <Button
          id={id}
          className={buttonTriggerClassName}
          disabled={disabled}
          kind={triggerButtonKind}
          onClick={handleOpen}
          inputref={triggerButton}>
          {buttonTriggerText}
        </Button>
      )}
      <Modal {...props}>{children}</Modal>
    </div>
  );
};

export default ModalWrapper;
