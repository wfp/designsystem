import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const FormGroup = ({
  legendText,
  inline,
  invalid,
  children,
  className,
  message,
  messageText,
  ...other
}) => {
  const classNamesLegend = classnames('wfp--form-group__title', className);
  const classNamesFieldset = classnames(
    'wfp--fieldset',
    { 'wfp--fieldset__inline': inline },
    className
  );

  return (
    <div
      {...(invalid && { 'data-invalid': '' })}
      className={classNamesFieldset}
      {...other}>
      <legend className={classNamesLegend}>{legendText}</legend>
      {children}
      {message ? (
        <div className="wfp--form__requirements">{messageText}</div>
      ) : null}
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node,
  legendText: PropTypes.string,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  message: PropTypes.bool,
  messageText: PropTypes.string,
};

FormGroup.defaultProps = {
  invalid: false,
  message: false,
  messageText: '',
};

export default FormGroup;
