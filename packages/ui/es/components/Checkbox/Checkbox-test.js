import React from 'react';
import Checkbox from '../Checkbox';
import CheckboxSkeleton from '../Checkbox/Checkbox.Skeleton';
import { mount } from 'enzyme';
describe('Checkbox', function () {
  describe('Renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Checkbox, {
      id: "testing",
      labelText: "testingLabel",
      className: "extra-class"
    }));
    var label = wrapper.find('label');
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('wfp--checkbox-label')).toEqual(true);
      });
      it('has the expected htmlFor value', function () {
        expect(label.props().htmlFor).toEqual('testing');
      });
      it('applies extra classes to label', function () {
        expect(label.hasClass('extra-class')).toEqual(true);
      });
      describe('input', function () {
        var input = function input() {
          return wrapper.find('input');
        };

        it('has id set as expected', function () {
          expect(input().props().id).toEqual('testing');
        });
        it('defaultChecked prop sets defaultChecked on input', function () {
          expect(input().props().defaultChecked).toBeUndefined();
          wrapper.setProps({
            defaultChecked: true
          });
          expect(input().props().defaultChecked).toEqual(true);
        });
      });
    });
  });
  it('disabled prop on component sets disabled prop on input', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Checkbox, {
      id: "test",
      labelText: "testlabel",
      disabled: true
    }));

    var input = function input() {
      return wrapper.find('input');
    };

    expect(input().props().disabled).toEqual(true);
    wrapper.setProps({
      disabled: false
    });
    expect(input().props().disabled).toEqual(false);
  });
  it('checked prop on component sets checked prop on input', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Checkbox, {
      id: "test",
      labelText: "testlabel",
      checked: true
    }));

    var input = function input() {
      return wrapper.find('input');
    };

    expect(input().props().checked).toEqual(true);
    wrapper.setProps({
      checked: false
    });
    expect(input().props().checked).toEqual(false);
  });
  it('hideLabel hides the label visually', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(Checkbox, {
      id: "test",
      labelText: "testlabel",
      hideLabel: true
    }));
    var label = wrapper.find('label');
    expect(label.length).toEqual(1);
    var span = wrapper.find('span');
    expect(span.hasClass('wfp--visually-hidden')).toEqual(true);
  });
  describe('events', function () {
    it('should invoke onChange with expected arguments', function () {
      var onChange = jest.fn();
      var id = 'test-input';
      var wrapper = mount( /*#__PURE__*/React.createElement(Checkbox, {
        labelText: "testlabel",
        id: id,
        onChange: onChange
      }));
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      var call = onChange.mock.calls[0];
      expect(call[0]).toEqual(true);
      expect(call[1]).toEqual(id);
      expect(call[2].target).toBe(inputElement);
    });
  });
});
describe('CheckboxSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = mount( /*#__PURE__*/React.createElement(CheckboxSkeleton, null));
    var label = wrapper.find('label');
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('wfp--checkbox-label')).toEqual(true);
        expect(label.hasClass('wfp--skeleton')).toEqual(true);
      });
    });
  });
});