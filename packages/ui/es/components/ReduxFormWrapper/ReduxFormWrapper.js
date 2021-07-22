var _excluded = ["input", "inputComponent", "InputComponent", "classNamePrefix", "invalidText", "meta"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import warningMesssage from 'warning';
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
    warningMesssage(didWarnAboutDeprecation, 'The `InputComponent` prop of ReduxFormWrapper has been deprecated and will be removed ' + 'in the next major release of `@wfp/ui`. Please use ' + '`children` instead.');
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


  return /*#__PURE__*/React.createElement(InputComponentConnect, _extends({}, input, other, {
    labelText: /*#__PURE__*/React.createElement(React.Fragment, null, other.labelText, other.required && /*#__PURE__*/React.createElement("div", {
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
  className: PropTypes.string,

  /**
   * Specify the input component which is getting connected
   */
  inputComponent: PropTypes.func.isRequired,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <InputComponent>
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <InputComponent> is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the <textarea>
   */
  placeholder: PropTypes.string,

  /**
   * Provide the current value of the <textarea>
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool
};
ReduxFormWrapper.defaultProps = {
  onChange: function onChange() {},
  onClick: function onClick() {}
};
export default ReduxFormWrapper;