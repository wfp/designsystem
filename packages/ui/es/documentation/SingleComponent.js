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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var SingleComponent = /*#__PURE__*/function (_Component) {
  _inherits(SingleComponent, _Component);

  var _super = _createSuper(SingleComponent);

  function SingleComponent(props) {
    var _this;

    _classCallCheck(this, SingleComponent);

    _this = _super.call(this, props);
    _this.state = {
      height: 0
    };
    return _this;
  }

  _createClass(SingleComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var height = document.getElementById('container').clientHeight;
      this.setState({
        height: height
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          centered = _this$props.centered,
          children = _this$props.children,
          flexBasis = _this$props.flexBasis;
      var height = this.state.height;
      var classNames = classnames({
        'wfp--single-component--top': height >= 300,
        'wfp--single-component--centered': centered && height <= 200
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classNames
      }, /*#__PURE__*/React.createElement("div", {
        id: "container",
        style: {
          flexBasis: flexBasis ? flexBasis : 'auto'
        }
      }, children));
    }
  }]);

  return SingleComponent;
}(Component);

SingleComponent.propTypes = {
  /**
    Width of Wrapper, use 'narrow' or leave empty
  */
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
SingleComponent.defaultProps = {
  centered: true,
  pageWidth: 'lg'
};
export default SingleComponent;