function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'; //import { Values } from 'redux-form-website-template';

import Button from '../components/Button';
import Blockquote from '../components/Blockquote';
import FormLabel from '../components/FormLabel/RfFormLabel';
import { load as loadAccount } from './loadDefaultData';

var FormEl = /*#__PURE__*/function (_Component) {
  _inherits(FormEl, _Component);

  var _super = _createSuper(FormEl);

  function FormEl() {
    _classCallCheck(this, FormEl);

    return _super.apply(this, arguments);
  }

  _createClass(FormEl, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          pristine = _this$props.pristine,
          reset = _this$props.reset,
          sampleData = _this$props.sampleData,
          submitting = _this$props.submitting;
      var data = sampleData ? sampleData : {
        // used to populate "account" reducer when "Load" is clicked
        input: 13
      };
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit,
        className: "wfp-form--stacked"
      }, this.props.children, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(FormLabel, null, "Form Debug Controls"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        disabled: pristine || submitting
      }, "Submit"), "\xA0", /*#__PURE__*/React.createElement(Button, {
        type: "button",
        kind: "secondary",
        disabled: pristine || submitting,
        onClick: reset
      }, "Clear Values"), "\xA0", /*#__PURE__*/React.createElement(Button, {
        type: "button",
        kind: "secondary",
        onClick: function onClick() {
          return _this.props.load(data);
        }
      }, "Load Sample Data"), /*#__PURE__*/React.createElement(Blockquote, null)));
    }
  }]);

  return FormEl;
}(Component);

var Form = reduxForm({
  form: 'SimpleForm',
  //Form name is same
  enableReinitialize: true
})(FormEl); // You have to connect() to any reducers that you wish to connect to yourself

Form = connect(function (state) {
  return {
    initialValues: state.account.data // pull initial values from account reducer

  };
}, {
  load: loadAccount
} // bind account loading action creator
)(Form);

var RfFormWrapper = /*#__PURE__*/function (_Component2) {
  _inherits(RfFormWrapper, _Component2);

  var _super2 = _createSuper(RfFormWrapper);

  function RfFormWrapper() {
    _classCallCheck(this, RfFormWrapper);

    return _super2.apply(this, arguments);
  }

  _createClass(RfFormWrapper, [{
    key: "onSubmit",
    value: function onSubmit(submit) {
      alert('Submitted: ' + JSON.stringify(submit));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Form, _extends({
        onSubmit: this.onSubmit
      }, this.props), this.props.children);
    }
  }]);

  return RfFormWrapper;
}(Component);

export default RfFormWrapper;