function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["modalHeading", "modalLabel", "modalFooter", "modalSecondaryAction", "modalAriaLabel", "passiveModal", "secondaryButtonText", "primaryButtonText", "backgroundImage", "open", "lazyLoad", "onRequestClose", "onRequestSubmit", "onSecondarySubmit", "iconDescription", "inPortal", "primaryButtonDisabled", "secondaryButtonDisabled", "danger", "hideClose", "wide", "type", "selectorPrimaryFocus", "selectorsFloatingMenus", "shouldSubmitOnEnter"];

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

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { iconClose } from '@wfp/icons';
import Icon from '../Icon';
import Button from '../Button';
import settings from '../../globals/js/settings';
var prefix = settings.prefix;
var matchesFuncName = typeof Element !== 'undefined' && ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(function (name) {
  return typeof Element.prototype[name] === 'function';
})[0];
var modalRoot = typeof document !== 'undefined' ? document.body : undefined;
/** Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content. */

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "button", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "outerModal", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "innerModal", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "elementOrParentIsFloatingMenu", function (target) {
      var _this$props$selectors = _this.props.selectorsFloatingMenus,
          selectorsFloatingMenus = _this$props$selectors === void 0 ? [".".concat(prefix, "--overflow-menu-options"), ".".concat(prefix, "--tooltip"), '.flatpickr-calendar'] : _this$props$selectors;

      if (target && typeof target.closest === 'function') {
        return selectorsFloatingMenus.some(function (selector) {
          return target.closest(selector);
        });
      } else {
        // Alternative if closest does not exist.
        while (target) {
          if (typeof target[matchesFuncName] === 'function') {
            if ( // eslint-disable-next-line no-loop-func
            selectorsFloatingMenus.some(function (selector) {
              return target[matchesFuncName](selector);
            })) {
              return true;
            }
          }

          target = target.parentNode;
        }

        return false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if (evt.which === 27) {
        _this.props.onRequestClose(evt, 'key');
      }

      if (evt.which === 13 && _this.props.shouldSubmitOnEnter) {
        _this.props.onRequestSubmit(evt, 'key');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      if (_this.innerModal.current && !_this.innerModal.current.contains(evt.target) && !_this.elementOrParentIsFloatingMenu(evt.target)) {
        _this.props.onRequestClose(evt, 'background');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseButton", function (evt) {
      _this.props.onRequestClose(evt, 'button');
    });

    _defineProperty(_assertThisInitialized(_this), "focusModal", function () {
      if (_this.outerModal.current) {
        _this.outerModal.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (evt) {
      // Keyboard trap
      if (_this.innerModal.current && _this.props.open && evt.relatedTarget && !_this.innerModal.current.contains(evt.relatedTarget) && !_this.elementOrParentIsFloatingMenu(evt.relatedTarget)) {
        _this.focusModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function (focusContainerElement) {
      if (_this.props.selectorPrimaryFocus === false) {
        return;
      }

      var primaryFocusElement = focusContainerElement.querySelector(_this.props.selectorPrimaryFocus);

      if (primaryFocusElement) {
        primaryFocusElement.focus();
        return;
      }

      if (_this.button && _this.button.current) {
        _this.button.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function (evt) {
      if (_this.outerModal.current.offsetWidth && _this.outerModal.current.offsetHeight && _this.beingOpen) {
        _this.focusButton(evt.currentTarget);

        _this.beingOpen = false;
      }
    });

    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.beingOpen = true;
      } else if (prevProps.open && !this.props.open) {
        this.beingOpen = false;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      modalRoot.appendChild(this.el);

      if (!this.props.open) {
        return;
      }

      this.focusButton(this.innerModal.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          modalHeading = _this$props.modalHeading,
          modalLabel = _this$props.modalLabel,
          modalFooter = _this$props.modalFooter,
          modalSecondaryAction = _this$props.modalSecondaryAction,
          modalAriaLabel = _this$props.modalAriaLabel,
          passiveModal = _this$props.passiveModal,
          secondaryButtonText = _this$props.secondaryButtonText,
          primaryButtonText = _this$props.primaryButtonText,
          backgroundImage = _this$props.backgroundImage,
          open = _this$props.open,
          lazyLoad = _this$props.lazyLoad,
          onRequestClose = _this$props.onRequestClose,
          onRequestSubmit = _this$props.onRequestSubmit,
          onSecondarySubmit = _this$props.onSecondarySubmit,
          iconDescription = _this$props.iconDescription,
          inPortal = _this$props.inPortal,
          primaryButtonDisabled = _this$props.primaryButtonDisabled,
          secondaryButtonDisabled = _this$props.secondaryButtonDisabled,
          danger = _this$props.danger,
          hideClose = _this$props.hideClose,
          wide = _this$props.wide,
          type = _this$props.type,
          selectorPrimaryFocus = _this$props.selectorPrimaryFocus,
          selectorsFloatingMenus = _this$props.selectorsFloatingMenus,
          shouldSubmitOnEnter = _this$props.shouldSubmitOnEnter,
          other = _objectWithoutProperties(_this$props, _excluded);

      if (open === false && lazyLoad) {
        return null;
      }

      var onSecondaryButtonClick = onSecondarySubmit ? onSecondarySubmit : onRequestClose;
      var modalClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--modal"), true), _defineProperty(_classNames, "".concat(prefix, "--modal--wide"), wide), _defineProperty(_classNames, "".concat(prefix, "--modal--tall"), !passiveModal), _defineProperty(_classNames, "".concat(prefix, "--modal--background-image"), backgroundImage), _defineProperty(_classNames, 'is-visible', open), _defineProperty(_classNames, "".concat(prefix, "--modal--warning"), type === 'warning' || this.props.warning), _defineProperty(_classNames, "".concat(prefix, "--modal--danger"), type === 'danger' || this.props.danger), _defineProperty(_classNames, this.props.className, this.props.className), _classNames));
      var modalButton = !hideClose ? /*#__PURE__*/React.createElement("button", {
        className: "".concat(prefix, "--modal-close"),
        type: "button",
        onClick: this.handleCloseButton,
        ref: this.button
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: iconClose,
        className: "".concat(prefix, "--modal-close__icon"),
        description: iconDescription
      })) : null;
      var modalBody = /*#__PURE__*/React.createElement("div", {
        ref: this.innerModal,
        role: "dialog",
        className: "".concat(prefix, "--modal-container"),
        "aria-label": modalAriaLabel
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--modal-header")
      }, passiveModal && modalButton, /*#__PURE__*/React.createElement("div", null, modalLabel && /*#__PURE__*/React.createElement("h4", {
        className: "".concat(prefix, "--modal-header__label")
      }, modalLabel), /*#__PURE__*/React.createElement("h2", {
        className: "".concat(prefix, "--modal-header__heading")
      }, modalHeading)), modalSecondaryAction && /*#__PURE__*/React.createElement(React.Fragment, null, modalSecondaryAction), !passiveModal && modalButton), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--modal-content")
      }, this.props.children), !passiveModal && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--modal-footer")
      }, !modalFooter ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--modal__buttons-container")
      }, secondaryButtonText && /*#__PURE__*/React.createElement(Button, {
        kind: danger ? 'tertiary' : 'secondary',
        disabled: secondaryButtonDisabled,
        onClick: onSecondaryButtonClick
      }, secondaryButtonText), /*#__PURE__*/React.createElement(Button, {
        kind: danger ? 'danger--primary' : 'primary',
        disabled: primaryButtonDisabled,
        onClick: onRequestSubmit,
        inputref: this.button
      }, primaryButtonText)) : /*#__PURE__*/React.createElement("div", null, modalFooter(this.props))));
      var modal = /*#__PURE__*/React.createElement("div", _extends({}, other, {
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        onBlur: this.handleBlur,
        className: modalClasses,
        style: backgroundImage ? {
          backgroundImage: "url(".concat(backgroundImage, ")")
        } : undefined,
        role: "presentation",
        tabIndex: -1,
        onTransitionEnd: this.props.open ? this.handleTransitionEnd : undefined,
        ref: this.outerModal
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "--modal-inner")
      }, modalBody));

      if (inPortal) {
        return /*#__PURE__*/ReactDOM.createPortal(modal, this.el);
      } else {
        return modal;
      }
    }
  }]);

  return Modal;
}(Component);

