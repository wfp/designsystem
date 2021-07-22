"use strict";

var _react = _interopRequireDefault(require("react"));

var _SecondaryNavigation = require("../SecondaryNavigation");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SecondaryNavigation', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigation, {
      className: "some-class",
      additional: "additional Information"
    }, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--secondary-navigation')).toBe(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
    it('renders additional props as expected', function () {
      var additionalWrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_SecondaryNavigation.SecondaryNavigation, {
        additional: "additional Information"
      }, "Content"));
      expect(additionalWrapper.props().additional).toEqual('additional Information');
    });
  });
});