import React from 'react';
import Sidebar, { SidebarHeader, SidebarScroll, SidebarBackButton } from '../Sidebar';
import { shallow } from 'enzyme';
describe('Sidebar', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(Sidebar, {
      className: "some-class"
    }, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--sidebar-content__container')).toBe(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('Renders sidebarHeader as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SidebarHeader, {
      className: "some-class"
    }, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--sidebar-content__header')).toBe(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('Renders SidebarScroll as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SidebarScroll, null, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--sidebar-content__scroll')).toBe(true);
    });
  });
  describe('Renders SidebarBackButton as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SidebarBackButton, null, "Content"));
    it('has classes as expected', function () {
      expect(wrapper.exists('.wfp--sidebar-content__back-button')).toBe(true);
    });
  });
});