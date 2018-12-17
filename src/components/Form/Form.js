import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const Form = ({ className, children, longForm, ...other }) => {
  const classNames = classnames(`${prefix}--form`, { 'wfp--form-long': longForm === true }, className);

  return (
    <form className={classNames} {...other}>
      {' '}
      {children}{' '}
    </form>
  );
};

Form.propTypes = {
  /**
   * Provide children to be rendered inside of the <form> element
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied on the containing <form> node
   */
  className: PropTypes.string,

  /**
   * Default margin is added to each form input
   */
  longForm: PropTypes.bool,
};

export default Form;