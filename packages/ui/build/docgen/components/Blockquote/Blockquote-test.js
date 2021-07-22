"use strict";

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Blockquote', function () {
  describe('Renders common props as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Button.default, {
      className: "extra-class"
    }, "Lorem Ipsum"));
    it('Renders children as expected', function () {
      expect(wrapper.props().children.length).toEqual(3);
    });
    it('Should add extra classes via className', function () {
      expect(wrapper.hasClass('extra-class')).toBe(true);
    });
  });
});