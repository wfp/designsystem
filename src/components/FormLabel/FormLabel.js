import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const FormLabel = ({ className, children, id, ...other }) => {
  const classNames = classnames('wfp--label', className);

  return (
    <label htmlFor={id} className={classNames} {...other}>
      {children}
    </label>
  );
};

FormLabel.propTypes = {
  /**
   * The content of the label
   */
  children: PropTypes.node,
  /**
   * Additional `class` attributes
   */
  className: PropTypes.string,
  /**
   * The ID of the related input which will be used as `htmlFor`
   */
  id: PropTypes.string,
};

export default FormLabel;
