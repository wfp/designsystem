"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = _settings.default.prefix;

var NumberInputSkeleton = function NumberInputSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null :
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control
  _react.default.createElement("label", {
    className: "".concat(prefix, "--label ").concat(prefix, "--skeleton"),
    htmlFor: id
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--number ").concat(prefix, "--skeleton")
  }));
};

NumberInputSkeleton.propTypes = {
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: _propTypes.default.bool
};
var _default = NumberInputSkeleton;
exports.default = _default;