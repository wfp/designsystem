"use strict";

var _react = _interopRequireDefault(require("react"));

var _User = _interopRequireDefault(require("../User"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('User', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_User.default, {
      name: "Username"
    }));

    var userWrapper = function userWrapper() {
      return wrapper.find('div.wfp--user');
    };

    describe('userwrapper', function () {
      it('renders as expected', function () {
        expect(userWrapper().length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(userWrapper().hasClass('wfp--user')).toEqual(true);
      });
      it('should add extra classes that are passed via className', function () {
        wrapper.setProps({
          className: 'extra-class'
        });
        expect(userWrapper().hasClass('extra-class')).toEqual(true);
      });
    });

    var userTitle = function userTitle() {
      return wrapper.find('span.wfp--user__title');
    };

    describe('usertitle', function () {
      it('renders as expected', function () {
        expect(userTitle().length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(userTitle().hasClass('wfp--user__title')).toEqual(true);
      });
      it('has the expected classes for ellipsis', function () {
        wrapper.setProps({
          ellipsis: true
        });
        expect(userTitle().hasClass('wfp--user__title--ellipsis')).toEqual(true);
      });
      it('should set value as expected', function () {
        wrapper.setProps({
          name: 'Max Mustermann'
        });
        expect(userTitle().text()).toEqual('Max Mustermann');
      });
    });
  });
});