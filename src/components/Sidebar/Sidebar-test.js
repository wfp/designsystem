import React from 'react';
import Sidebar, {
  SidebarHeader,
  SidebarScroll,
  SidebarBackButton,
} from '../Sidebar';
import { shallow } from 'enzyme';

describe('Sidebar', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<Sidebar className="some-class">Content</Sidebar>);

    it('has classes as expected', () => {
      expect(wrapper.exists('.wfp--sidebar-content__container')).toBe(true);
    });

    it('should allow for custom classes to be applied', () => {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('Renders sidebarHeader as expected', () => {
    const wrapper = shallow(
      <SidebarHeader className="some-class">Content</SidebarHeader>
    );

    it('has classes as expected', () => {
      expect(wrapper.exists('.wfp--sidebar-content__header')).toBe(true);
    });

    it('should allow for custom classes to be applied', () => {
      expect(wrapper.hasClass('some-class')).toEqual(true);
    });
  });

  describe('Renders SidebarScroll as expected', () => {
    const wrapper = shallow(<SidebarScroll>Content</SidebarScroll>);

    it('has classes as expected', () => {
      expect(wrapper.exists('.wfp--sidebar-content__scroll')).toBe(true);
    });
  });

  describe('Renders SidebarBackButton as expected', () => {
    const wrapper = shallow(<SidebarBackButton>Content</SidebarBackButton>);

    it('has classes as expected', () => {
      expect(wrapper.exists('.wfp--sidebar-content__back-button')).toBe(true);
    });
  });
});
