"use strict";

var _react = _interopRequireDefault(require("react"));

var _BannerNavigation = require("../BannerNavigation");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BannerNavigation', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigation, null, "Items placed here"));

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
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_BannerNavigation.BannerNavigationItem, null, "Items placed here"));
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