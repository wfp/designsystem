import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { Module, ModuleBody, ModuleHeader, ModuleFooter } from '../Module';

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
      'wfp--form-wizard',
      { 'wfp--form-wizard--sticky': stickySidebar },
      className
    ),
  };

  return (
    <div className={classes.formControls}>
      <div className="wfp--form-wizard__sidebar">{sidebar}</div>
      <Module className="wfp--form-wizard__content" noMargin>
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
