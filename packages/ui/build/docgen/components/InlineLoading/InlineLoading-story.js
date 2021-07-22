"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = _interopRequireDefault(require("../Button"));

var _InlineLoading = _interopRequireDefault(require("../InlineLoading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var props = function props() {
  return {
    success: (0, _addonKnobs.boolean)('Loading successful state (success)', false),
    description: (0, _addonKnobs.text)('Loading progress description (description)', 'Loading data...'),
    successDelay: (0, _addonKnobs.number)('The duration for successful state before `onSuccess` fires (successDelay)', 1500),
    onSuccess: (0, _addonActions.action)('onSuccess')
  };
};

(0, _react2.storiesOf)('Components|InlineLoading', module).addDecorator(_addonKnobs.withKnobs).add('Inline loading (experimental)', function () {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_InlineLoading.default, props()));
}).add('UX example', function () {
  var MockSubmission = /*#__PURE__*/function (_PureComponent) {
    _inherits(MockSubmission, _PureComponent);

    var _super = _createSuper(MockSubmission);

    function MockSubmission() {
      var _this;

      _classCallCheck(this, MockSubmission);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        submitting: false,
        success: false
      });

      return _this;
    }

    _createClass(MockSubmission, [{
      key: "handleSubmit",
      value: function handleSubmit() {
        var _this2 = this;

        this.setState({
          submitting: true
        }); // Instead of making a real request, we mock it with a timer

        setTimeout(function () {
          _this2.setState({
            submitting: false,
            success: true
          }); // To make submittable again, we reset the state after a bit so the user gets completion feedback


          setTimeout(function () {
            return _this2.setState({
              success: false
            });
          }, 1500);
        }, 2000);
      }
    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        var _this$state = this.state,
            submitting = _this$state.submitting,
            success = _this$state.success;
        var handleSubmit = this.handleSubmit.bind(this);
        return children({
          handleSubmit: handleSubmit,
          submitting: submitting,
          success: success
        });
      }
    }]);

    return MockSubmission;
  }(_react.PureComponent);

  return /*#__PURE__*/_react.default.createElement(MockSubmission, null, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
        submitting = _ref.submitting,
        success = _ref.success;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        width: '300px'
      }
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      kind: "secondary",
      disabled: submitting || success
    }, "Cancel"), submitting || success ? /*#__PURE__*/_react.default.createElement(_InlineLoading.default, {
      style: {
        marginLeft: '1rem'
      },
      description: "Submitting...",
      success: success
    }) : /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: handleSubmit
    }, "Submit"));
  });
});