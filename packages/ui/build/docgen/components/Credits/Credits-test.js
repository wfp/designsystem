"use strict";

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../Link"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Credits', function () {
  describe('Renders as expected', function () {
    var link = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "www.google.com",
      className: "some-class"
    }, "A simple link"));
    it('should use the appropriate link class', function () {
      expect(link.hasClass('wfp--link')).toEqual(true);
    });
    it('should inherit the href property', function () {
      expect(link.props().href).toEqual('www.google.com');
    });
    it('should include child content', function () {
      expect(link.text()).toEqual('A simple link');
    });
    it('should all for custom classes to be applied', function () {
      expect(link.hasClass('some-class')).toEqual(true);
    });
  });
});