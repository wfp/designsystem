"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _excluded = ["input", "inputComponent", "InputComponent", "classNamePrefix", "invalidText", "meta"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var didWarnAboutDeprecation = false;

var ReduxFormWrapper = function ReduxFormWrapper(_ref) {
  var input = _ref.input,
      inputComponent = _ref.inputComponent,
      InputComponent = _ref.InputComponent,
      classNamePrefix = _ref.classNamePrefix,
      invalidText = _ref.invalidText,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      submitError = _ref$meta.submitError,
      warning = _ref$meta.warning,
      other = _objectWithoutProperties(_ref, _excluded);

  if (inputComponent === undefined && InputComponent === undefined) return null;
  var InputComponentConnect = inputComponent ? inputComponent : InputComponent;

  if (process.env.NODE_ENV !== "production" && InputComponent !== undefined) {
    (0, _warning.default)(didWarnAboutDeprecation, 'The `InputComponent` prop of ReduxFormWrapper has been deprecated and will be removed ' + 'in the next major release of `@wfp/ui`. Please use ' + '`children` instead.');
    didWarnAboutDeprecation = true;
  }
  /* if (typeof children === 'object') {
    const element = React.cloneElement(children, {
      input,
      other,
      labelText: (
        <React.Fragment>
          {other.labelText}
          {other.required && <div className="wfp--label__required" />}
        </React.Fragment>
      ),
      invalidText: error,
      onBlur: input.onBlur,
      onChange: input.onChange,
      invalid: touched && error
    })
  return (element) 
  } */


  return /*#__PURE__*/_react.default.createElement(InputComponentConnect, _extends({}, input, other, {
    labelText: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, other.labelText, other.required && /*#__PURE__*/_react.default.createElement("div", {
      className: "wfp--label__required"
    })),
    invalidText: error || submitError,
    onBlur: input.onBlur,
    onChange: input.onChange,
    invalid: touched && (error || submitError) ? true : false
  }));
};

ReduxFormWrapper.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * input node
   */
  className: _propTypes.default.string,

  /**
   * Specify the input component which is getting connected
   */
  inputComponent: _propTypes.default.func.isRequired,

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: _propTypes.default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <InputComponent>
   * is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <InputComponent> is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify the placeholder attribute for the <textarea>
   */
  placeholder: _propTypes.default.string,

  /**
   * Provide the current value of the <textarea>
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.bool]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool
};
ReduxFormWrapper.defaultProps = {
  onChange: function onChange() {},
  onClick: function onClick() {}
};
var _default = ReduxFormWrapper;
exports.default = _default;