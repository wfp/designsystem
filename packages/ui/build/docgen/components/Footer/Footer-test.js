"use strict";

var _react = _interopRequireDefault(require("react"));

var _Footer = _interopRequireDefault(require("../Footer"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Footer', function () {
  describe('Renders as expected', function () {
    var footer = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Footer.default, {
      className: "some-class",
      labelOne: "Need Help?",
      linkTextOne: "Contact",
      linkHrefOne: "www.google.com",
      labelTwo: "Estimate Monthly Cost",
      linkTextTwo: "Cost Calculator",
      linkHrefTwo: "www.bing.com",
      buttonText: "Create"
    }));
    it('should use the appropriate footer class', function () {
      expect(footer.children().hasClass('wfp--footer')).toEqual(true);
    });
    it('should send the first link the correct label', function () {
      expect(footer.props().labelOne).toEqual('Need Help?');
    });
    it('should send the first link the correct title', function () {
      expect(footer.props().linkTextOne).toEqual('Contact');
    });
    it('should send the first link the href property', function () {
      expect(footer.props().linkHrefOne).toEqual('www.google.com');
    });
    it('should send the second link the correct label', function () {
      expect(footer.props().labelTwo).toEqual('Estimate Monthly Cost');
    });
    it('should send the second link the correct title', function () {
      expect(footer.props().linkTextTwo).toEqual('Cost Calculator');
    });
    it('should send the second link the href property', function () {
      expect(footer.props().linkHrefTwo).toEqual('www.bing.com');
    });
    it('should send the button the correct text', function () {
      expect(footer.props().buttonText).toEqual('Create');
    });
    it('should all for custom classes to be applied', function () {
      expect(footer.hasClass('some-class')).toEqual(true);
    });
  });
  describe('Renders children as expected', function () {
    var footer = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Footer.default, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "test"
    }, "This is a test."), /*#__PURE__*/_react.default.createElement("div", {
      className: "test"
    }, "This is a test.")));
    it('should render children as expected', function () {
      expect(footer.find('.test').length).toBe(2);
    });
  });
});