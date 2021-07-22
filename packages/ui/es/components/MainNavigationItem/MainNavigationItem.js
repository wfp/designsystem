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
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { iconClose, iconCaretDown } from '@wfp/icons';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;

var MainNavigationItem = /*#__PURE__*/function (_Component) {
  _inherits(MainNavigationItem, _Component);

  var _super = _createSuper(MainNavigationItem);

  function MainNavigationItem() {
    var _this;

    _classCallCheck(this, MainNavigationItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
      if (nextProps.menuItem === nextProps.activeMenuItem) {
        document.addEventListener('mousedown', _this.handleClickOutside);
      } else {
        document.removeEventListener('mousedown', _this.handleClickOutside);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setWrapperRef", function (node) {
      _this.wrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (_this.wrapperRef && !_this.wrapperRef.contains(e.target)) {
        _this.props.onChangeSub('close');
      }
    });

    return _this;
  }

  _createClass(MainNavigationItem, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2, _classNames3;

      var _this$props = this.props,
          activeMenuItem = _this$props.activeMenuItem,
          className = _this$props.className,
          children = _this$props.children,
          menuItem = _this$props.menuItem,
          onChangeSub = _this$props.onChangeSub,
          subNavigation = _this$props.subNavigation,
          subNavWideAsContent = _this$props.subNavWideAsContent;
      var wrapperClasses = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--main-navigation__item"), true), _defineProperty(_classNames, "".concat(prefix, "--main-navigation__item--open"), menuItem === activeMenuItem), _defineProperty(_classNames, "".concat(prefix, "--content-width"), subNavigation && subNavWideAsContent), _classNames));
      var triggerClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--main-navigation__trigger"), true), _defineProperty(_classNames2, "".concat(prefix, "--main-navigation__trigger--has-sub"), subNavigation), _defineProperty(_classNames2, "".concat(prefix, "--main-navigation__trigger--open"), menuItem === activeMenuItem), _classNames2));
      var childrenWithProps = subNavigation ? /*#__PURE__*/React.cloneElement(children, {
        children: /*#__PURE__*/React.createElement(React.Fragment, null, children.props.children, /*#__PURE__*/React.createElement(Icon, {
          className: "".concat(prefix, "--main-navigation__trigger__icon"),
          icon: menuItem === activeMenuItem ? iconClose : iconCaretDown,
          fill: "#FFFFFF",
          description: "expand icon"
        })),
        onClick: function onClick(e) {
          return onChangeSub('toggle', menuItem, e);
        }
      }) : children;
      var subClasses = classNames((_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "--main-navigation__sub"), true), _defineProperty(_classNames3, "".concat(prefix, "--main-navigation__sub--open"), menuItem === activeMenuItem), _classNames3));
      return /*#__PURE__*/React.createElement("li", {
        className: wrapperClasses,
        ref: this.setWrapperRef
      }, /*#__PURE__*/React.createElement("div", {
        className: triggerClasses
      }, childrenWithProps), subNavigation && /*#__PURE__*/React.createElement("div", {
        className: subClasses,
        open: menuItem === activeMenuItem ? true : false
      }, subNavigation));
    }
  }]);

  return MainNavigationItem;
}(Component);

MainNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.element.isRequired,

  /**
   * If defined the `MainNaviationItem` will have a toggleable
   * SubNavigation. See the `SubNavigation` component for details on usage
   */
  subNavigation: PropTypes.node
};
export default MainNavigationItem;