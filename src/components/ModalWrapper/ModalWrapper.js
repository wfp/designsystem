import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../Modal';
import Button from '../Button';
import { ButtonTypes } from '../../prop-types/types';

/** Modal Wrapper component to encapsulate your Modal within a button. */

export default class ModalWrapper extends React.Component {
  static propTypes = {
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
    disabled: PropTypes.bool,
    triggerButtonKind: ButtonTypes.buttonKind,
    /**
     * Specify if `Modal` should be closed after submitting.
     */
    shouldCloseAfterSubmit: PropTypes.bool,
  };

  static defaultProps = {
    primaryButtonText: 'Save',
    secondaryButtonText: 'Cancel',
    triggerButtonKind: 'primary',
    disabled: false,
    onKeyDown: () => {},
  };

  constructor(props) {
    super(props);
    this.triggerButton = React.createRef();
  }

  state = {
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({ isOpen: false }, () => {
      this.triggerButton.current && this.triggerButton.current.focus();
    });
  };

  handleOnRequestSubmit = () => {
    const { handleSubmit, shouldCloseAfterSubmit } = this.props;
    if (handleSubmit && handleSubmit()) {
      if (shouldCloseAfterSubmit) {
        this.handleClose();
      }
    }
  };

  render() {
    const {
      children,
      customButton,
      id,
      onKeyDown,
      buttonTriggerText,
      buttonTriggerClassName,
      triggerButtonKind,
      disabled,
      handleSubmit, // eslint-disable-line no-unused-vars
      shouldCloseAfterSubmit, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const props = {
      ...other,
      open: this.state.isOpen,
      onRequestClose: this.handleClose,
      onRequestSubmit: this.handleOnRequestSubmit,
    };

    const customButtonEl = customButton
      ? React.cloneElement(customButton, {
          disabled: disabled,
          onClick: this.handleOpen,
          inputref: this.triggerButton,
        })
      : undefined;

    return (
      <div
        role="presentation"
        className="wfp--modal__wrapper"
        onKeyDown={(evt) => {
          if (evt.which === 27) {
            this.handleClose();
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
            onClick={this.handleOpen}
            inputref={this.triggerButton}>
            {buttonTriggerText}
          </Button>
        )}
        <Modal {...props}>{children}</Modal>
      </div>
    );
  }
}
