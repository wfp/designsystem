import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CloseGlyph } from '@un/icons-react';
import Button from '../Button';
import { settings } from '../../globals/js';

const { prefix } = settings;

const matchesFuncName =
  typeof Element !== 'undefined' &&
  ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(
    (name) => typeof Element.prototype[name] === 'function'
  )[0];

const modalRoot = typeof document !== 'undefined' ? document.body : undefined;

/** Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content. */

export default class Modal extends Component {
  static propTypes = {
    /**
     * Provide the contents of your Modal
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the modal root node
     */
    className: PropTypes.string,

    /**
     * Specify whether the modals content should be only loaded when the `Modal` is `open`
     */
    lazyLoad: PropTypes.bool,
    /**
     * Specify whether the modal should be button-less
     */
    passiveModal: PropTypes.bool,

    /**
     * Specify a handler for closing modal.
     * The handler should care of closing modal, e.g. changing `open` prop.
     */
    onRequestClose: PropTypes.func,

    /**
     * Specify the DOM element ID of the top-level node.
     */
    id: PropTypes.string,

    /**
     * Specify the content of the modal header title.
     */
    modalHeading: PropTypes.string,
    /**
     * Specify the content of the modal header label.
     */
    modalLabel: PropTypes.node,
    /**
     * Specify the a function which renders a custom ModalFooter.
     */
    modalFooter: PropTypes.func,

    /**
     * Specify a label to be read by screen readers on the modal root node
     */
    modalAriaLabel: PropTypes.string,

    /**
     * Specify the text for the secondary button
     */
    secondaryButtonText: PropTypes.string,

    /**
     * Specify the text for the primary button
     */
    primaryButtonText: PropTypes.string,

    /**
     * Specify whether the Modal is currently open
     */
    open: PropTypes.bool,

    /**
     * Specify a handler for "submitting" modal.
     * The handler should care of closing modal, e.g. changing `open` prop, if necessary.
     */
    onRequestSubmit: PropTypes.func,

    /**
     * Specify a handler for a key press modal
     */
    onKeyDown: PropTypes.func,

    /**
     * Provide a description for "close" icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /**
     * Specify whether the Button should be disabled, or not
     */
    primaryButtonDisabled: PropTypes.bool,

    /**
     * Specify whether the secondary Button should be disabled, or not
     */
    secondaryButtonDisabled: PropTypes.bool,

    /**
     * Specify a handler for the secondary button.
     * Useful if separate handler from `onRequestClose` is desirable
     */
    onSecondarySubmit: PropTypes.func,

    /**
     * Specify whether the Modal is for dangerous actions
     */
    danger: PropTypes.bool,

    /**
     * Specify if Enter key should be used as "submit" action
     */
    shouldSubmitOnEnter: PropTypes.bool,

    /**
     * Specify CSS selectors that match DOM elements working as floating menus.
     * Focusing on those elements won't trigger "focus-wrap" behavior
     */
    selectorsFloatingMenus: PropTypes.arrayOf(PropTypes.string),

    /**
     * Specify a CSS selector that matches the DOM element that should
     * be focused when the Modal opens. If "false" no selector will be triggered
     */
    selectorPrimaryFocus: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),

    /**
     *  Different styling options are available `info`, `warning`, `danger`
     */
    type: PropTypes.oneOf(['info', 'warning', 'danger']),

