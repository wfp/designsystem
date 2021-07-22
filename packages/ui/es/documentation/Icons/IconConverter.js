function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable no-console */
import React, { Component } from 'react';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import { Module, ModuleHeader, ModuleBody } from '../../components/Module';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import { Form, Field } from 'react-final-form';
import Blockquote from '../../components/Blockquote';

var getJSON = require('./getJSON');

var formatJS = require('./formatJS');

var FaviconGenerator = /*#__PURE__*/function (_Component) {
  _inherits(FaviconGenerator, _Component);

  var _super = _createSuper(FaviconGenerator);

  function FaviconGenerator(props) {
    var _this;

    _classCallCheck(this, FaviconGenerator);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
        var result, formatted;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = getJSON(values.svg);
                formatted = formatJS(result, {
                  json: false
                });

                _this.setState({
                  json: formatted
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      dataurl: {}
    };
    return _this;
  }

  _createClass(FaviconGenerator, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form, {
        onSubmit: this.onSubmit,
        initialValues: {
          svg: "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 14\">\n  <title>favorite--outline</title>\n  <path d=\"M1.49,7.72A4.41,4.41,0,1,1,8,1.84a4.42,4.42,0,1,1,6.44,6L8,13.87Z\"/>\n</svg>\n            "
        },
        render: function render(_ref2) {
          var handleSubmit = _ref2.handleSubmit,
              form = _ref2.form,
              submitting = _ref2.submitting,
              pristine = _ref2.pristine,
              values = _ref2.values;
          return /*#__PURE__*/React.createElement("form", {
            onSubmit: handleSubmit,
            className: "wfp--form-long"
          }, /*#__PURE__*/React.createElement(Module, {
            light: true,
            className: "some-class",
            style: {
              padding: '1em 0'
            }
          }, /*#__PURE__*/React.createElement(ModuleHeader, null, "Convert svg to icon"), /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement(Field, {
            name: "svg",
            component: ReduxFormWrapper,
            inputComponent: TextArea,
            type: "text",
            labelText: "SVG code",
            placeholder: "Your svg code"
          }), /*#__PURE__*/React.createElement(Button, {
            type: "submit",
            style: {
              marginTop: '1em'
            }
          }, "Generate Icon"), _this2.state.json && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
            className: "wfp--label"
          }, "Preview"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Module, {
            light: true,
            className: "some-class",
            style: {
              padding: '1em 0'
            }
          }, /*#__PURE__*/React.createElement(ModuleBody, null, /*#__PURE__*/React.createElement(Icon, {
            name: "your icon",
            icon: _this2.state.json
          }), /*#__PURE__*/React.createElement(Icon, {
            name: "your icon",
            width: "50",
            height: "50",
            icon: _this2.state.json
          }), /*#__PURE__*/React.createElement(Icon, {
            fill: "#0b77c2",
            name: "your icon",
            width: "100",
            height: "100",
            icon: _this2.state.json
          }))), /*#__PURE__*/React.createElement(Blockquote, {
            title: "Icon json",
            code: true
          }, /*#__PURE__*/React.createElement("code", {
            component: "pre",
            className: "language-json"
          }, JSON.stringify(_this2.state.json, null, 2))), /*#__PURE__*/React.createElement(Blockquote, {
            title: "Component code",
            code: true
          }, /*#__PURE__*/React.createElement("code", {
            component: "pre",
            className: "language-json"
          }, "<Icon \n  icon={".concat(JSON.stringify(_this2.state.json, null, 2), "}\n/>\n")))))));
        }
      }));
    }
  }]);

  return FaviconGenerator;
}(Component);

export { FaviconGenerator as default };