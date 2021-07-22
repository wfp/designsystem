"use strict";

var _react = _interopRequireDefault(require("react"));

var _MainNavigation = _interopRequireDefault(require("../MainNavigation"));

var _MainNavigationItem = _interopRequireDefault(require("../MainNavigationItem"));

var _Link = _interopRequireDefault(require("../Link"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MainNavigation', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_MainNavigation.default, {
      className: "some-class"
    }, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--main-navigation')).toBe(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
    it('has children as expected', function () {
      expect(wrapper.find("ul").length).toBe(1);
    });
  });
});