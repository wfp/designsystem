import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const FormItem = ({ className, children, invalid, ...other }) => {
  const classNames = classnames(
    'wfp--form-item',
    {
      'wfp--form-item--invalid': invalid,
    },
    className
  );

  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

FormItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormItem;
