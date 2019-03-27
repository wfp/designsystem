import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { Module, ModuleBody, ModuleHeader, ModuleFooter } from '../Module';

export default class FormWizard extends React.Component {
  static propTypes = {
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

  static defaultProps = {};

  render() {
    const {
      className,
      children,
      formHeader,
      formControls,
      sidebar,
    } = this.props;

    const classes = {
      formControls: classNames('wfp--form-wizard', className),
    };

    return (
      <div className={classes.formControls}>
        <div className="wfp--form-wizard__sidebar">{sidebar}</div>
        <Module className="wfp--form-wizard__content" noMargin>
          <ModuleHeader>{formHeader}</ModuleHeader>
          <ModuleBody>{children}</ModuleBody>
          <ModuleFooter>{formControls}</ModuleFooter>
        </Module>
      </div>
    );
  }
}
