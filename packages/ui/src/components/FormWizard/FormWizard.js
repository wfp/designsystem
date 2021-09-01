import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { Module, ModuleBody, ModuleHeader, ModuleFooter } from '../Module';
import { settings } from '../../globals/js';

const { prefix } = settings;

/** The FormWizard is a wrapper for creating Wizard forms. */

const FormWizard = ({
  className,
  children,
  formHeader,
  formControls,
  sidebar,
  stickySidebar,
}) => {
  const classes = {
    formControls: classNames(
      `${prefix}--form-wizard`,
      { [`${prefix}--form-wizard--sticky`]: stickySidebar },
      className
    ),
  };

  return (
    <div className={classes.formControls}>
      <div className={`${prefix}--form-wizard__sidebar`}>{sidebar}</div>
      <Module className={`${prefix}--form-wizard__content`} noMargin>
        {formHeader && <ModuleHeader>{formHeader}</ModuleHeader>}
        <ModuleBody>{children}</ModuleBody>
        {formControls && <ModuleFooter>{formControls}</ModuleFooter>}
      </Module>
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
  /**
   * Sticky sidebar
   */
  stickySidebar: PropTypes.bool,
};

FormWizard.defaultProps = {};

export default FormWizard;
