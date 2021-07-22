/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import Icon from '../Icon';
import Select from '../Select';
import SelectItem from '../SelectItem';
import SelectSkeleton from '../Select/Select.Skeleton';
import { mount, shallow } from 'enzyme';
import { iconCaretDown } from '@wfp/icons';
describe('Select', function () {
  describe('Renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Select, {
      id: "testing",
      labelText: "Select",
      className: "extra-class",
      helperText: "Helper text",
      required: true
    }, /*#__PURE__*/React.createElement(SelectItem, null), /*#__PURE__*/React.createElement(SelectItem, null)));
    var selectContainer = wrapper.find('.wfp--form-item > .wfp--input-wrapper');
    var label = wrapper.find('label');
    var select = wrapper.find('select');
    var selectWrapper = wrapper.find('.wfp--select');
    var helper = wrapper.find('.wfp--form__helper-text');
    describe('selectContainer', function () {
      it('renders a container', function () {
        debugger;
        expect(selectContainer.length).toEqual(1);
      });
      it('renders the down arrow icon', function () {
        expect(selectContainer.find(Icon).length).toEqual(1);
      });
      it('should use correct icon', function () {
        var icon = wrapper.find(Icon);
        expect(icon.props().icon).toEqual(iconCaretDown);
      });
      it('has the expected classes', function () {
        expect(selectWrapper.hasClass('wfp--select')).toEqual(true);
      });
      it('applies extra classes specified via className', function () {
        expect(selectWrapper.hasClass('extra-class')).toEqual(true);
      });
      it('has the expected default iconDescription', function () {
        expect(wrapper.props().iconDescription).toEqual('open list of options');
      });
      it('adds new iconDescription when passed via props', function () {
        wrapper.setProps({
          iconDescription: 'new description'
        });
        expect(wrapper.props().iconDescription).toEqual('new description');
      });
      it('should have iconDescription match Icon component description prop', function () {
        var matches = wrapper.props().iconDescription === wrapper.find(Icon).props().description;
        expect(matches).toEqual(true);
      });
      it('should specify light select as expected', function () {
        expect(wrapper.props().light).toEqual(false);
        wrapper.setProps({
          light: true
        });
        expect(wrapper.props().light).toEqual(true);
      });
    });
    describe('select', function () {
      it('renders a select', function () {
        expect(select.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(select.hasClass('wfp--select-input')).toEqual(true);
      });
      it('has the expected id', function () {
        expect(select.props().id).toEqual('testing');
      });
      it('should set defaultValue as expected', function () {
        wrapper.setProps({
          defaultValue: 'select-1'
        });
        expect(wrapper.find('select').props().defaultValue).toEqual('select-1');
      });
      it('should set disabled as expected', function () {
        expect(select.props().disabled).toEqual(undefined);
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.find('select').props().disabled).toEqual(true);
      });
      it('renders children as expected', function () {
        expect(select.props().children.length).toEqual(2);
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('wfp--label')).toEqual(true);
      });
      it('has the expected htmlFor value', function () {
        expect(label.props().htmlFor).toEqual('testing');
      });
      it('renders children as expected', function () {
        expect(label.props().children).toEqual(['Select', '*']);
      });
    });
    describe('helper', function () {
      it('renders a helper', function () {
        expect(helper.length).toEqual(1);
      });
      it('renders children as expected', function () {
        wrapper.setProps({
          helperText: /*#__PURE__*/React.createElement("span", null, "This helper text has ", /*#__PURE__*/React.createElement("a", {
            href: "#"
          }, "a link"), ".")
        });
        var renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.props().children).toEqual( /*#__PURE__*/React.createElement("span", null, "This helper text has ", /*#__PURE__*/React.createElement("a", {
          href: "#"
        }, "a link"), "."));
      });
      it('should set helper text as expected', function () {
        wrapper.setProps({
          helperText: 'Helper text'
        });
        expect(helper.text()).toEqual('Helper text');
      });
    });
  });
  describe('Renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Select, {
      id: "testing",
      labelText: "Select",
      className: "extra-class",
      inline: true
    }, /*#__PURE__*/React.createElement(SelectItem, null), /*#__PURE__*/React.createElement(SelectItem, null)));
    var selectContainer = wrapper.find('.wfp--form-item > div');
    /* TODO: add inline to Input component
    
    it('has the expected classes', () => {
      expect(selectContainer.hasClass('wfp--select--inline')).toEqual(true);
    });*/
  });
});
describe('SelectSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow( /*#__PURE__*/React.createElement(SelectSkeleton, null));
    var select = wrapper.find('.wfp--select');
    it('Has the expected classes', function () {
      expect(select.hasClass('wfp--skeleton')).toEqual(true);
    });
  });
});