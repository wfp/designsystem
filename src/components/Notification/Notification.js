import React from 'react';

const CloseButton = ({ YouCanPassAnyProps, closeToast }) => (
  <button
    ariaLabel="close"
    role="img"
    className="Toastify__close-button"
    onClick={closeToast}>
    <span></span>
  </button>
);

const notificationStyle = {
  position: 'bottom-right',
  closeButton: <CloseButton YouCanPassAnyProps="foo" />,
};

export default notificationStyle;
