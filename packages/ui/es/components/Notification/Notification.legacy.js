import React from 'react';
/** dkjnslknkjfndn */

var CloseButton = function CloseButton(_ref) {
  var YouCanPassAnyProps = _ref.YouCanPassAnyProps,
      closeToast = _ref.closeToast;
  return /*#__PURE__*/React.createElement("button", {
    ariaLabel: "close",
    className: "Toastify__close-button",
    onClick: closeToast
  }, /*#__PURE__*/React.createElement("span", null));
};
/** huyhuyghu */


var notificationStyle = {
  position: 'bottom-right',
  closeButton: /*#__PURE__*/React.createElement(CloseButton, {
    YouCanPassAnyProps: "foo"
  })
};
export default notificationStyle;