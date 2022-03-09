import React from 'react';
import AnchorNavigation from './AnchorNavigation';
import Link from '../Link';
import { shallow } from 'enzyme';

describe('AnchorNavigation', () => {
  describe('renders as expected', () => {
    const wrapper = shallow(
      <AnchorNavigation title="title">
        <Link href="#">Item two</Link>
        <Link href="#">Item three</Link>
      </AnchorNavigation>
    );

    const anchorWrapper = () => wrapper.find('div.wfp--anchor-navigation');

    describe('anchorWrapper', () => {
      it('renders as expected', () => {
        expect(anchorWrapper().props().children.length).toBe(2);
      });
      it('renders classes as expected', () => {
        expect(anchorWrapper().hasClass('wfp--anchor-navigation')).toEqual(
          true
        );
      });
    });

    const titleWrapper = () => wrapper.find('div.wfp--anchor-header-title');

    describe('titleWrapper', () => {
      it('renders as expected', () => {
        expect(titleWrapper().length).toBe(1);
      });
      it('renders classes as expected', () => {
        expect(titleWrapper().hasClass('wfp--anchor-header-title')).toEqual(
          true
        );
      });
    });

    const contentWrapper = () => wrapper.find('div.wfp--anchor-content');

    describe('contentWrapper', () => {
      it('renders classes as expected', () => {
        expect(contentWrapper().hasClass('wfp--anchor-content')).toEqual(true);
      });
    });
  });
});
