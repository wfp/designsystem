import React from 'react';
import AnchorNavigation from './AnchorNavigation';
import Link from '../Link';
import { shallow } from 'enzyme';
describe('AnchorNavigation', function () {
  describe('renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(AnchorNavigation, {
      title: "title"
    }, /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "Item two"), /*#__PURE__*/React.createElement(Link, {
      href: "#"
    }, "Item three")));

    var anchorWrapper = function anchorWrapper() {
      return wrapper.find('div.wfp--anchor-navigation');
    };

    describe('anchorWrapper', function () {
      it('renders as expected', function () {
        expect(anchorWrapper().props().children.length).toBe(2);
      });
      it('renders classes as expected', function () {
        expect(anchorWrapper().hasClass('wfp--anchor-navigation')).toEqual(true);
      });
    });

    var titleWrapper = function titleWrapper() {
      return wrapper.find('div.wfp--anchor-header-title');
    };

    describe('titleWrapper', function () {
      it('renders as expected', function () {
        expect(titleWrapper().length).toBe(1);
      });
      it('renders classes as expected', function () {
        expect(titleWrapper().hasClass('wfp--anchor-header-title')).toEqual(true);
      });
    });

    var contentWrapper = function contentWrapper() {
      return wrapper.find('div.wfp--anchor-content');
    };

    describe('contentWrapper', function () {
      it('renders classes as expected', function () {
        expect(contentWrapper().hasClass('wfp--anchor-content')).toEqual(true);
      });
    });
  });
});