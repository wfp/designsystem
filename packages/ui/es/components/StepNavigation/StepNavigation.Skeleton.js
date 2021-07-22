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

import React from 'react';

var TabsSkeleton = /*#__PURE__*/function (_React$Component) {
  _inherits(TabsSkeleton, _React$Component);

  var _super = _createSuper(TabsSkeleton);

  function TabsSkeleton() {
    _classCallCheck(this, TabsSkeleton);

    return _super.apply(this, arguments);
  }

  _createClass(TabsSkeleton, [{
    key: "render",
    value: function render() {
      var tab = /*#__PURE__*/React.createElement("li", {
        className: "wfp--tabs__nav-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "wfp--tabs__nav-link"
      }, "\xA0"));
      return /*#__PURE__*/React.createElement("nav", {
        className: "wfp--tabs wfp--skeleton"
      }, /*#__PURE__*/React.createElement("div", {
        className: "wfp--tabs-trigger"
      }, /*#__PURE__*/React.createElement("div", {
        className: "wfp--tabs-trigger-text"
      }, "\xA0"), /*#__PURE__*/React.createElement("svg", {
        width: "10",
        height: "5",
        viewBox: "0 0 10 5",
        "fill-rule": "evenodd"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M10 0L5 5 0 0z"
      }))), /*#__PURE__*/React.createElement("ul", {
        className: "wfp--tabs__nav wfp--tabs__nav--hidden"
      }, /*#__PURE__*/React.createElement("li", {
        className: "wfp--tabs__nav-item wfp--tabs__nav-item--selected"
      }, /*#__PURE__*/React.createElement("div", {
        className: "wfp--tabs__nav-link"
      }, " \xA0")), tab, tab, tab));
    }
  }]);

  return TabsSkeleton;
}(React.Component);

export { TabsSkeleton as default };