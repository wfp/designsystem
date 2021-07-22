function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["iconDescription", "status", "style"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import Icon from '../Icon';
import { iconCloseGlyph, iconCheckmarkGlyph } from '@wfp/icons';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
export var Filename = /*#__PURE__*/function (_Component) {
  _inherits(Filename, _Component);

  var _super = _createSuper(Filename);

  function Filename() {
    _classCallCheck(this, Filename);

    return _super.apply(this, arguments);
  }

  _createClass(Filename, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          iconDescription = _this$props.iconDescription,
          status = _this$props.status,
          style = _this$props.style,
          other = _objectWithoutProperties(_this$props, _excluded);

      if (status === 'uploading') {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: "".concat(prefix, "--loading"),
          style: _objectSpread(_objectSpread({}, style), {}, {
            width: '1rem',
            height: '1rem'
          })
        }, other), /*#__PURE__*/React.createElement("svg", {
          className: "".concat(prefix, "--loading__svg"),
          viewBox: "-42 -42 84 84"
        }, /*#__PURE__*/React.createElement("circle", {
          cx: "0",
          cy: "0",
          r: "37.5"
        })));
      } else if (status === 'edit') {
        return /*#__PURE__*/React.createElement(Icon, _extends({
          description: iconDescription,
          className: "".concat(prefix, "--file-close"),
          icon: iconCloseGlyph,
          style: style
        }, other));
      } else if (status === 'complete') {
        return /*#__PURE__*/React.createElement(Icon, _extends({
          description: iconDescription,
          className: "".concat(prefix, "--file-complete"),
          icon: iconCheckmarkGlyph,
          style: style
        }, other));
      } else {
        return null;
      }
    }
  }]);

  return Filename;
}(Component);

_defineProperty(Filename, "propTypes", {
  /**
   * Specify an optional object of styles to be applied inline to the root
   * node
   */
  style: PropTypes.object,

  /**
   * Specify the status of the File Upload
   */
  status: PropTypes.oneOf(['edit', 'complete', 'uploading']),

  /**
   * Provide a description for the complete/close icon that can be read by screen readers
   */
  iconDescription: PropTypes.string
});

_defineProperty(Filename, "defaultProps", {
  onKeyDown: function onKeyDown() {},
  status: 'uploading',
  style: {},
  tabIndex: 0
});