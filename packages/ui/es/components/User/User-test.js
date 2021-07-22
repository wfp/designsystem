import React from 'react';
import User from '../User';
import { mount } from 'enzyme';
describe('User', function () {
  describe('renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(User, {
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