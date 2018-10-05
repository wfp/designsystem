import React from 'react';
import User from '../User';
import { mount, shallow } from 'enzyme';

describe('User', () => {
  describe('renders as expected', () => {
    const wrapper = mount(
      <User
        name="Username"
      />
    );

    const userWrapper = () => wrapper.find('div.wfp--user');

    describe('userwrapper', () => {
      it('renders as expected', () => {
        expect(userWrapper().length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(userWrapper().hasClass('wfp--user')).toEqual(true);
      });

      it('should add extra classes that are passed via className', () => {
        wrapper.setProps({ className: 'extra-class' });
        expect(userWrapper().hasClass('extra-class')).toEqual(true);
      });
    });

    const userTitle = () => wrapper.find('span');
    
    describe('usertitle', () => {
      it('renders as expected', () => {
        expect(userTitle().length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(userTitle().hasClass('wfp--user__title')).toEqual(true);
      });

      it('has the expected classes for ellipsis', () => {
        wrapper.setProps({ ellipsis: true });
        expect(userTitle().hasClass('wfp--user__title--ellipsis')).toEqual(true);
      });

      it('should set value as expected', () => {
        wrapper.setProps({ name: 'Max Mustermann' });
        expect(userTitle().text()).toEqual('Max Mustermann');
      });
    });
  });
});
