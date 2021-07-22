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

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
import { iconCheckmark, iconWarning, iconWarningSolid, iconInfoSolid } from '@wfp/icons';
var iconLookup = {
  warning: {
    icon: iconWarning
  },
  error: {
    icon: iconWarningSolid
  },
  info: {
    icon: iconInfoSolid
  },
  success: {
    icon: iconCheckmark
  }
};
/**
 *  The Blockquote element indicates that the enclosed text is an extended quotation or information. It is rendered visually by a surrounding box. */

var Blockquote = /*#__PURE__*/function (_React$Component) {
  _inherits(Blockquote, _React$Component);

  var _super = _createSuper(Blockquote);

  function Blockquote(props) {
    var _this;

    _classCallCheck(this, Blockquote);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleBlockquote", function () {
      if (_this.props.toggleable) _this.setState({
        open: !_this.state.open
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Blockquote, [{
    key: "render",
    value:
    /*showInnerHtml = content => {
      return { __html: content };
    };*/
    function render() {
      var _classNames;

      var _this$props = this.props,
          actionButtons = _this$props.actionButtons,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          children = _this$props.children,
          error = _this$props.error,
          style = _this$props.style,
          title = _this$props.title,
          toggleable = _this$props.toggleable,
          icon = _this$props.icon,
          light = _this$props.light,
          code = _this$props.code,
          warning = _this$props.warning,
          withIcon = _this$props.withIcon,
          info = _this$props.info,
          kind = _this$props.kind;
      var blockquoteClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--blockquote"), true), _defineProperty(_classNames, "".concat(prefix, "--blockquote--toggleable"), toggleable), _defineProperty(_classNames, "".concat(prefix, "--blockquote--light"), light), _defineProperty(_classNames, "".concat(prefix, "--blockquote--code"), code), _defineProperty(_classNames, "".concat(prefix, "--blockquote--no-content"), !children), _defineProperty(_classNames, "".concat(prefix, "--blockquote--error"), kind === 'error' || error), _defineProperty(_classNames, "".concat(prefix, "--blockquote--warning"), kind === 'warning' || warning), _defineProperty(_classNames, "".concat(prefix, "--blockquote--success"), kind === 'success'), _defineProperty(_classNames, "".concat(prefix, "--blockquote--info"), kind === 'info' || info), _defineProperty(_classNames, "".concat(prefix, "--blockquote--with-icon"), withIcon || icon), _defineProperty(_classNames, "".concat(prefix, "--blockquote--toggle--open"), this.state.open), _defineProperty(_classNames, "".concat(className), className), _classNames));
      var blockquoteContentClass = classNames("".concat(prefix, "--blockquote__content"), _defineProperty({}, "".concat(className), contentClassName)); // @deprecated Only kind is allowed

      var lookup = warning || kind === 'warning' ? iconLookup['warning'] : error || kind === 'error' ? iconLookup['error'] : kind === 'success' ? iconLookup['success'] : iconLookup['info'];
      var iconElement = /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--blockquote__icon ").concat(prefix, "--blockquote__icon--custom")
      }, icon) : withIcon || icon ? /*#__PURE__*/React.createElement(Icon, {
        icon: icon ? icon : lookup.icon,
        width: 48,
        height: 48,
        description: "Blockquote Icon",
        className: "".concat(prefix, "--blockquote__icon")
      }) : null;
      return /*#__PURE__*/React.createElement("div", {
        className: blockquoteClass
      }, iconElement && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--blockquote__icon-wrapper")
      }, iconElement), /*#__PURE__*/React.createElement("div", {
        className: blockquoteContentClass,
        style: style
      }, (title || toggleable) && /*#__PURE__*/React.createElement("div", {
        onClick: this.toggleBlockquote,
        onKeyDown: this.toggleBlockquote,
        className: "".concat(prefix, "--blockquote__title"),
        role: "button",
        tabIndex: 0
      }, title ? title : this.state.open ? 'Hide content' : 'Show content'), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--blockquote__inside")
      }, children)), actionButtons && /*#__PURE__*/React.createElement("div", {
        className: "wfp--blockquote__action-buttons"
      }, actionButtons));
    }
  }]);

  return Blockquote;
}(React.Component);

Blockquote.propTypes = {
  /**
   * Specify a className of your `Blockquote`
   */
  className: PropTypes.string,

  /**
   * Specify the content of your `Blockquote`
   */
  children: PropTypes.node,

  /**
   * Show content formated as code
   */
  code: PropTypes.bool,

  /**
   * Display light version of Blockquote
   */
  light: PropTypes.bool,

  /**
   * Show options to show and hide the Blockquote when title is clicked
   */
  toggleable: PropTypes.bool,

  /**
   * Show title for Blockquote
   */
  title: PropTypes.node,

  /**
   * Specify the type of your Blockquote Options are `info` `error` `warning` `info`
   */
  kind: PropTypes.oneOf(['info', 'warning', 'error', 'success']),

  /**
   * Specify if an Icon should be displayed
   */
  withIcon: PropTypes.bool,

  /**
   * Specify a custom icon. Can be either a `Icon` object or React component
   */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object])
};
export default Blockquote;