    /**
     * If true the Modal will be rendered inside a portal at the end of the
     * body element, otherwise at the position it is placed.
     */
    inPortal: PropTypes.bool,
    /**
     * If true the Modal will be wider then the regular Modal
     */
    wide: PropTypes.bool,
  };

  static defaultProps = {
    onRequestClose: () => {},
    onRequestSubmit: () => {},
    primaryButtonDisabled: false,
    secondaryButtonDisabled: false,
    onKeyDown: () => {},
    passiveModal: false,
    iconDescription: 'close the modal',
    inPortal: true,
    lazyLoad: false,
    modalHeading: '',
    modalLabel: '',
    selectorPrimaryFocus: '[data-modal-primary-focus]',
  };

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  button = React.createRef();
  outerModal = React.createRef();
  innerModal = React.createRef();

  elementOrParentIsFloatingMenu = (target) => {
    const {
      selectorsFloatingMenus = [
        `.${prefix}--overflow-menu-options`,
        `.${prefix}--tooltip`,
        '.flatpickr-calendar',
      ],
    } = this.props;
    if (target && typeof target.closest === 'function') {
      return selectorsFloatingMenus.some((selector) =>
        target.closest(selector)
      );
    } else {
      // Alternative if closest does not exist.
      while (target) {
        if (typeof target[matchesFuncName] === 'function') {
          if (
            // eslint-disable-next-line no-loop-func
            selectorsFloatingMenus.some((selector) =>
              target[matchesFuncName](selector)
            )
          ) {
            return true;
          }
        }
        target = target.parentNode;
      }
      return false;
    }
  };

  handleKeyDown = (evt) => {
    if (evt.which === 27) {
      this.props.onRequestClose(evt, 'key');
    }
    if (evt.which === 13 && this.props.shouldSubmitOnEnter) {
      this.props.onRequestSubmit(evt, 'key');
    }
  };

  handleClick = (evt) => {
    if (
      this.innerModal.current &&
      !this.innerModal.current.contains(evt.target) &&
      !this.elementOrParentIsFloatingMenu(evt.target)
    ) {
      this.props.onRequestClose(evt, 'background');
    }
  };

  handleCloseButton = (evt) => {
    this.props.onRequestClose(evt, 'button');
  };

  focusModal = () => {
    if (this.outerModal.current) {
      this.outerModal.current.focus();
    }
  };

  handleBlur = (evt) => {
    // Keyboard trap
    if (
      this.innerModal.current &&
      this.props.open &&
      evt.relatedTarget &&
      !this.innerModal.current.contains(evt.relatedTarget) &&
      !this.elementOrParentIsFloatingMenu(evt.relatedTarget)
    ) {
      this.focusModal();
    }
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.beingOpen = true;
    } else if (prevProps.open && !this.props.open) {
      this.beingOpen = false;
    }
  }

  focusButton = (focusContainerElement) => {
    if (this.props.selectorPrimaryFocus === false) {
      return;
    }
    const primaryFocusElement = focusContainerElement.querySelector(
      this.props.selectorPrimaryFocus
    );
    if (primaryFocusElement) {
      primaryFocusElement.focus();
      return;
    }
    if (this.button && this.button.current) {
      this.button.current.focus();
    }
  };

  componentDidMount() {
    modalRoot.appendChild(this.el);
    if (!this.props.open) {
      return;
    }
    this.focusButton(this.innerModal.current);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  handleTransitionEnd = (evt) => {
    if (
      this.outerModal.current.offsetWidth &&
      this.outerModal.current.offsetHeight &&
      this.beingOpen
    ) {
      this.focusButton(evt.currentTarget);
      this.beingOpen = false;
    }
  };

  render() {
    const {
      modalHeading,
      modalLabel,
      modalFooter,
      modalSecondaryAction,
      modalAriaLabel,
      passiveModal,
      secondaryButtonText,
      primaryButtonText,
      backgroundImage,
      open,
      lazyLoad,
      onRequestClose,
      onRequestSubmit,
      onSecondarySubmit,
      iconDescription,
      inPortal,
      primaryButtonDisabled,
      secondaryButtonDisabled,
      danger,
      hideClose,
      wide,
      type,
      selectorPrimaryFocus, // eslint-disable-line
      selectorsFloatingMenus, // eslint-disable-line
      shouldSubmitOnEnter, // eslint-disable-line
      ...other
    } = this.props;

    if (open === false && lazyLoad) {
      return null;
    }

    const onSecondaryButtonClick = onSecondarySubmit
      ? onSecondarySubmit
      : onRequestClose;

    const modalClasses = classNames({
      [`${prefix}--modal`]: true,
      [`${prefix}--modal--wide`]: wide,
      [`${prefix}--modal--tall`]: !passiveModal,
      [`${prefix}--modal--background-image`]: backgroundImage,
      'is-visible': open,
      [`${prefix}--modal--warning`]: type === 'warning' || this.props.warning,
      [`${prefix}--modal--danger`]: type === 'danger' || this.props.danger,

      [this.props.className]: this.props.className,
    });

    const modalButton = !hideClose ? (
      <button
        className={`${prefix}--modal-close`}
        type="button"
        onClick={this.handleCloseButton}
        ref={this.button}>
        <CloseGlyph
          className={`${prefix}--modal-close__icon`}
          description={iconDescription}
        />
      </button>
    ) : null;

    const modalBody = (
      <div
        ref={this.innerModal}
        role="dialog"
        className={`${prefix}--modal-container`}
        aria-label={modalAriaLabel}>
        <div className={`${prefix}--modal-header`}>
          {passiveModal && modalButton}
          <div>
            {modalLabel && (
              <h4 className={`${prefix}--modal-header__label`}>{modalLabel}</h4>
            )}
            <h2 className={`${prefix}--modal-header__heading`}>
              {modalHeading}
            </h2>
          </div>
          {modalSecondaryAction && <>{modalSecondaryAction}</>}
          {!passiveModal && modalButton}
        </div>
        <div className={`${prefix}--modal-content`}>{this.props.children}</div>
        {!passiveModal && (
          <div className={`${prefix}--modal-footer`}>
            {!modalFooter ? (
              <div className={`${prefix}--modal__buttons-container`}>
                {secondaryButtonText && (
                  <Button
                    kind={danger ? 'tertiary' : 'secondary'}
                    disabled={secondaryButtonDisabled}
                    onClick={onSecondaryButtonClick}>
                    {secondaryButtonText}
                  </Button>
                )}
                <Button
                  kind={danger ? 'danger--primary' : 'primary'}
                  disabled={primaryButtonDisabled}
                  onClick={onRequestSubmit}
                  inputref={this.button}>
                  {primaryButtonText}
                </Button>
              </div>
            ) : (
              <div>{modalFooter(this.props)}</div>
            )}
          </div>
        )}
      </div>
    );

    const modal = (
      <div
        {...other}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        onBlur={this.handleBlur}
        className={modalClasses}
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage})` }
            : undefined
        }
        role="presentation"
        tabIndex={-1}
        onTransitionEnd={this.props.open ? this.handleTransitionEnd : undefined}
        ref={this.outerModal}>
        <div className={`${prefix}--modal-inner`}>{modalBody}</div>
      </div>
    );
    if (inPortal) {
      return ReactDOM.createPortal(modal, this.el);
    } else {
      return modal;
    }
  }
}
