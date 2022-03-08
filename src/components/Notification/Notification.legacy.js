import React from 'react';

/** dkjnslknkjfndn */
const CloseButton = ({ YouCanPassAnyProps, closeToast }) => (
  <button
    ariaLabel="close"
    className="Toastify__close-button"
    onClick={closeToast}
  >
    <span></span>
  </button>
);

/** huyhuyghu */
const notificationStyle = {
  position: 'bottom-right',
  closeButton: <CloseButton YouCanPassAnyProps="foo" />,
};

export default notificationStyle;
