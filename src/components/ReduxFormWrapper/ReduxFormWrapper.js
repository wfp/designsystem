import PropTypes from 'prop-types';
import React from 'react';

const ReduxFormWrapper = ({
  input,
  InputComponent,
  meta: { touched, error, warning },
  children,
  ...other
}) => {
  if (InputComponent === undefined) return null;

  const onChangeX = e => {
    input.onChange(e);
  };

  const onBlurX = e => {
    input.onBlur(e);
  };

  return (
    <InputComponent
      {...input}
      {...other}
      labelText={
        <React.Fragment>
          {other.labelText}
          {other.required && <div className="wfp--label__required" />}
        </React.Fragment>
      }
      invalidText={error}
      onBlur={input.onBlur}
      onChange={input.onChange}
      invalid={touched && error}>
      {children}
    </InputComponent>
  );
};

ReduxFormWrapper.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * input node
   */
  className: PropTypes.string,

  /**
   * Optionally provide the default value of the <textarea>
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
   * Optionally provide an `onChange` handler that is called whenever <textarea>
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <textarea> is clicked
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
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes.bool,

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
  hideLabel: PropTypes.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool,
};

ReduxFormWrapper.defaultProps = {
  onChange: () => {},
  onClick: () => {},
};

export default ReduxFormWrapper;
