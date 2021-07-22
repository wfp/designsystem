"use strict";

var _react = _interopRequireDefault(require("react"));

var _Hero = _interopRequireDefault(require("../Hero"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Hero', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Hero.default, {
      href: "www.google.com",
      className: "some-class",
      kind: "landscape"
    }, "A simple link"));
    it('should use the appropriate link class', function () {
      expect(wrapper.length).toBe(1);
    });
    it('should use the appropriate link class', function () {
      expect(wrapper.hasClass('wfp--photo-card')).toEqual(true);
    });
    it('Renders as an <a> element with an href', function () {
      expect(wrapper.is('a')).toBe(true);
    });
    it('should inherit the href property', function () {
      expect(wrapper.props().href).toEqual('www.google.com');
    });
    it('should all for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Hero.default, {
      className: "some-class",
      kind: "related",
      isLink: false
    }, "A simple link"));
    it('Renders as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('Renders as a <div> element with isLink props set as false', function () {
      expect(wrapper.is('div')).toBe(true);
    });
    describe('Renders content as expected', function () {
      var contentWrapper = function contentWrapper() {
        return wrapper.find('div.wfp--photo-card__background');
      };

      var infoWrapper = function infoWrapper() {
        return wrapper.find('div.wfp--photo-card__info');
      };

      it("renders content background class as expected", function () {
        expect(contentWrapper().hasClass('wfp--photo-card__background')).toEqual(true);
      });
      it("renders card info class as expected", function () {
        expect(infoWrapper().hasClass('wfp--photo-card__info')).toEqual(true);
      });
      it("renders card info content as expected", function () {
        expect(infoWrapper().props().children.length).toBe(2);
      }); // it('render kind props as expected', () => {
      //   wrapper.setProps({ kind: 'related' });
      //   expect(wrapper.props().kind).toEqual('related');
      // });
    });
  });
});