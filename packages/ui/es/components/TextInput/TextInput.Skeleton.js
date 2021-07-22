/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React from 'react';

var TextInputSkeleton = function TextInputSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null : /*#__PURE__*/React.createElement("label", {
    className: "wfp--label wfp--skeleton",
    htmlFor: id
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "wfp--form-item"
  }, label, /*#__PURE__*/React.createElement("div", {
    className: "wfp--skeleton wfp--text-input"
  }));
};

TextInputSkeleton.propTypes = {
  hideLabel: PropTypes.bool
};
export default TextInputSkeleton;