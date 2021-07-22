"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../components/Button"));

var _TextInput = _interopRequireDefault(require("../../components/TextInput"));

var _Module = require("../../components/Module");

var _ReduxFormWrapper = _interopRequireDefault(require("../../components/ReduxFormWrapper"));

var _reactFinalForm = require("react-final-form");

var _favicon = require("./favicon/favicon.js");

var _center = _interopRequireDefault(require("./favicon/center"));

var _colors = _interopRequireDefault(require("../../globals/data/colors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var canvas = {
  width: 128,
  height: 128
};

var FaviconCanvas = /*#__PURE__*/function (_React$Component) {
  _inherits(FaviconCanvas, _React$Component);

  var _super = _createSuper(FaviconCanvas);

  function FaviconCanvas() {
    var _this;

    _classCallCheck(this, FaviconCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "download", function () {
      var canvas = document.getElementById('canvas');

      var dataurl = _favicon.Package.generate(canvas); //const dataurl = ico.generate([16, 32, 48]);


      _this.props.updateUrl(dataurl);
    });

    return _this;
  }

  _createClass(FaviconCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateCanvas();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateCanvas();
    }
  }, {
    key: "updateCanvas",
    value: function updateCanvas() {
      var context = this.refs.canvas.getContext('2d');
      context.clearRect(0, 0, 300, 300);
      var mainColor = _colors.default.main.hex;
      var name = this.props.name && this.props.name.length >= 1 ? this.props.name : '–';
      (0, _center.default)({
        canvas: this.refs.canvas,
        width: canvas.width,
        height: canvas.height,
        shape: 'square',
        fontColor: '#ffffff',
        backgroundColor: mainColor,
        text: name.toUpperCase(),
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        fontSize: 15 + 120 * 1 / name.length
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("canvas", {
        id: "canvas",
        ref: "canvas",
        width: 128,
        height: 128
      });
    }
  }]);

  return FaviconCanvas;
}(_react.default.Component);

var onSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            window.alert(JSON.stringify(values, 0, 2));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function onSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();

var FaviconGenerator = /*#__PURE__*/function (_Component) {
  _inherits(FaviconGenerator, _Component);

  var _super2 = _createSuper(FaviconGenerator);

  function FaviconGenerator(props) {
    var _this2;

    _classCallCheck(this, FaviconGenerator);

    _this2 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "onClick", function () {
      _this2.child.current.download();
    });

    _defineProperty(_assertThisInitialized(_this2), "updateUrl", function (dataurl) {
      _this2.setState({
        dataurl: dataurl
      });
    });

    _this2.child = /*#__PURE__*/_react.default.createRef();
    _this2.state = {
      dataurl: {}
    };
    return _this2;
  }

  _createClass(FaviconGenerator, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var buttonElements = Object.keys(this.state.dataurl).map(function (file, i) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
          download: "wfp-favicon-".concat(file, ".").concat(file.substring(0, 3)),
          kind: "secondary",
          small: true,
          href: _this3.state.dataurl[file]
        }, file), ' ');
      });
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Form, {
        onSubmit: onSubmit,
        initialValues: {
          name: 'WFP'
        },
        render: function render(_ref2) {
          var handleSubmit = _ref2.handleSubmit,
              form = _ref2.form,
              submitting = _ref2.submitting,
              pristine = _ref2.pristine,
              values = _ref2.values;
          return /*#__PURE__*/_react.default.createElement("form", {
            onSubmit: handleSubmit
          }, /*#__PURE__*/_react.default.createElement(_Module.Module, {
            light: true,
            className: "some-class",
            style: {
              padding: '1em 0'
            }
          }, /*#__PURE__*/_react.default.createElement(_Module.ModuleBody, null, /*#__PURE__*/_react.default.createElement("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between'
            }
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "wfp--form-long"
          }, /*#__PURE__*/_react.default.createElement(_reactFinalForm.Field, {
            name: "name",
            component: _ReduxFormWrapper.default,
            inputComponent: _TextInput.default,
            type: "text",
            labelText: "Acronym",
            helperText: "Abbreviation of the applications name, like: WSS, WFP, INFO",
            placeholder: "WFP"
          }), /*#__PURE__*/_react.default.createElement("div", {
            className: "wfp--form-item"
          }, /*#__PURE__*/_react.default.createElement(_Button.default, {
            onClick: _this3.onClick
          }, "Generate files")), /*#__PURE__*/_react.default.createElement("div", {
            style: {
              marginBottom: '1rem'
            }
          }, Object.keys(_this3.state.dataurl).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h4", null, "Download"), buttonElements))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
            className: "wfp--label"
          }, "Preview"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(FaviconCanvas, _extends({
            updateUrl: _this3.updateUrl
          }, values, {
            ref: _this3.child
          })))))));
        }
      }));
    }
  }]);

  return FaviconGenerator;
}(_react.Component);

exports.default = FaviconGenerator;