import PropTypes from 'prop-types';
import React from 'react';
import warningMesssage from 'warning';

let didWarnAboutDeprecation = false;

const ReduxFormWrapper = ({
  input,
  inputComponent,
  InputComponent,
  classNamePrefix,
  invalidText,
  meta: { touched, error, submitError, warning },
  ...other
}) => {
  if (inputComponent === undefined && InputComponent === undefined) return null;

  const InputComponentConnect = inputComponent
    ? inputComponent
    : InputComponent;

  if (__DEV__ && InputComponent !== undefined) {
    warningMesssage(
      didWarnAboutDeprecation,
      'The `InputComponent` prop of ReduxFormWrapper has been deprecated and will be removed ' +
        'in the next major release of `@wfp/react`. Please use ' +
        '`children` instead.'
    );
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

  return (
    <InputComponentConnect
      {...input}
      {...other}
      labelText={
        <React.Fragment>
          {other.labelText}
          {other.required && <div className="wfp--label__required" />}
        </React.Fragment>
      }
      invalidText={error || submitError}
      onBlur={input.onBlur}
      onChange={input.onChange}
      invalid={touched && (error || submitError) ? true : false}
    />
  );
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
  inputComponent: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired,
  ]),
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
  hideLabel: PropTypes.bool,
};

ReduxFormWrapper.defaultProps = {
  onChange: () => {},
  onClick: () => {},
};

export default ReduxFormWrapper;
