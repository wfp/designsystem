import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import Button from '../Button';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    passiveModal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    id: PropTypes.string,
    modalHeading: PropTypes.string,
    modalLabel: PropTypes.string,
    modalAriaLabel: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    primaryButtonText: PropTypes.string,
    open: PropTypes.bool,
    onRequestSubmit: PropTypes.func,
    onKeyDown: PropTypes.func,
    iconDescription: PropTypes.string,
    primaryButtonDisabled: PropTypes.bool,
    onSecondarySubmit: PropTypes.func,
    danger: PropTypes.bool,
  };

  static defaultProps = {
    onRequestClose: () => {},
    onRequestSubmit: () => {},
    primaryButtonDisabled: false,
    onKeyDown: () => {},
    passiveModal: false,
    iconDescription: 'close the modal',
    modalHeading: '',
    modalLabel: '',
  };

  handleKeyDown = evt => {
    if (evt.which === 27) {
      this.props.onRequestClose();
    }
  };

  handleClick = evt => {
    if (this.innerModal && !this.innerModal.contains(evt.target)) {
      this.props.onRequestClose();
    }
  };

  render() {
    const {
      modalHeading,
      modalLabel,
      modalAriaLabel,
      passiveModal,
      secondaryButtonText,
      primaryButtonText,
      open,
      onRequestClose,
      onRequestSubmit,
      onSecondarySubmit,
      iconDescription,
      primaryButtonDisabled,
      danger,
      ...other
    } = this.props;

    const onSecondaryButtonClick = onSecondarySubmit
      ? onSecondarySubmit
      : onRequestClose;

    const modalClasses = classNames({
      'wfp--modal': true,
      'wfp--modal-tall': !passiveModal,
      'is-visible': open,
      'wfp--modal--danger': this.props.danger,
      [this.props.className]: this.props.className,
    });

    const modalButton = (
      <button
        className="wfp--modal-close"
        type="button"
        onClick={onRequestClose}>
        <Icon
          name="close"
          className="wfp--modal-close__icon"
          description={iconDescription}
        />
      </button>
    );

    const modalBody = (
      <div
        ref={modal => {
          this.innerModal = modal;
        }}
        role="dialog"
        className="wfp--modal-container"
        aria-label={modalAriaLabel}>
        <div className="wfp--modal-header">
          {passiveModal && modalButton}
          {modalLabel && (
            <h4 className="wfp--modal-header__label">{modalLabel}</h4>
          )}
          <h2 className="wfp--modal-header__heading">{modalHeading}</h2>
          {!passiveModal && modalButton}
        </div>
        <div className="wfp--modal-content">{this.props.children}</div>
        {!passiveModal && (
          <div className="wfp--modal-footer">
            <div className="wfp--modal__buttons-container">
              <Button
                kind={danger ? 'tertiary' : 'secondary'}
                onClick={onSecondaryButtonClick}>
                {secondaryButtonText}
              </Button>
              <Button
                kind={danger ? 'danger--primary' : 'primary'}
                disabled={primaryButtonDisabled}
                onClick={onRequestSubmit}>
                {primaryButtonText}
              </Button>
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div
        {...other}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        className={modalClasses}
        role="presentation"
        tabIndex={-1}>
        {modalBody}
      </div>
    );
  }
}
