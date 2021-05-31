import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

/** Form Label can be used whenever it is needed to show a label detached from a regular input. */

const FormLabel = ({ className, children, id, ...other }) => {
  const classNames = classnames(`${prefix}--label`, className);

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