_defineProperty(Modal, "propTypes", {
  /**
   * Provide the contents of your Modal
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,

  /**
   * Specify whether the modals content should be only loaded when the `Modal` is `open`
   */
  lazyLoad: PropTypes.bool,

  /**
   * Specify whether the modal should be button-less
   */
  passiveModal: PropTypes.bool,

  /**
   * Specify a handler for closing modal.
   * The handler should care of closing modal, e.g. changing `open` prop.
   */
  onRequestClose: PropTypes.func,

  /**
   * Specify the DOM element ID of the top-level node.
   */
  id: PropTypes.string,

  /**
   * Specify the content of the modal header title.
   */
  modalHeading: PropTypes.string,

  /**
   * Specify the content of the modal header label.
   */
  modalLabel: PropTypes.node,

  /**
   * Specify the a function which renders a custom ModalFooter.
   */
  modalFooter: PropTypes.func,

  /**
   * Specify a label to be read by screen readers on the modal root node
   */
  modalAriaLabel: PropTypes.string,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,

  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,

  /**
   * Specify a handler for "submitting" modal.
   * The handler should care of closing modal, e.g. changing `open` prop, if necessary.
   */
  onRequestSubmit: PropTypes.func,

  /**
   * Specify a handler for a key press modal
   */
  onKeyDown: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  primaryButtonDisabled: PropTypes.bool,

  /**
   * Specify whether the secondary Button should be disabled, or not
   */
  secondaryButtonDisabled: PropTypes.bool,

  /**
   * Specify a handler for the secondary button.
   * Useful if separate handler from `onRequestClose` is desirable
   */
  onSecondarySubmit: PropTypes.func,

  /**
   * Specify whether the Modal is for dangerous actions
   */
  danger: PropTypes.bool,

  /**
   * Specify if Enter key should be used as "submit" action
   */
  shouldSubmitOnEnter: PropTypes.bool,

  /**
   * Specify CSS selectors that match DOM elements working as floating menus.
   * Focusing on those elements won't trigger "focus-wrap" behavior
   */
  selectorsFloatingMenus: PropTypes.arrayOf(PropTypes.string),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the Modal opens. If "false" no selector will be triggered
   */
  selectorPrimaryFocus: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   *  Different styling options are available `info`, `warning`, `danger`
   */
  type: PropTypes.oneOf(['info', 'warning', 'danger']),

  /**
   * If true the Modal will be rendered inside a portal at the end of the
   * body element, otherwise at the position it is placed.
   */
  inPortal: PropTypes.bool,

  /**
   * If true the Modal will be wider then the regular Modal
   */
  wide: PropTypes.bool
});

_defineProperty(Modal, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {},
  primaryButtonDisabled: false,
  secondaryButtonDisabled: false,
  onKeyDown: function onKeyDown() {},
  passiveModal: false,
  iconDescription: 'close the modal',
  inPortal: true,
  lazyLoad: false,
  modalHeading: '',
  modalLabel: '',
  selectorPrimaryFocus: '[data-modal-primary-focus]'
});

export { Modal as default };