function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["className", "disableLabelChanges", "labelText", "multiple", "role", "tabIndex", "buttonKind", "accept", "name", "disabled"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

/* eslint react/no-multi-comp: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import uid from '../../tools/uniqueId';
import { ButtonTypes } from '../../prop-types/types'; //import Filename from '../FileUploader/Filename';

var prefix = settings.prefix;
export var FileUploaderButton = /*#__PURE__*/function (_Component) {
  _inherits(FileUploaderButton, _Component);

  var _super = _createSuper(FileUploaderButton);

  function FileUploaderButton() {
    var _this;

    _classCallCheck(this, FileUploaderButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      var files = evt.target.files;
      var length = evt.target.files.length;

      if (files && !_this.props.disableLabelChanges) {
        if (length > 1) {
          _this.setState({
            labelText: "".concat(length, " files")
          });
        } else if (length === 1) {
          _this.setState({
            labelText: files[0].name
          });
        }
      }

      _this.props.onChange(evt);
    });

    return _this;
  }

  _createClass(FileUploaderButton, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disableLabelChanges = _this$props.disableLabelChanges,
          labelText = _this$props.labelText,
          multiple = _this$props.multiple,
          role = _this$props.role,
          tabIndex = _this$props.tabIndex,
          buttonKind = _this$props.buttonKind,
          accept = _this$props.accept,
          name = _this$props.name,
          disabled = _this$props.disabled,
          other = _objectWithoutProperties(_this$props, _excluded);

      var classes = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--").concat(buttonKind), true), _defineProperty(_classNames, className, className), _classNames));
      this.uid = this.props.id || uid();
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", _extends({
        role: "button",
        tabIndex: tabIndex || 0,
        className: classes,
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 13 || evt.which === 32) {
            _this2.input.click();
          }
        },
        htmlFor: this.uid
      }, other), this.state.labelText), /*#__PURE__*/React.createElement("input", {
        className: "".concat(prefix, "--visually-hidden"),
        ref: function ref(input) {
          return _this2.input = input;
        },
        id: this.uid,
        disabled: disabled,
        type: "file",
        tabIndex: "-1",
        multiple: multiple,
        accept: accept,
        name: name,
        onChange: this.handleChange,
        onClick: function onClick(evt) {
          evt.target.value = null;
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var labelText = _ref.labelText;
      var prevLabelText = state.prevLabelText;
      return prevLabelText === labelText ? null : {
        labelText: labelText,
        prevLabelText: labelText
      };
    }
  }]);

  return FileUploaderButton;
}(Component);

_defineProperty(FileUploaderButton, "propTypes", {
  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify whether you want to disable any updates to the FileUploaderButton
   * label
   */
  disableLabelChanges: PropTypes.bool,

  /**
   * Provide a unique id for the underlying `input` node
   */
  id: PropTypes.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * this control
   */
  labelText: PropTypes.string,

  /**
   * Specify whether you want the component to list the files that have been
   * submitted to be uploaded
   */
  listFiles: PropTypes.bool,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes.bool,

  /**
   * Provide a name for the underlying `input` node
   */
  name: PropTypes.string,

  /**
   * Provide an optional `onChange` hook that is called each time the <input>
   * value changes
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Provide an accessibility role for the <FileUploaderButton>
   */
  role: PropTypes.string,

  /**
   * Provide a custom tabIndex value for the <FileUploaderButton>
   */
  tabIndex: PropTypes.number,

  /**
   * Specify the type of underlying button
   */
  buttonKind: ButtonTypes.buttonKind,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: PropTypes.arrayOf(PropTypes.string),

  /**
   * Specify whether file input is disabled
   */
  disabled: PropTypes.bool
});

_defineProperty(FileUploaderButton, "defaultProps", {
  tabIndex: 0,
  disableLabelChanges: false,
  labelText: 'Add file',
  buttonKind: 'primary',
  multiple: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  accept: [],
  disabled: false
});