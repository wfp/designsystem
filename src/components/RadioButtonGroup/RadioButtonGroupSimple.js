import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const FormGroup = ({
  children,
  className,
  ...other
}) => {
  const classNames = classnames('wfp--radio-button-group', className);

  return (
    <div className="wfp--form-item">
      <div
        className={classNames}
        {...other}
      >
        {children}
      </div>
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormGroup;
