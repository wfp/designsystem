"use strict";

var _react = _interopRequireDefault(require("react"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/href-no-hash */
describe('TextInput', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TextInput.default, {
      id: "test",
      className: "extra-class",
      labelText: "testlabel",
      helperText: "testHelper",
      name: "name"
    }));

    var textInput = function textInput() {
      return wrapper.find('input');
    };

    describe('input', function () {
      it('renders as expected', function () {
        expect(textInput().length).toBe(1);
      });
      it('should add extra classes that are passed via className', function () {
        expect(textInput().hasClass('extra-class')).toEqual(true);
      });
      it('should set type as expected', function () {
        expect(textInput().props().type).toEqual('text');
        wrapper.setProps({
          type: 'email'
        });
        expect(textInput().props().type).toEqual('email');
      });
      it('should set value as expected', function () {
        expect(textInput().props().defaultValue).toEqual(undefined);
        wrapper.setProps({
          defaultValue: 'test'
        });
        expect(textInput().props().defaultValue).toEqual('test');
      });
      it('should set disabled as expected', function () {
        expect(textInput().props().disabled).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(textInput().props().disabled).toEqual(true);
      });
      it('should set placeholder as expected', function () {
        expect(textInput().props().placeholder).not.toBeDefined();
        wrapper.setProps({
          placeholder: 'Enter text'
        });
        expect(textInput().props().placeholder).toEqual('Enter text');
      });
    });
    describe('label', function () {
      wrapper.setProps({
        labelText: 'Email Input'
      });
      var renderedLabel = wrapper.find('label');
      it('renders a label', function () {
        expect(renderedLabel.length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(renderedLabel.hasClass('wfp--label')).toEqual(true);
      });
      it('should set label as expected', function () {
        expect(renderedLabel.text()).toEqual('Email Input');
      });
    });
    describe('helper', function () {
      it('renders a helper', function () {
        var renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.length).toEqual(1);
      });
      it('renders children as expected', function () {
        wrapper.setProps({
          helperText: /*#__PURE__*/_react.default.createElement("span", null, "This helper text has ", /*#__PURE__*/_react.default.createElement("a", {
            href: "#"
          }, "a link"), ".")
        });
        var renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.props().children).toEqual( /*#__PURE__*/_react.default.createElement("span", null, "This helper text has ", /*#__PURE__*/_react.default.createElement("a", {
          href: "#"
        }, "a link"), "."));
      });
      it('should set helper text as expected', function () {
        wrapper.setProps({
          helperText: 'Helper text'
        });
        var renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.text()).toEqual('Helper text');
      });
    });
  });
  describe('events', function () {
    describe('disabled textinput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TextInput.default, {
        id: "test",
        labelText: "testlabel",
        onClick: onClick,
        onChange: onChange,
        disabled: true,
        name: "name"
      }));
      var input = wrapper.children();
      it('should not invoke onClick', function () {
        input.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onChange', function () {
        input.simulate('change');
        expect(onChange).not.toBeCalled();
      });
    });
    describe('enabled textinput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TextInput.default, {
        labelText: "testlabel",
        id: "test",
        onClick: onClick,
        onChange: onChange,
        name: "name"
      }));
      var inputt = wrapper.find('input');
      it('should invoke onClick when input is clicked', function () {
        inputt.simulate('click');
        expect(onClick).toBeCalled();
      });
    });
  });
});