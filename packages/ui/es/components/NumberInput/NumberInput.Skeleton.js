import PropTypes from 'prop-types';
import React from 'react';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var NumberInputSkeleton = function NumberInputSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null :
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control
  React.createElement("label", {
    className: "".concat(prefix, "--label ").concat(prefix, "--skeleton"),
    htmlFor: id
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "--number ").concat(prefix, "--skeleton")
  }));
};

NumberInputSkeleton.propTypes = {
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool
};
export default NumberInputSkeleton;