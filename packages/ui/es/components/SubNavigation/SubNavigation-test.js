import React from 'react';
import { SubNavigation, SubNavigationHeader, SubNavigationTitle, SubNavigationLink, SubNavigationFilter, SubNavigationContent, SubNavigationList, SubNavigationGroup, SubNavigationItem } from './SubNavigation';
import { shallow, mount } from 'enzyme';
describe('SubNavigation', function () {
  describe('renders subnavigation as expected', function () {
    var mainWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigation, null, "content"));
    it('renders children', function () {
      expect(mainWrapper.props().children).toEqual('content');
    });
  });
  describe('renders subnavigationItem as expected', function () {
    var itemWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigationItem, {
      className: "some-class"
    }, "contentItem"));
    it('has classes as expected ', function () {
      expect(itemWrapper.exists('.wfp--sub-navigation__item')).toEqual(true);
    });
    it('renders children', function () {
      expect(itemWrapper.props().children).toEqual('contentItem');
    });
    it('should allow for custom classes to be applied', function () {
      expect(itemWrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('renders subnavigationHeader as expected', function () {
    var headerWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigationHeader, {
      className: "some-class"
    }, "NavHeader"));
    it('has classes as expected ', function () {
      expect(headerWrapper.exists('.wfp--sub-navigation__header')).toEqual(true);
    });
    it('renders children', function () {
      expect(headerWrapper.props().children).toEqual('NavHeader');
    });
    it('should allow for custom classes to be applied', function () {
      expect(headerWrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('renders subnavigationFilter as expected', function () {
    var filterWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigationFilter, {
      className: "some-class"
    }, "Navfilter"));
    it('has classes as expected ', function () {
      expect(filterWrapper.exists('.wfp--sub-navigation__filter')).toEqual(true);
    });
    it('renders children', function () {
      expect(filterWrapper.props().children).toEqual('Navfilter');
    });
    it('should allow for custom classes to be applied', function () {
      expect(filterWrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('renders SubNavigationList as expected', function () {
    var ListWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigationList, {
      className: "some-class"
    }, "NavList"));
    it('has classes as expected ', function () {
      expect(ListWrapper.exists('.wfp--sub-navigation__list')).toEqual(true);
    });
    it('renders children', function () {
      expect(ListWrapper.props().children).toEqual('NavList');
    });
    it('should allow for custom classes to be applied', function () {
      expect(ListWrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('renders SubNavigationContent as expected', function () {
    var contentWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigationContent, {
      className: "some-class"
    }, "NavContent"));
    it('has classes as expected ', function () {
      expect(contentWrapper.exists('.wfp--sub-navigation__content')).toEqual(true);
    });
    it('renders children', function () {
      expect(contentWrapper.props().children).toEqual('NavContent');
    });
    it('should allow for custom classes to be applied', function () {
      expect(contentWrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('renders SubNavigationTitle as expected', function () {
    var titleWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigationTitle, {
      className: "some-class"
    }, "Navtitle"));
    it('has classes as expected ', function () {
      expect(titleWrapper.exists('.wfp--sub-navigation__title')).toEqual(true);
    });
    it('renders children', function () {
      expect(titleWrapper.props().children).toEqual('Navtitle');
    });
    it('should allow for custom classes to be applied', function () {
      expect(titleWrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('renders SubNavigationLink as expected', function () {
    var linkWrapper = shallow( /*#__PURE__*/React.createElement(SubNavigationLink, {
      className: "some-class"
    }, "NavLink"));
    it('has classes as expected ', function () {
      expect(linkWrapper.exists('.wfp--sub-navigation__link')).toEqual(true);
    });
    it('renders children', function () {
      expect(linkWrapper.props().children).toEqual('NavLink');
    });
    it('should allow for custom classes to be applied', function () {
      expect(linkWrapper.hasClass('some-class')).toEqual(true);
    });
  });
  describe('renders SubNavigationGroup as expected', function () {
    var groupWrapper = mount( /*#__PURE__*/React.createElement(SubNavigationGroup, {
      columns: 3,
      className: "some-class",
      title: "Group title"
    }, "NavGroup"));
    it('has classes as expected ', function () {
      expect(groupWrapper.exists('.wfp--sub-navigation__group')).toEqual(true);
    });
    it('should allow for custom classes to be applied', function () {
      expect(groupWrapper.hasClass('some-class')).toEqual(true);
    });
    it('renders children', function () {
      expect(groupWrapper.props().children).toEqual('NavGroup');
    });
    it('renders title prop as expected', function () {
      expect(groupWrapper.props().title).toEqual('Group title');
    });
    it('renders children', function () {
      expect(groupWrapper.props().columns).toEqual(3);
    });
    it('has columns props classes ', function () {
      expect(groupWrapper.exists('.wfp--sub-navigation__group--columns')).toEqual(true);
    });
  });
});