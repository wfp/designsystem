import React from 'react';
import Empty from '../Empty';
import { shallow } from 'enzyme';

describe('Empty', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<Empty title="title" kind="large" />);

    const emptyWrapper = () => wrapper.find('div.wfp--empty');

    describe('emptyWrapper', () => {
      it('renders as expected', () => {
        expect(emptyWrapper().length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(emptyWrapper().hasClass('wfp--empty')).toEqual(true);
      });
    });

    const emptyIcon = () => wrapper.find('div.wfp--empty__icon');

    describe('emptyIcon', () => {
      it('renders as expected', () => {
        expect(emptyIcon().length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(emptyIcon().hasClass('wfp--empty__icon')).toEqual(true);
      });
    });

    const emptyText = () => wrapper.find('div.wfp--empty__text');

    describe('emptyText', () => {
      it('renders as expected', () => {
        expect(emptyText().length).toBe(1);
      });
      it('renders children as expected', () => {
        expect(emptyText().props().children).toEqual([<h2>title</h2>, <p />]);
      });

      it('renders title as expected', () => {
        expect(emptyText().find('h2').length).toBe(1);
      });

      it('renders additional content as expected', () => {
        expect(emptyText().find('p').length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(emptyText().hasClass('wfp--empty__text')).toEqual(true);
      });
    });

    const emptyButton = () => wrapper.find('div.wfp--empty__button');

    describe('emptyButton', () => {
      it('has the expected classes', () => {
        expect(emptyButton().hasClass('wfp--empty__button')).toEqual(true);
      });
    });
  });
});
