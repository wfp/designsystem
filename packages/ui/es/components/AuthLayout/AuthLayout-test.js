import React from 'react';
import AuthLayout from './AuthLayout';
import { shallow } from 'enzyme';
describe('AuthLayout', function () {
  describe('renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(AuthLayout, null, /*#__PURE__*/React.createElement("div", null, "This is image content"), /*#__PURE__*/React.createElement("div", null, "Auth content ")));

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