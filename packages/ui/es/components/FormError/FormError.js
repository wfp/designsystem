import PropTypes from 'prop-types';
import React from 'react';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
import Blockquote from '../Blockquote';

var FormError = function FormError(_ref) {
  var className = _ref.className,
      message = _ref.message,
      submitFailed = _ref.submitFailed;

  if (message && submitFailed === true) {
    return /*#__PURE__*/React.createElement(Blockquote, {
      className: className,
      warning: true,
      withIcon: false
    }, /*#__PURE__*/React.createElement("h4", {
      className: "".concat(prefix, "--form-error__title")
    }, message.generic), message.fields && /*#__PURE__*/React.createElement("ul", {
      className: "".concat(prefix, "--form-error__list")
    }, message.fields.map(function (field, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: field.key
      }, field.message));
    })));
  } else {
    return null;
  }
};

FormError.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  info: PropTypes.string
};
export default FormError;