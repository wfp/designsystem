"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filename = Filename;
exports.default = exports.FileUploaderButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _icons = require("@wfp/icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Loading = _interopRequireDefault(require("../Loading"));

var _uniqueId = _interopRequireDefault(require("../../tools/uniqueId"));

var _types = require("../../prop-types/types");

var _excluded = ["className", "disableLabelChanges", "labelText", "multiple", "role", "tabIndex", "buttonKind", "accept", "name", "disabled"],
    _excluded2 = ["iconDescription", "status", "invalid"],
    _excluded3 = ["iconDescription", "buttonLabel", "buttonKind", "filenameStatus", "labelDescription", "labelTitle", "className", "multiple", "accept", "name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var prefix = _settings.default.prefix;

var FileUploaderButton = /*#__PURE__*/function (_Component) {
  _inherits(FileUploaderButton, _Component);

  var _super = _createSuper(FileUploaderButton);

  function FileUploaderButton() {
    var _this;

    _classCallCheck(this, FileUploaderButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      var files = evt.target.files;
      var length = evt.target.files.length;

      if (files && !_this.props.disableLabelChanges) {
        if (length > 1) {
          _this.setState({
            labelText: "".concat(length, " files")
          });
        } else if (length === 1) {
          _this.setState({
            labelText: files[0].name
          });
        }
      }

      _this.props.onChange(evt);
    });

    return _this;
  }

  _createClass(FileUploaderButton, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disableLabelChanges = _this$props.disableLabelChanges,
          labelText = _this$props.labelText,
          multiple = _this$props.multiple,
          role = _this$props.role,
          tabIndex = _this$props.tabIndex,
          buttonKind = _this$props.buttonKind,
          accept = _this$props.accept,
          name = _this$props.name,
          disabled = _this$props.disabled,
          other = _objectWithoutProperties(_this$props, _excluded);

      var classes = (0, _classnames.default)("".concat(prefix, "--btn"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn--").concat(buttonKind), buttonKind), _defineProperty(_classNames, "".concat(prefix, "--btn--disabled"), disabled), _classNames));
      this.uid = this.props.id || (0, _uniqueId.default)();
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", _extends({
        tabIndex: disabled ? -1 : tabIndex || 0,
        "aria-disabled": disabled,
        className: classes,
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 13 || evt.which === 32) {
            _this2.input.click();
          }
        },
        htmlFor: this.uid
      }, other), /*#__PURE__*/_react.default.createElement("span", {
        role: role
      }, this.state.labelText)), /*#__PURE__*/_react.default.createElement("input", {
        className: "".concat(prefix, "--visually-hidden"),
        ref: function ref(input) {
          return _this2.input = input;
        },
        id: this.uid,
        disabled: disabled,
        type: "file",
        tabIndex: "-1",
        multiple: multiple,
        accept: accept,
        name: name,
        onChange: this.handleChange,
        onClick: function onClick(evt) {
          evt.target.value = null;
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var labelText = _ref.labelText;
      var prevLabelText = state.prevLabelText;
      return prevLabelText === labelText ? null : {
        labelText: labelText,
        prevLabelText: labelText
      };
    }
  }]);

  return FileUploaderButton;
}(_react.Component);

exports.FileUploaderButton = FileUploaderButton;

_defineProperty(FileUploaderButton, "propTypes", {
  /**
   * Provide a custom className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether you want to disable any updates to the FileUploaderButton
   * label
   */
  disableLabelChanges: _propTypes.default.bool,

  /**
   * Provide a unique id for the underlying <input> node
   */
  id: _propTypes.default.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * this control
   */
  labelText: _propTypes.default.node,

  /**
   * Specify whether you want the component to list the files that have been
   * submitted to be uploaded
   */
  listFiles: _propTypes.default.bool,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: _propTypes.default.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: _propTypes.default.string,

  /**
   * Provide an optional `onChange` hook that is called each time the <input>
   * value changes
   */
  onChange: _propTypes.default.func,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Provide an accessibility role for the <FileUploaderButton>
   */
  role: _propTypes.default.string,

  /**
   * Provide a custom tabIndex value for the <FileUploaderButton>
   */
  tabIndex: _propTypes.default.number,

  /**
   * Specify the type of underlying button
   */
  buttonKind: _types.ButtonTypes.buttonKind,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Specify whether file input is disabled
   */
  disabled: _propTypes.default.bool
});

_defineProperty(FileUploaderButton, "defaultProps", {
  tabIndex: 0,
  disableLabelChanges: false,
  labelText: 'Add file',
  buttonKind: 'primary',
  multiple: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  accept: [],
  disabled: false,
  role: 'button'
});

function Filename(_ref2) {
  var iconDescription = _ref2.iconDescription,
      status = _ref2.status,
      invalid = _ref2.invalid,
      other = _objectWithoutProperties(_ref2, _excluded2);

  switch (status) {
    case 'uploading':
      return /*#__PURE__*/_react.default.createElement(_Loading.default, {
        description: iconDescription,
        withOverlay: false,
        small: true
      });

    case 'edit':
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, invalid && /*#__PURE__*/_react.default.createElement(_Icon.default, {
        icon: _icons.iconWarningGlyph,
        className: "".concat(prefix, "--file-invalid")
      }), /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
        icon: _icons.iconCloseGlyph,
        className: "".concat(prefix, "--file-close"),
        "aria-label": iconDescription
      }, other)));

    case 'complete':
      return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
        icon: _icons.iconCheckmarkGlyph,
        className: "".concat(prefix, "--file-complete"),
        "aria-label": iconDescription
      }, other));

    default:
      return null;
  }
}

