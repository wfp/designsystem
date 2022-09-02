import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import { ButtonTypes } from '../../prop-types/types';
import useSettings from '../../hooks/useSettings';

/** Modal Wrapper component to encapsulate your Modal within a button. */

const ModalWrapper = ({
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
  const triggerButton = React.createRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false, () => {
      triggerButton.current && triggerButton.current.focus();
      if (handleClose) {
        handleClose();
      }
    });
  };

  const handleOnRequestSubmit = () => {
    if (handleSubmit) {
      handleSubmit({ handleClose });
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
          onKeyDown(evt);
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

ModalWrapper.propTypes = {
  status: PropTypes.string,
  /**
   * Specify a function to open the Modal.
   */
  handleOpen: PropTypes.func,
  children: PropTypes.node,
  /**
   * Specify a custom trigger `Button`.
   */
  customButton: PropTypes.element,
  id: PropTypes.string,
  /**
   * Specify the text for the trigger `Button`.
   */
  buttonTriggerText: PropTypes.node,
  /**
   * Specify a `class` for the trigger `Button`.
   */
  buttonTriggerClassName: PropTypes.string,
  modalLabel: PropTypes.string,
  modalHeading: PropTypes.string,
  modalText: PropTypes.string,
  passiveModal: PropTypes.bool,
  withHeader: PropTypes.bool,
  modalBeforeContent: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  /**
   * Specify a `function` which is triggered when submitting the `Modal`.
   */
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  disabled: PropTypes.bool,
  triggerButtonKind: ButtonTypes.buttonKind,
  /**
   * Specify if `Modal` should be closed after submitting.
   */
  shouldCloseAfterSubmit: PropTypes.bool,
};

ModalWrapper.defaultProps = {
  primaryButtonText: 'Save',
  secondaryButtonText: 'Cancel',
  triggerButtonKind: 'primary',
  disabled: false,
  onKeyDown: () => {},
};

export default ModalWrapper;
