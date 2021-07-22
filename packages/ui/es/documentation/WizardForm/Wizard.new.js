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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormSpy } from 'react-final-form';
import FormWizard from '../../components/FormWizard';
import FormControls from '../../components/FormControls';
import StepNavigation from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem';

var handleValidation = function handleValidation(props) {
  return null;
};

var Wizardr = /*#__PURE__*/function (_React$Component) {
  _inherits(Wizardr, _React$Component);

  var _super = _createSuper(Wizardr);

  function Wizardr(props) {
    var _this;

    _classCallCheck(this, Wizardr);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (values) {
      return _this.setState(function (state) {
        return {
          page: values,
          values: values
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "next", function (values) {
      return _this.setState(function (state) {
        return {
          page: Math.min(state.page + 1, _this.props.children.length - 1),
          values: values
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "previous", function () {
      return _this.setState(function (state) {
        return {
          page: Math.max(state.page - 1, 0)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function (values) {
      var activePage = React.Children.toArray(_this.props.children)[_this.state.page];

      return activePage.props.validate ? activePage.props.validate(values) : {};
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (values) {
      var _this$props = _this.props,
          children = _this$props.children,
          onSubmit = _this$props.onSubmit;
      var page = _this.state.page;
      var isLastPage = page === React.Children.count(children) - 1;

      if (isLastPage) {
        return onSubmit(values);
      } else {
        _this.next(values);
      }
    });

    _this.state = {
      page: 0,
      values: props.initialValues || {}
    };
    return _this;
  }

  _createClass(Wizardr, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _this$state = this.state,
          page = _this$state.page,
          values = _this$state.values;
      var activePage = React.Children.toArray(children)[page];
      var isLastPage = page === React.Children.count(children) - 1;
      return /*#__PURE__*/React.createElement(Form, {
        initialValues: values,
        validate: this.validate,
        onSubmit: this.handleSubmit
      }, function (_ref) {
        var handleSubmit = _ref.handleSubmit,
            submitting = _ref.submitting,
            values = _ref.values;
        return /*#__PURE__*/React.createElement("form", {
          onSubmit: handleSubmit
        }, /*#__PURE__*/React.createElement(FormWizard, {
          stickySidebar: true,
          formHeader: "Step: ".concat(page, "/4 ").concat(activePage.props.label),
          formControls: /*#__PURE__*/React.createElement(FormControls, {
            onPreviousClick: _this2.previous,
            previousHidden: page > 0 ? false : true,
            nextHidden: isLastPage,
            submitHidden: !isLastPage,
            onSubmitClick: handleSubmit
          }),
          sidebar: /*#__PURE__*/React.createElement(StepNavigation, {
            selectedPage: page,
            handleTabClick: _this2.handleTabClick
          }, React.Children.map(children, function (child, i) {
            // Ignore the first child
            return /*#__PURE__*/React.createElement(StepNavigationItem, _extends({
              page: i,
              status: page >= i ? 'complete' : 'not-started'
            }, child.props));
          }))
        }, /*#__PURE__*/React.createElement("div", {
          className: "wfp--form-long"
        }, activePage)), /*#__PURE__*/React.createElement(FormSpy, {
          subscription: {
            active: true,
            values: true
          },
          component: handleValidation
        }));
      });
    }
  }]);

  return Wizardr;
}(React.Component);

_defineProperty(Wizardr, "propTypes", {
  onSubmit: PropTypes.func.isRequired
});

_defineProperty(Wizardr, "Page", function (_ref2) {
  var children = _ref2.children;
  return children;
});

export { Wizardr as default };