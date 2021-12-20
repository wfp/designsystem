import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

const FormWizard = (props) => {
  const { prefix } = useSettings();
  const { className, children, sidebar } = props;
  const classes = {
    formControls: classNames(`${prefix}--form-wizard`, className),
  };
  return (
    <div className={classes.formControls}>
      <div className={`${prefix}--form-wizard__sidebar`}>{sidebar}</div>
      <div className={`${prefix}--form-wizard__content`}>{children}</div>
    </div>
  );
};

FormWizard.propTypes = {
  /**
   * Specify a custom css class
   * which is added to the container
   */
  className: PropTypes.string,
  /**
   * Specify the custom
   * main content component
   */
  children: PropTypes.node.isRequired,
  /**
   * Specify the custom
   * sidebar component
   */
  sidebar: PropTypes.node.isRequired,
};
