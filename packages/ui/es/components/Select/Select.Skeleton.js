/* eslint-disable jsx-a11y/label-has-for */

/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';

var SelectSkeleton = function SelectSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null : /*#__PURE__*/React.createElement("label", {
    className: "wfp--label wfp--skeleton",
    htmlFor: id
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "wfp--form-item"
  }, label, /*#__PURE__*/React.createElement("div", {
    className: "wfp--select wfp--skeleton"
  }, /*#__PURE__*/React.createElement("select", {
    className: "wfp--select-input"
  })));
};

SelectSkeleton.propTypes = {
  hideLabel: PropTypes.bool
};
export default SelectSkeleton;