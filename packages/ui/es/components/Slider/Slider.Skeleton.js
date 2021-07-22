import PropTypes from 'prop-types';
import React from 'react';

var SliderSkeleton = function SliderSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null :
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control
  React.createElement("label", {
    className: "wfp--label wfp--skeleton",
    htmlFor: id
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "wfp--form-item"
  }, label, /*#__PURE__*/React.createElement("div", {
    className: "wfp--slider-container wfp--skeleton"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wfp--slider__range-label"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wfp--slider"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wfp--slider__track"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wfp--slider__filled-track"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wfp--slider__thumb"
  })), /*#__PURE__*/React.createElement("span", {
    className: "wfp--slider__range-label"
  })));
};

SliderSkeleton.propTypes = {
  hideLabel: PropTypes.bool
};
export default SliderSkeleton;