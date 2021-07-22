"use strict";

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _Breadcrumb2 = _interopRequireDefault(require("../Breadcrumb/Breadcrumb.Skeleton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Breadcrumb', function () {
  describe('Renders as expected', function () {
    var breadcrumb = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, {
      className: "parent-class"
    }, /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.default, {
      className: "some-class",
      href: "www.google.com"
    }, "Breadcrumb 1")));
    var breadcrumbItem = breadcrumb.find(_BreadcrumbItem.default);
    it('renders a breadcrumb', function () {
      expect(breadcrumb.length).toEqual(1);
    });
    it('should use the appropriate breadcrumb class', function () {
      expect(breadcrumb.children().hasClass('wfp--breadcrumb')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(breadcrumb.hasClass('parent-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(breadcrumb.find(_BreadcrumbItem.default).length).toEqual(1);
    });
    it('should render children content as expected', function () {
      expect(breadcrumbItem.text()).toEqual('Breadcrumb 1');
    });
  });
});
describe('BreadcrumbSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Breadcrumb2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('wfp--skeleton')).toEqual(true);
      expect(wrapper.hasClass('wfp--breadcrumb')).toEqual(true);
    });
  });
});