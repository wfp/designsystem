import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

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
    const { className, children, sidebar } = this.props;

    const classes = {
      formControls: classNames('wfp--form-wizard', className),
    };

    console.warn(
      'RadioButtonGroup is depreciated and will be removed in the next versions. Use InputGroup instead'
    );

    return (
      <div className={classes.formControls}>
        <div className="wfp--form-wizard__sidebar">{sidebar}</div>
        <div className="wfp--form-wizard__content">{children}</div>
      </div>
    );
  }
}
