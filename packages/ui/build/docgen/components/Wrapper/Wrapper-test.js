"use strict";

var _react = _interopRequireDefault(require("react"));

var _Wrapper = _interopRequireDefault(require("../Wrapper"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ReadMore', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
      className: "some-class"
    }, "Content"));
    it('should all for custom classes to be applied', function () {
      expect(wrapper.hasClass('wfp--wrapper')).toEqual(true);
    });
  });
  describe('wrapper with background prop', function () {
    it('prop lighter should have class as expected', function () {
      var lightWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
        background: "lighter"
      }, "Content"));
      expect(lightWrapper.hasClass('wfp--wrapper--background-lighter')).toEqual(true);
    });
    it('prop dark should have class as expected', function () {
      var darkWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
        background: "dark"
      }, "Content"));
      expect(darkWrapper.hasClass('wfp--wrapper--background-dark')).toEqual(true);
    });
  });
  describe('wrapper with pageWidth prop', function () {
    it('should have class as expected', function () {
      var pageWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
        pageWidth: "lg"
      }, "Content"));
      expect(pageWrapper.hasClass('wfp--wrapper--width-lg')).toEqual(true);
    });
  });
  describe('wrapper with mobilePageWidth prop', function () {
    it('should have class as expected', function () {
      var mobileWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Wrapper.default, {
        mobilePageWidth: "full"
      }, "Content"));
      expect(mobileWrapper.hasClass('wfp--wrapper--width-mobile-full')).toEqual(true);
    });
  });
});