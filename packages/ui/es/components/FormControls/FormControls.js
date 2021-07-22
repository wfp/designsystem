function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { iconArrowLeft, iconArrowRight } from '@wfp/icons';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var FormControls = /*#__PURE__*/function (_React$Component) {
  _inherits(FormControls, _React$Component);

  var _super = _createSuper(FormControls);

  function FormControls() {
    _classCallCheck(this, FormControls);

    return _super.apply(this, arguments);
  }

  _createClass(FormControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onNextClick = _this$props.onNextClick,
          nextDisabled = _this$props.nextDisabled,
          nextIcon = _this$props.nextIcon,
          nextHidden = _this$props.nextHidden,
          nextText = _this$props.nextText,
          onPreviousClick = _this$props.onPreviousClick,
          previousDisabled = _this$props.previousDisabled,
          previousIcon = _this$props.previousIcon,
          previousHidden = _this$props.previousHidden,
          previousText = _this$props.previousText,
          onSubmitClick = _this$props.onSubmitClick,
          submitDisabled = _this$props.submitDisabled,
          submitIcon = _this$props.submitIcon,
          submitHidden = _this$props.submitHidden,
          submitText = _this$props.submitText;
      var formControlsClasses = classNames("".concat(prefix, "--form-controls"), className);
      return /*#__PURE__*/React.createElement("div", {
        className: formControlsClasses
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--form-controls__steps")
      }, !previousHidden && /*#__PURE__*/React.createElement(Button, {
        disabled: previousDisabled,
        kind: "secondary",
        className: "".concat(prefix, "--form-controls__prev"),
        icon: previousIcon,
        onClick: onPreviousClick
      }, previousText)), /*#__PURE__*/React.createElement("div", null, !nextHidden && /*#__PURE__*/React.createElement(Button, {
        disabled: nextDisabled,
        kind: "secondary",
        className: "".concat(prefix, "--form-controls__next"),
        icon: nextIcon,
        type: "submit",
        onClick: onNextClick
      }, nextText), !submitHidden && /*#__PURE__*/React.createElement(Button, {
        disabled: submitDisabled,
        type: "submit",
        className: "next",
        icon: submitIcon,
        onClick: onSubmitClick
      }, submitText)));
    }
  }]);

  return FormControls;
}(React.Component);

_defineProperty(FormControls, "propTypes", {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  className: PropTypes.string,
  onNextClick: PropTypes.func,
  nextDisabled: PropTypes.bool,
  nextIcon: PropTypes.object,
  nextHidden: PropTypes.bool,
  nextText: PropTypes.node,
  onPreviousClick: PropTypes.func,
  previousDisabled: PropTypes.bool,
  previousIcon: PropTypes.object,
  previousHidden: PropTypes.bool,
  previousText: PropTypes.node,
  onSubmitClick: PropTypes.func,
  submitDisabled: PropTypes.bool,
  submitIcon: PropTypes.object,
  submitHidden: PropTypes.bool,
  submitText: PropTypes.node
});

_defineProperty(FormControls, "defaultProps", {
  nextIcon: iconArrowRight,
  nextText: 'Next',
  previousIcon: iconArrowLeft,
  previousText: 'Previous',
  submitText: 'Submit'
});

export { FormControls as default };