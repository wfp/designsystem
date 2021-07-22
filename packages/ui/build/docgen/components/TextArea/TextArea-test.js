"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TextArea = _interopRequireDefault(require("../TextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/href-no-hash */
describe('TextArea', function () {
  describe('should render as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TextArea.default, {
      id: "testing",
      labelText: "testlabel",
      className: "extra-class",
      helperText: "testHelper"
    }));

    var textarea = function textarea() {
      return wrapper.find('textarea');
    };

    describe('textarea', function () {
      it('renders a textarea', function () {
        expect(textarea().length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(textarea().hasClass('wfp--text-area')).toEqual(true);
      });
      it('applies extra classes specified via className', function () {
        expect(textarea().hasClass('extra-class')).toEqual(true);
      });
      it('should set rows as expected', function () {
        expect(textarea().props().rows).toEqual(4);
        wrapper.setProps({
          rows: 10
        });
        expect(textarea().props().rows).toEqual(10);
      });
      it('should set disabled as expected', function () {
        expect(textarea().props().disabled).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(textarea().props().disabled).toEqual(true);
      });
      it('should set placeholder as expected', function () {
        wrapper.setProps({
          placeholder: 'Type here'
        });
        expect(textarea().props().placeholder).toEqual('Type here');
      });
      it('should set value as expected', function () {
        wrapper.setProps({
          value: 'value set'
        });
        expect(textarea().props().value).toEqual('value set');
      });
      it('should set defaultValue as expected', function () {
        wrapper.setProps({
          defaultValue: 'default value'
        });
        expect(textarea().props().defaultValue).toEqual('default value');
      });
    });
    describe('label', function () {
      wrapper.setProps({
        labelText: 'testLabel'
      });
      var renderedLabel = wrapper.find('label');
      it('renders a label', function () {
        expect(renderedLabel.length).toEqual(1);
      });
      it('label has expected text', function () {
        expect(renderedLabel.text()).toEqual('testLabel');
      });
      it('has the expected classes', function () {
        expect(renderedLabel.hasClass('wfp--label')).toEqual(true);
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
    describe('disabled textarea', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_TextArea.default, {
        id: "test",
        labelText: "testlabel",
        onClick: onClick,
        onChange: onChange,
        disabled: true
      }));
      var textarea = wrapper.find('textarea');
      it('should not invoke onClick when textarea is clicked', function () {
        textarea.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onChange', function () {
        textarea.simulate('change');
        expect(onChange).not.toBeCalled();
      });
    });
    describe('enabled textarea', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var eventObject = {
        target: {
          value: 'test'
        }
      };
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_TextArea.default, {
        id: "test",
        labelText: "testlabel",
        onClick: onClick,
        onChange: onChange
      }));
      var textarea = wrapper.find('textarea');
      it('should invoke onClick when textarea is clicked', function () {
        textarea.simulate('click');
        expect(onClick).toBeCalled();
      });
      it('should invoke onChange when textarea value is changed', function () {
        textarea.simulate('change', eventObject);
        expect(onChange).toBeCalledWith(eventObject);
      });
    });
  });
});