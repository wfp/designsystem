"use strict";

var _react = _interopRequireDefault(require("react"));

var _AnchorNavigation = _interopRequireDefault(require("./AnchorNavigation"));

var _Link = _interopRequireDefault(require("../Link"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AnchorNavigation', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_AnchorNavigation.default, {
      title: "title"
    }, /*#__PURE__*/_react.default.createElement(_Link.default, {
      href: "#"
    }, "Item two"), /*#__PURE__*/_react.default.createElement(_Link.default, {
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