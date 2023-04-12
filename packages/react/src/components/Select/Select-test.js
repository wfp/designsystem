/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import Select from '.';
import SelectItem from '../SelectItem';
import SelectSkeleton from './Select.Skeleton';
import { mount, shallow } from 'enzyme';
import { CaretDown } from '@un/icons-react';

describe('Select', () => {
  describe('Renders as expected', () => {
    const wrapper = mount(
      <Select
        id="testing"
        labelText="Select"
        className="extra-class"
        helperText="Helper text"
        required>
        <SelectItem />
        <SelectItem />
      </Select>
    );

    const selectContainer = wrapper.find(
      '.wfp--form-item > .wfp--input-wrapper'
    );
    const label = wrapper.find('label');
    const select = wrapper.find('select');
    const selectWrapper = wrapper.find('.wfp--select');
    const helper = wrapper.find('.wfp--form__helper-text');

    describe('selectContainer', () => {
      it('renders a container', () => {
        debugger;
        expect(selectContainer.length).toEqual(1);
      });

      it('has the expected classes', () => {
        expect(selectWrapper.hasClass('wfp--select')).toEqual(true);
      });

      it('applies extra classes specified via className', () => {
        expect(selectWrapper.hasClass('extra-class')).toEqual(true);
      });

      it('has the expected default iconDescription', () => {
        expect(wrapper.props().iconDescription).toEqual('open list of options');
      });

      it('adds new iconDescription when passed via props', () => {
        wrapper.setProps({ iconDescription: 'new description' });
        expect(wrapper.props().iconDescription).toEqual('new description');
      });

      it('should specify light select as expected', () => {
        expect(wrapper.props().light).toEqual(false);
        wrapper.setProps({ light: true });
        expect(wrapper.props().light).toEqual(true);
      });
    });

    describe('select', () => {
      it('renders a select', () => {
        expect(select.length).toEqual(1);
      });

      it('has the expected classes', () => {
        expect(select.hasClass('wfp--select-input')).toEqual(true);
      });

      it('has the expected id', () => {
        expect(select.props().id).toEqual('testing');
      });

      it('should set defaultValue as expected', () => {
        wrapper.setProps({ defaultValue: 'select-1' });
        expect(wrapper.find('select').props().defaultValue).toEqual('select-1');
      });

      it('should set disabled as expected', () => {
        expect(select.props().disabled).toEqual(undefined);
        wrapper.setProps({ disabled: true });
        expect(wrapper.find('select').props().disabled).toEqual(true);
      });

      it('renders children as expected', () => {
        expect(select.props().children.length).toEqual(2);
      });
    });

    describe('label', () => {
      it('renders a label', () => {
        expect(label.length).toEqual(1);
      });

      it('has the expected classes', () => {
        expect(label.hasClass('wfp--label')).toEqual(true);
      });

      it('has the expected htmlFor value', () => {
        expect(label.props().htmlFor).toEqual('testing');
      });

      it('renders children as expected', () => {
        expect(label.props().children).toEqual(['Select', '*']);
      });
    });

    describe('helper', () => {
      it('renders a helper', () => {
        expect(helper.length).toEqual(1);
      });

      it('renders children as expected', () => {
        wrapper.setProps({
          helperText: (
            <span>
              This helper text has <a href="#">a link</a>.
            </span>
          ),
        });
        const renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.props().children).toEqual(
          <span>
            This helper text has <a href="#">a link</a>.
          </span>
        );
      });

      it('should set helper text as expected', () => {
        wrapper.setProps({ helperText: 'Helper text' });
        expect(helper.text()).toEqual('Helper text');
      });
    });
  });
  describe('Renders as expected', () => {
    const wrapper = mount(
      <Select id="testing" labelText="Select" className="extra-class" inline>
        <SelectItem />
        <SelectItem />
      </Select>
    );

    const selectContainer = wrapper.find('.wfp--form-item > div');

    /* TODO: add inline to Input component
    
    it('has the expected classes', () => {
      expect(selectContainer.hasClass('wfp--select--inline')).toEqual(true);
    });*/
  });
});

describe('SelectSkeleton', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<SelectSkeleton />);

    const select = wrapper.find('.wfp--select');

    it('Has the expected classes', () => {
      expect(select.hasClass('wfp--skeleton')).toEqual(true);
    });
  });
});
