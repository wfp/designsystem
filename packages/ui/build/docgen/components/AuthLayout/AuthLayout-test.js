"use strict";

var _react = _interopRequireDefault(require("react"));

var _AuthLayout = _interopRequireDefault(require("./AuthLayout"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AuthLayout', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_AuthLayout.default, null, /*#__PURE__*/_react.default.createElement("div", null, "This is image content"), /*#__PURE__*/_react.default.createElement("div", null, "Auth content ")));

    var authWrapper = function authWrapper() {
      return wrapper.find('div.wfp--auth-wrapper');
    };

    describe('authWrapper', function () {
      it('renders as expected', function () {
        expect(authWrapper().props().children.length).toBe(2);
      });
      it('renders classes as expected', function () {
        expect(authWrapper().hasClass('wfp--auth-wrapper')).toEqual(true);
      });
    });

    var backgroundWrapper = function backgroundWrapper() {
      return wrapper.find('div.wfp--auth-background-wrapper');
    };

    describe('backgroundWrapper', function () {
      it('renders as expected', function () {
        expect(backgroundWrapper().length).toBe(1);
      });
      it('renders classes as expected', function () {
        expect(backgroundWrapper().hasClass('wfp--auth-background-wrapper')).toEqual(true);
      });
    });

    var contentWrapper = function contentWrapper() {
      return wrapper.find('div.wfp--auth-content-wrapper');
    };

    describe('contentWrapper', function () {
      it('renders as expected', function () {
        expect(contentWrapper().length).toBe(1);
      });
      it('renders classes as expected', function () {
        expect(contentWrapper().hasClass('wfp--auth-content-wrapper')).toEqual(true);
      });
    });
  });
});