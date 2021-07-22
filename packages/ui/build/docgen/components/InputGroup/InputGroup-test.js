"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InputGroup', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, {
      defaultSelected: "female",
      name: "gender"
    }, /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
      labelText: "Male",
      value: "male"
    }), /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
      labelText: "Female",
      value: "female"
    })));
    describe('wrapping div', function () {
      var div = wrapper.first('div');
      it('renders a div', function () {
        expect(div.length).toEqual(1);
      });
      it('sets classes that are passed via className prop', function () {
        wrapper.setProps({
          className: 'extra-class'
        });
        expect(div.hasClass('extra-class'));
      });
      it('sets disabled attribute if disabled prop is set', function () {
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.first().props().disabled).toEqual(true);
      });
      it('should set checked property based on defaultSelected prop', function () {
        expect(wrapper.props().defaultSelected).toEqual('female');
      });
    });
    describe('children', function () {
      var radioButton = function radioButton() {
        return wrapper.find(_RadioButton.default);
      };

      it('renders expected number of children', function () {
        expect(radioButton().length).toEqual(2);
      }); // it('should set checked property based on valueSelected prop', () => {
      //   wrapper.setProps({ valueSelected: 'male' });
      //   console.log(radioButton().first().props());
      //   expect(radioButton().first().props().checked).toEqual(true);
      //   wrapper.setProps({ valueSelected: 'female' });
      //   expect(radioButton().last().props().checked).toEqual(true);
      // });

      it('should set expected props on children', function () {
        var firstChild = radioButton().first();
        expect(wrapper.props().name).toEqual('gender');
        expect(firstChild.props().value).toEqual('male');
      });
    });
  });
  describe('onChange event', function () {
    var onChange = jest.fn();
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, {
      onChange: onChange,
      name: "gender"
    }, /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
      labelText: "Male",
      value: "male",
      checked: false,
      onChange: function onChange() {}
    }), /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
      labelText: "Female",
      value: "female",
      onChange: function onChange() {}
    })));
    var firstRadio = wrapper.find(_RadioButton.default).first();
    var args = ['male', 'gender', {
      test: 'test event'
    }];
    it('first child should not have checked set initially', function () {
      expect(firstRadio.props().checked).toEqual(false);
    });
    it('calling onChange with same args should not call onChange prop', function () {
      var _firstRadio$props;

      onChange.mockClear();

      (_firstRadio$props = firstRadio.props()).onChange.apply(_firstRadio$props, args);

      expect(onChange).not.toHaveBeenCalled();
    });
  });
  describe('Getting derived state from props', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_.default, {
      valueSelected: "male",
      defaultSelected: "female",
      name: "gender"
    }, /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
      labelText: "Male",
      value: "male"
    }), /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
      labelText: "Female",
      value: "female"
    })));
    it('should initialize the current selection from props', function () {
      expect(wrapper.state().selected).toEqual('male');
    });
    it('should change the current selection upon change in props', function () {
      wrapper.setProps({
        valueSelected: 'male'
      });
      wrapper.setState({
        selected: 'male'
      });
      wrapper.setProps({
        valueSelected: undefined
      });
      expect(wrapper.state().selected).toEqual('female');
    });
    it('should avoid change the current selection upon setting props, unless there the value actually changes', function () {
      wrapper.setProps({
        valueSelected: 'female'
      });
      wrapper.setState({
        selected: 'male'
      });
      wrapper.setProps({
        valueSelected: 'female'
      });
      expect(wrapper.state().selected).toEqual('male');
    });
  });
});