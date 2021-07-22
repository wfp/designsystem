"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

var _NumberInput2 = _interopRequireDefault(require("../NumberInput/NumberInput.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('NumberInput', function () {
  describe('should render as expected', function () {
    var wrapper;
    var label;
    var numberInput;
    var container;
    var formItem;
    var helper;
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
        min: 0,
        max: 100,
        id: "test",
        label: "Number Input",
        className: "extra-class",
        invalidText: "invalid text",
        helperText: "testHelper",
        name: "name",
        disabled: false
      }));
      label = wrapper.find('label');
      numberInput = wrapper.find('input');
      container = wrapper.find('div.wfp--number');
      formItem = wrapper.find('.wfp--form-item');
      helper = wrapper.find('.wfp--form__helper-text');
    });
    describe('input', function () {
      it('renders a numberInput', function () {
        expect(numberInput.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(container.hasClass('wfp--number')).toEqual(true);
      });
      it('has renders with form-item wrapper', function () {
        expect(formItem.hasClass('wfp--form-item')).toEqual(true);
      });
      it('applies extra classes via className', function () {
        expect(container.hasClass('extra-class')).toEqual(true);
      });
      it('should set a min as expected', function () {
        expect(numberInput.prop('min')).toEqual(0);
        wrapper.setProps({
          min: 10
        });
        expect(wrapper.find('input').prop('min')).toEqual(10);
      });
      it('should set a max as expected', function () {
        expect(numberInput.prop('max')).toEqual(100);
        wrapper.setProps({
          max: 10
        });
        expect(wrapper.find('input').prop('max')).toEqual(10);
      });
      it('should set step as expected', function () {
        expect(numberInput.prop('step')).toEqual(1);
        wrapper.setProps({
          step: 10
        });
        expect(wrapper.find('input').prop('step')).toEqual(10);
      });
      it('should set disabled as expected', function () {
        expect(numberInput.prop('disabled')).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.find('input').prop('disabled')).toEqual(true);
      });
      it('should set invalidText as expected', function () {
        expect(wrapper.find('.wfp--form-requirement').length).toEqual(0);
        wrapper.setProps({
          invalid: true
        });
        var invalidText = wrapper.find('.wfp--form-requirement');
        expect(invalidText.length).toEqual(1);
        expect(invalidText.text()).toEqual('Provide a description that will be used as the title invalid text');
      });
      it('should hide label as expected', function () {
        expect(numberInput.prop('min')).toEqual(0);
        wrapper.setProps({
          hideLabel: true
        });
        expect(wrapper.find('label').hasClass('wfp--visually-hidden')).toEqual(true); // expect(wrapper.hasClass('wfp--number--nolabel')).toEqual(true);
      });
      describe('initial rendering', function () {
        var getWrapper = function getWrapper(min, max, value) {
          return (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
            min: min,
            max: max,
            value: value,
            id: "test",
            label: "Number Input",
            className: "extra-class"
          }));
        };

        var getNumberInput = function getNumberInput(wrapper) {
          return wrapper.find('input');
        };

        it('should set value as expected when value > min', function () {
          var wrapper = getWrapper(-1, 100, 0);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(0);
        });
        it('should set value as expected when min === 0 and value > min', function () {
          var wrapper = getWrapper(0, 100, 1);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(1);
        });
        it('should set value when min is undefined', function () {
          var wrapper = getWrapper(undefined, 100, 5);
          var numberInput = wrapper.find('input');
          expect(numberInput.prop('value')).toEqual(5);
        });
      });
    });
    describe('labelText', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass('wfp--label')).toEqual(true);
      });
    });
    describe('helper', function () {
      it('renders a helper', function () {
        expect(helper.length).toEqual(1);
      });
      it('renders children as expected', function () {
        wrapper.setProps({
          helperText: /*#__PURE__*/_react.default.createElement("span", null, "This helper text has ", /*#__PURE__*/_react.default.createElement("a", {
            href: "http://www.wfp.org"
          }, "a link"), ".")
        });
        var renderedHelper = wrapper.find('.wfp--form__helper-text');
        expect(renderedHelper.props().children).toEqual( /*#__PURE__*/_react.default.createElement("span", null, "This helper text has ", /*#__PURE__*/_react.default.createElement("a", {
          href: "http://www.wfp.org"
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
  describe('events', function () {
    describe('disabled numberInput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
        id: "test",
        onClick: onClick,
        onChange: onChange,
        disabled: true
      }));
      var input = wrapper.find('input');
      var upArrow = wrapper.find('button.up-icon');
      var downArrow = wrapper.find('button.down-icon');
      it('should be disabled when numberInput is disabled', function () {
        expect(upArrow.prop('disabled')).toEqual(true);
        expect(downArrow.prop('disabled')).toEqual(true);
      });
      it('should not invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onClick when down arrow is clicked', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).not.toBeCalled();
      });
    });
    describe('enabled numberInput', function () {
      var onClick;
      var onChange;
      var input;
      var upArrow;
      var downArrow;
      var wrapper;
      beforeEach(function () {
        onClick = jest.fn();
        onChange = jest.fn();
        wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
          id: "test",
          onClick: onClick,
          onChange: onChange,
          value: 0,
          min: 0,
          max: 100
        }));
        input = wrapper.find('input');
        upArrow = wrapper.find('button.up-icon');
        downArrow = wrapper.find('button.down-icon');
      });
      it('should invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'up');
      });
      it('should only increase the value on up arrow click if value is less than max', function () {
        wrapper.setProps({
          value: 100
        });
        upArrow.simulate('click');
        expect(wrapper.prop('value')).toEqual(100);
        expect(onClick).not.toBeCalled();
      });
      it('should only decrease the value on down arrow click if value is greater than min', function () {
        wrapper.setProps({
          value: 0
        });
        downArrow.simulate('click');
        expect(wrapper.prop('value')).toEqual(0);
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onClick when down arrow is clicked and value is 0', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should invoke onClick when down arrow is clicked and value is above min', function () {
        wrapper.setProps({
          value: 1
        });
        downArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onChange).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'down');
      });
      it('should invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).toBeCalled();
      });
    });
  });
});
describe('NumberInputSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_NumberInput2.default, null));
    var container = wrapper.find('.wfp--number');
    var label = wrapper.find('.wfp--label');
    it('has the expected classes', function () {
      expect(container.hasClass('wfp--skeleton')).toEqual(true);
      expect(label.hasClass('wfp--skeleton')).toEqual(true);
    });
  });
});