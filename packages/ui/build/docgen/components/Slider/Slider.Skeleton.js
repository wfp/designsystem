"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSkeleton = function SliderSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null :
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control
  _react.default.createElement("label", {
    className: "wfp--label wfp--skeleton",
    htmlFor: id
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--form-item"
  }, label, /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--slider-container wfp--skeleton"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "wfp--slider__range-label"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--slider"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--slider__track"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--slider__filled-track"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "wfp--slider__thumb"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "wfp--slider__range-label"
  })));
};

SliderSkeleton.propTypes = {
  hideLabel: _propTypes.default.bool
};
var _default = SliderSkeleton;
exports.default = _default;