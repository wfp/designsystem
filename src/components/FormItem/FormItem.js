import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const FormItem = ({ className, children, invalid, ...other }) => {
  const classNames = classnames(
    `${prefix}--form-item`,
    {
      [`${prefix}--form-item--invalid`]: invalid,
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
