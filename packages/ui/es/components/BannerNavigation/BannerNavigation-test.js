import React from 'react';
import { BannerNavigation, BannerNavigationItem } from '../BannerNavigation';
import { shallow } from 'enzyme';
describe('BannerNavigation', function () {
  describe('renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(BannerNavigation, null, "Items placed here"));

    var bannerWrapper = function bannerWrapper() {
      return wrapper.find('div.wfp--banner-navigation');
    };

    describe('bannerWrapper', function () {
      it('renders as expected', function () {
        expect(bannerWrapper().length).toBe(1);
      });
      it('renders default classes as expected', function () {
        expect(bannerWrapper().hasClass('wfp--banner-navigation')).toEqual(true);
      });
      it('renders unoredered list as expected', function () {
        expect(bannerWrapper().find('ul').length).toBe(1);
      });
    });
  });
});
describe('BannerNavigationItem', function () {
  describe('renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(BannerNavigationItem, null, "Items placed here"));
    it('renders as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('renders default classes as expected', function () {
      expect(wrapper.hasClass('wfp--banner-navigation__item')).toEqual(true);
    });
    it('renders unoredered list as expected', function () {
      expect(wrapper.find('li').length).toBe(1);
    });
  });
});