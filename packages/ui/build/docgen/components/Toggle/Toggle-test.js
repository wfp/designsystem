"use strict";

var _react = _interopRequireDefault(require("react"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _Toggle2 = _interopRequireDefault(require("../Toggle/Toggle.Skeleton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Toggle', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
      id: "toggle-1"
    }));
    var input = wrapper.find('input');
    it('Switch and label Ids should match', function () {
      var toggleLabel = wrapper.find('.wfp--toggle__label');
      expect(input.id).toEqual(toggleLabel.htmlFor);
    });
    it('should set defaultChecked as expected', function () {
      expect(input.props().defaultChecked).toEqual(false);
      wrapper.setProps({
        defaultToggled: true
      });
      expect(wrapper.find('input').props().defaultChecked).toEqual(true);
    });
    it('Can set defaultToggled state', function () {
      wrapper.setProps({
        defaultToggled: true
      });
      expect(wrapper.find('.wfp--toggle').props().defaultChecked).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      wrapper.setProps({
        className: 'extra-class'
      });
      expect(wrapper.find('div').hasClass('extra-class')).toEqual(true);
    });
    it('Can be disabled', function () {
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.find('.wfp--toggle').props().disabled).toEqual(true);
    });
    it('Can have a labelA', function () {
      wrapper.setProps({
        labelA: 'labelA-test'
      });
      expect(wrapper.find('.wfp--toggle__text--left').text()).toEqual('labelA-test');
    });
    it('Can have a labelB', function () {
      wrapper.setProps({
        labelB: 'labelB-test'
      });
      expect(wrapper.find('.wfp--toggle__text--right').text()).toEqual('labelB-test');
    });
  });
  it('toggled prop sets checked prop on input', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
      id: "test",
      toggled: true
    }));

    var input = function input() {
      return wrapper.find('input');
    };

    expect(input().props().checked).toEqual(true);
    wrapper.setProps({
      toggled: false
    });
    expect(input().props().checked).toEqual(false);
  });
  describe('events', function () {
    it('passes along onChange to <input>', function () {
      var onChange = jest.fn();
      var id = 'test-input';
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
        id: id,
        onChange: onChange
      }));
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      expect(onChange.mock.calls.map(function (call) {
        return call.map(function (arg, i) {
          return i > 0 ? arg : arg.target;
        });
      })).toEqual([[inputElement]]);
    });
    it('should invoke onToggle with expected arguments', function () {
      var onToggle = jest.fn();
      var id = 'test-input';
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
        id: id,
        onToggle: onToggle
      }));
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      var call = onToggle.mock.calls[0];
      expect(call[0]).toEqual(true);
      expect(call[1]).toEqual(id);
      expect(call[2].target).toBe(inputElement);
    });
  });
});
describe('ToggleSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Toggle2.default, null));
    var input = wrapper.find('input');
    var toggleLabel = wrapper.find('.wfp--toggle__label');
    it('Has the expected classes', function () {
      expect(input.hasClass('wfp--skeleton')).toEqual(true);
      expect(input.hasClass('wfp--toggle')).toEqual(true);
      expect(toggleLabel.hasClass('wfp--skeleton')).toEqual(true);
    });
  });
});