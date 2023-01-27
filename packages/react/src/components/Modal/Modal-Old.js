import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Close } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';
import ModalFooter from './ModalFooter';

const matchesFuncName =
  typeof Element !== 'undefined' &&
  ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(
    (name) => typeof Element.prototype[name] === 'function'
  )[0];

/** Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content. */

const Modal = (props) => {
  const {
    modalHeading,
    modalLabel,
    className,
    components,
    modalSecondaryAction,
    modalAriaLabel,
    passiveModal,
    children,
    backgroundImage,
    open,
    lazyLoad,
    onRequestClose,
    onRequestSubmit,
    onSecondarySubmit,
    iconDescription,
    inPortal,
    hideClose,
    handleBlur,
    wide,
    type,
    selectorPrimaryFocus,
    shouldSubmitOnEnter,
    ...other
  } = props;

  const { prefix } = useSettings();
  const button = useRef(null);
  const outerModal = useRef(null);
  const innerModal = useRef(null);
  const el = document.body;
  const [beingOpen, setBeingOpen] = React.useState(false);

  const handleKeyDown = (evt) => {
    if (evt.which === 27) onRequestClose(evt, 'key');
    if (evt.which === 13 && shouldSubmitOnEnter) onRequestSubmit(evt, 'key');
  };

  const elementOrParentIsFloatingMenu = (target) => {
    const {
      selectorsFloatingMenus = [
        `.${prefix}--overflow-menu-options`,
        `.${prefix}--tooltip`,
        '.flatpickr-calendar',
      ],
    } = props;
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

  const handleClick = (evt) => {
    console.log(
      'evt.target',
      evt,
      innerModal.current.contains(evt.target),
      innerModal.current
    );
    if (
      innerModal.current &&
      !innerModal.current.contains(evt.target) &&
      !elementOrParentIsFloatingMenu(evt.target)
    ) {
      onRequestClose(evt, 'background');
    }
  };

  const handleCloseButton = (evt) => {
    onRequestClose(evt, 'button');
  };

  const focusModal = () => {
    if (outerModal.current) outerModal.current.focus();
  };

  const handleBlurEvent = (evt) => {
    if (handleBlur) {
      handleBlur({
        evt,
        innerModal,
        open,
        elementOrParentIsFloatingMenu,
        focusModal,
      });
    } else if (
      innerModal.current &&
      open &&
      evt.relatedTarget &&
      !innerModal.current.contains(evt.relatedTarget) &&
      !elementOrParentIsFloatingMenu(evt.relatedTarget)
    ) {
      focusModal();
    }
  };

  const focusButton = (focusContainerElement) => {
    if (selectorPrimaryFocus === false) return;
    const primaryFocusElement =
      focusContainerElement.querySelector(selectorPrimaryFocus);
    if (primaryFocusElement) {
      primaryFocusElement.focus();
      return;
    }
    if (button?.current) {
      button.current.focus();
    }
  };

  const handleTransitionEnd = (evt) => {
    if (
      outerModal.current.offsetWidth &&
      outerModal.current.offsetHeight &&
      beingOpen
    ) {
      focusButton(evt.currentTarget);
      setBeingOpen(false);
    }
  };

  if (open === false && lazyLoad) return null;

  const customComponents = { ModalFooter, ...components };

  const onSecondaryButtonClick = onSecondarySubmit
    ? onSecondarySubmit
    : onRequestClose;

  const modalClasses = classNames(
    {
      [`${prefix}--modal`]: true,
      [`${prefix}--modal--wide`]: wide,
      [`${prefix}--modal--tall`]: !passiveModal,
      [`${prefix}--modal--background-image`]: backgroundImage,
      'is-visible': open,
      [`${prefix}--modal--warning`]: type === 'warning' || props.warning,
      [`${prefix}--modal--danger`]: type === 'danger' || props.danger,
    },
    className
  );

  const modalButton = !hideClose ? (
    <button
      className={`${prefix}--modal-close`}
      type="button"
      id="closeButton"
      onClick={handleCloseButton}
      ref={button}>
      <Close
        className={`${prefix}--modal-close__icon`}
        description={iconDescription}
      />
    </button>
  ) : null;

  const modalBody = (
    <div
      ref={innerModal}
      role="dialog"
      className={`${prefix}--modal-container`}
      aria-label={modalAriaLabel}>
      <div className={`${prefix}--modal-header`}>
        {passiveModal && modalButton}
        <div>
          {modalLabel && (
            <h4 className={`${prefix}--modal-header__label`}>{modalLabel}</h4>
          )}
          <h2 className={`${prefix}--modal-header__heading`}>{modalHeading}</h2>
        </div>
        {modalSecondaryAction && <>{modalSecondaryAction}</>}
        {!passiveModal && modalButton}
      </div>
      <div className={`${prefix}--modal-content`}>{children}</div>
      <customComponents.ModalFooter
        {...props}
        prefix={prefix}
        onSecondaryButtonClick={onSecondaryButtonClick}
        ref={button}
      />
    </div>
  );

  const modal = (
    <div
      {...other}
      // onKeyDown={handleKeyDown}
      //onClick={handleClick}
      onBlur={handleBlurEvent}
      className={modalClasses}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
      role="presentation"
      tabIndex={-1}
      onTransitionEnd={open ? handleTransitionEnd : undefined}
      ref={outerModal}>
      <div className={`${prefix}--modal-inner`}>{modalBody}</div>
    </div>
  );

  if (inPortal) return ReactDOM.createPortal(modal, el);
  else return modal;
};

Modal.propTypes = {
  prefix: PropTypes.string,
  /**
   * Provide the contents of your Modal
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,
  /**
   * Specify component Overrides
   */
  components: PropTypes.object,
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
  selectorPrimaryFocus: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

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

Modal.defaultProps = {
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

export default Modal;
