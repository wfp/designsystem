"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _configureStore = _interopRequireDefault(require("../../internal/configureStore"));

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _RfFormJest = _interopRequireDefault(require("../../internal/RfFormJest"));

var _ReduxFormWrapper = _interopRequireDefault(require("../ReduxFormWrapper"));

var _TextArea = _interopRequireDefault(require("../TextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FormInput', function () {
  describe('should render as expected', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: _configureStore.default
    }, /*#__PURE__*/_react.default.createElement(_RfFormJest.default, null, /*#__PURE__*/_react.default.createElement(_reduxForm.Field, {
      name: "email",
      component: _ReduxFormWrapper.default,
      inputComponent: _TextArea.default,
      labelText: "Email Input"
    }))));
    /* const textarea = () => wrapper.find('textarea');
     describe('label', () => {
      it('renders a textarea', () => {
        expect(textarea().length).toEqual(1);
      });
       it('has the expected classes', () => {
        expect(textarea().hasClass('wfp--text-area')).toEqual(true);
      });
       it('applies extra classes specified via className', () => {
        expect(textarea().hasClass('extra-class')).toEqual(true);
      });
    });*/

    describe('label', function () {
      //wrapper.find(Field).setProps({ labelText: 'Email Input' });
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
  });
});