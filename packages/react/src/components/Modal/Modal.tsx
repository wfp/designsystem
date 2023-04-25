/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Close } from '@wfp/icons-react';
import useSettings from '../../hooks/useSettings';
import ModalFooterDefault, { ModalFooterProps } from './ModalFooter';

export interface ModalProps {
  modalLabel?: React.ReactNode;
  modalHeading?: React.ReactNode;
  modalText?: React.ReactNode;
  lazyLoad?: boolean;
  passiveModal?: boolean;
  children?: React.ReactNode;
  components?: {
    Wrapper?: React.ReactNode;
  };
  modalAriaLabel?: string;
  modalSecondaryAction?: React.ReactNode;
  secondaryButtonText?: React.ReactNode;
  secondaryButtonDisabled?: boolean;
  onSecondarySubmit?: () => void;
  primaryButtonText?: React.ReactNode;
  primaryButtonDisabled?: boolean;
  open?: boolean;
  hideClose?: boolean;
  warning?: boolean;
  danger?: boolean;
  shouldSubmitOnEnter?: boolean;
  selectorsFloatingMenus?: string[];
  selectorPrimaryFocus?: boolean | string;
  type?: 'info' | 'warning' | 'danger';
  inPortal?: boolean;
  wide?: boolean;
  modalFooter?: () => void;
  onRequestClose?: (
    evt: React.UIEvent,
    trigger: 'button' | 'key' | 'background'
  ) => void;
  onRequestSubmit?: () => void;
  iconDescription?: string;
  className?: string;
  id?: string;
  backgroundImage?: string;
  onKeyDown?: () => void;
  handleBlur?: (obj?: unknown) => void;
  primaryButtonRef?: React.RefObject<HTMLButtonElement>;
  secondaryButtonRef?: React.RefObject<HTMLButtonElement>;
}

const matchesFuncName =
  typeof Element !== 'undefined' &&
  ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(
    (name) => typeof Element.prototype[name] === 'function'
  )[0];

/** Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content. */

const Modal: React.FC<ModalProps> = (props) => {
  const {
    modalHeading,
    modalLabel,
    className,
    components: componentsOverride = {},
    modalSecondaryAction,
    modalAriaLabel,
    passiveModal,
    children,
    backgroundImage,
    open,
    lazyLoad,
    onRequestClose = () => {},
    // onRequestSubmit,
    onSecondarySubmit,
    iconDescription,
    inPortal,
    hideClose,
    handleBlur = () => {},
    wide,
    type,
    selectorPrimaryFocus,
    primaryButtonRef,
    secondaryButtonRef,
    // shouldSubmitOnEnter,
    ...other
  } = props;

  const { prefix } = useSettings();
  const button = useRef<HTMLButtonElement>(null);
  const outerModal = useRef<HTMLInputElement>(null);
  const innerModal = useRef<HTMLInputElement>(null);
  const el = document.body;
  const [beingOpen, setBeingOpen] = React.useState(false);

  //   const handleKeyDown = (evt) => {
  //     if (evt.which === 27) onRequestClose(evt, 'key');
  //     if (evt.which === 13 && shouldSubmitOnEnter) onRequestSubmit(evt, 'key');
  //   };

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
        if (matchesFuncName && typeof target[matchesFuncName] === 'function') {
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

  //   const handleClick = (evt) => {
  //     console.log(
  //       'evt.target',
  //       evt,
  //       innerModal.current.contains(evt.target),
  //       innerModal.current
  //     );
  //     if (
  //       innerModal.current &&
  //       !innerModal.current.contains(evt.target) &&
  //       !elementOrParentIsFloatingMenu(evt.target)
  //     ) {
  //       onRequestClose(evt, 'background');
  //     }
  //   };

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
      outerModal.current &&
      outerModal.current.offsetWidth &&
      outerModal.current.offsetHeight &&
      beingOpen
    ) {
      focusButton(evt.currentTarget);
      setBeingOpen(false);
    }
  };

  if (open === false && lazyLoad) return null;

  const components = { ModalFooter: ModalFooterDefault, ...componentsOverride };
  const ModalFooter = components.ModalFooter as React.FC<ModalFooterProps>;

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
      <ModalFooter
        {...props}
        prefix={prefix}
        onSecondaryButtonClick={onSecondaryButtonClick}
        primaryButtonRef={primaryButtonRef}
        secondaryButtonRef={secondaryButtonRef}
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

// Modal.defaultProps = {
//   onRequestClose: () => {},
//   onRequestSubmit: () => {},
//   primaryButtonDisabled: false,
//   secondaryButtonDisabled: false,
//   onKeyDown: () => {},
//   passiveModal: false,
//   iconDescription: 'close the modal',
//   inPortal: true,
//   lazyLoad: false,
//   modalHeading: '',
//   modalLabel: '',
//   selectorPrimaryFocus: '[data-modal-primary-focus]',
// };

Modal.displayName = 'Modal';

export default Modal;
