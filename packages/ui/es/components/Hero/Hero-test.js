import React from 'react';
import Hero from '../Hero';
import { shallow, mount } from 'enzyme';
describe('Hero', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Hero, {
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
    var wrapper = shallow( /*#__PURE__*/React.createElement(Hero, {
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