"use strict";

var _react = _interopRequireDefault(require("react"));

var _User = _interopRequireDefault(require("../User"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Unit', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_User.default, {
      type: "usd"
    }, "123"));
    it('renders as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('should add extra classes that are passed via className', function () {
      wrapper.setProps({
        className: 'extra-class'
      });
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});