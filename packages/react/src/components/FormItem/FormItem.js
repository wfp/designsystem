import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

const FormItem = ({ className, children, invalid, inline, ...other }) => {
  const { prefix } = useSettings();

  const classNames = classnames(
    `${prefix}--form-item`,
    {
      [`${prefix}--form-item--inline`]: inline,
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
