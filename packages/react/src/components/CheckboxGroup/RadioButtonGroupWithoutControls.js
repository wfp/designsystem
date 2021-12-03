import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withUNCoreSettings } from '../UNCoreSettings';

class FormWizard extends React.Component {
  static propTypes = {
    prefix: PropTypes.string.isRequired,
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
    const { className, children, sidebar } = this.props;

    const classes = {
      formControls: classNames('wfp--form-wizard', className),
    };

    const { prefix } = this.props;

    return (
      <div className={classes.formControls}>
        <div className={`${prefix}--form-wizard__sidebar`}>{sidebar}</div>
        <div className={`${prefix}--form-wizard__content`}>{children}</div>
      </div>
    );
  }
}

export default withUNCoreSettings(FormWizard);
