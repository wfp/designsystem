"use strict";

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _Select2 = _interopRequireDefault(require("../Select/Select.Skeleton"));

var _enzyme = require("enzyme");

var _icons = require("@wfp/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/href-no-hash */
describe('Select', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      id: "testing",
      labelText: "Select",
      className: "extra-class",
      helperText: "Helper text",
      required: true
    }, /*#__PURE__*/_react.default.createElement(_SelectItem.default, null), /*#__PURE__*/_react.default.createElement(_SelectItem.default, null)));
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
        expect(selectContainer.find(_Icon.default).length).toEqual(1);
      });
      it('should use correct icon', function () {
        var icon = wrapper.find(_Icon.default);
        expect(icon.props().icon).toEqual(_icons.iconCaretDown);
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
        var matches = wrapper.props().iconDescription === wrapper.find(_Icon.default).props().description;
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
        expect(helper.text()).toEqual('Helper text');
      });
    });
  });
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      id: "testing",
      labelText: "Select",
      className: "extra-class",
      inline: true
    }, /*#__PURE__*/_react.default.createElement(_SelectItem.default, null), /*#__PURE__*/_react.default.createElement(_SelectItem.default, null)));
    var selectContainer = wrapper.find('.wfp--form-item > div');
    /* TODO: add inline to Input component
    
    it('has the expected classes', () => {
      expect(selectContainer.hasClass('wfp--select--inline')).toEqual(true);
    });*/
  });
});
describe('SelectSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Select2.default, null));
    var select = wrapper.find('.wfp--select');
    it('Has the expected classes', function () {
      expect(select.hasClass('wfp--skeleton')).toEqual(true);
    });
  });
});