Filename.propTypes = {
  /**
   * Provide a description of the SVG icon to denote file upload status
   */
  iconDescription: _propTypes.default.string,

  /**
   * Status of the file upload
   */
  status: _propTypes.default.oneOf(['edit', 'complete', 'uploading']),

  /**
   * Provide a custom tabIndex value for the <Filename>
   */
  tabIndex: _propTypes.default.string
};
Filename.defaultProps = {
  iconDescription: 'Uploading file',
  status: 'uploading',
  tabIndex: '0'
};

var FileUploader = /*#__PURE__*/function (_Component2) {
  _inherits(FileUploader, _Component2);

  var _super2 = _createSuper(FileUploader);

  function FileUploader() {
    var _this3;

    _classCallCheck(this, FileUploader);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      filenames: []
    });

    _defineProperty(_assertThisInitialized(_this3), "nodes", []);

    _defineProperty(_assertThisInitialized(_this3), "handleChange", function (evt) {
      evt.stopPropagation();

      _this3.setState({
        filenames: _this3.state.filenames.concat(Array.prototype.map.call(evt.target.files, function (file) {
          return file.name;
        }))
      });

      if (_this3.props.onChange) {
        _this3.props.onChange(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this3), "handleClick", function (evt, index) {
      var filteredArray = _this3.state.filenames.filter(function (filename) {
        return filename !== _this3.nodes[index].innerText.trim();
      });

      _this3.setState({
        filenames: filteredArray
      });

      _this3.props.onClick(evt);
    });

    _defineProperty(_assertThisInitialized(_this3), "clearFiles", function () {
      // A clearFiles function that resets filenames and can be referenced using a ref by the parent.
      _this3.setState({
        filenames: []
      });
    });

    return _this3;
  }

  _createClass(FileUploader, [{
    key: "render",
    value: function render() {
      var _classNames2,
          _this4 = this;

      var _this$props2 = this.props,
          iconDescription = _this$props2.iconDescription,
          buttonLabel = _this$props2.buttonLabel,
          buttonKind = _this$props2.buttonKind,
          filenameStatus = _this$props2.filenameStatus,
          labelDescription = _this$props2.labelDescription,
          labelTitle = _this$props2.labelTitle,
          className = _this$props2.className,
          multiple = _this$props2.multiple,
          accept = _this$props2.accept,
          name = _this$props2.name,
          other = _objectWithoutProperties(_this$props2, _excluded3);

      var classes = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames2, className, className), _classNames2));
      return /*#__PURE__*/_react.default.createElement("div", _extends({
        className: classes
      }, other), /*#__PURE__*/_react.default.createElement("strong", {
        className: "".concat(prefix, "--file--label")
      }, labelTitle), /*#__PURE__*/_react.default.createElement("p", {
        className: "".concat(prefix, "--label-description")
      }, labelDescription), /*#__PURE__*/_react.default.createElement(FileUploaderButton, {
        labelText: buttonLabel,
        multiple: multiple,
        buttonKind: buttonKind,
        onChange: this.handleChange,
        disableLabelChanges: true,
        accept: accept,
        name: name
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(prefix, "--file-container")
      }, this.state.filenames.length === 0 ? null : this.state.filenames.map(function (name, index) {
        return /*#__PURE__*/_react.default.createElement("span", _extends({
          key: index,
          className: "".concat(prefix, "--file__selected-file"),
          ref: function ref(node) {
            return _this4.nodes[index] = node;
          } // eslint-disable-line

        }, other), /*#__PURE__*/_react.default.createElement("p", {
          className: "".concat(prefix, "--file-filename")
        }, name), /*#__PURE__*/_react.default.createElement("span", {
          className: "".concat(prefix, "--file__state-container")
        }, /*#__PURE__*/_react.default.createElement(Filename, {
          iconDescription: iconDescription,
          status: filenameStatus,
          onKeyDown: function onKeyDown(evt) {
            if (evt.which === 13 || evt.which === 32) {
              _this4.handleClick(evt, index);
            }
          },
          onClick: function onClick(evt) {
            if (filenameStatus === 'edit') {
              _this4.handleClick(evt, index);
            }
          }
        })));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref3, state) {
      var filenameStatus = _ref3.filenameStatus;
      var prevFilenameStatus = state.prevFilenameStatus;
      return prevFilenameStatus === filenameStatus ? null : {
        filenameStatus: filenameStatus,
        prevFilenameStatus: filenameStatus
      };
    }
  }]);

  return FileUploader;
}(_react.Component);

exports.default = FileUploader;

_defineProperty(FileUploader, "propTypes", {
  /**
   * Provide a description for the complete/close icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * the <FileUploaderButton>
   */
  buttonLabel: _propTypes.default.string,

  /**
   * Specify the type of the <FileUploaderButton>
   */
  //buttonKind: PropTypes.oneOf(buttonKinds),

  /**
   * Specify the status of the File Upload
   */
  //filenameStatus: PropTypes.oneOf(['edit', 'complete', 'uploading'])
  //  .isRequired,

  /**
   * Specify the description text of this <FileUploader>
   */
  labelDescription: _propTypes.default.string,

  /**
   * Specify the title text of this <FileUploader>
   */
  labelTitle: _propTypes.default.string,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: _propTypes.default.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: _propTypes.default.string,

  /**
   * Provide an optional `onChange` hook that is called each time the input is
   * changed
   */
  onChange: _propTypes.default.func,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Provide a custom className to be applied to the container node
   */
  className: _propTypes.default.string
  /**
   * Specify the types of files that this input should be able to receive
   */
  //accept: PropTypes.arrayOf(PropTypes.string),

});

_defineProperty(FileUploader, "defaultProps", {
  iconDescription: 'Provide icon description',
  filenameStatus: 'uploading',
  buttonLabel: '',
  buttonKind: 'primary',
  multiple: false,
  onClick: function onClick() {},
  accept: []
});