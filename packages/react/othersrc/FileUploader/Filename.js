/* eslint react/no-multi-comp: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { iconClose, iconCheckmark } from '@wfp/icons-react';
import { withUNCoreSettings } from '../UNCoreSettings';

class Filename extends Component {
  static propTypes = {
    /**
     * Specify an optional object of styles to be applied inline to the root
     * node
     */
    style: PropTypes.object,

    /**
     * Specify the status of the File Upload
     */
    status: PropTypes.oneOf(['edit', 'complete', 'uploading']),

    /**
     * Provide a description for the complete/close icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,
  };

  static defaultProps = {
    onKeyDown: () => {},
    status: 'uploading',
    style: {},
    tabIndex: 0,
  };

  render() {
    const { prefix, iconDescription, status, style, ...other } = this.props;

    if (status === 'uploading') {
      return (
        <div
          className={`${prefix}--loading`}
          style={{ ...style, width: '1rem', height: '1rem' }}
          {...other}>
          <svg className={`${prefix}--loading__svg`} viewBox="-42 -42 84 84">
            <circle cx="0" cy="0" r="37.5" />
          </svg>
        </div>
      );
    } else if (status === 'edit') {
      return (
        <Icon
          description={iconDescription}
          className={`${prefix}--file-close`}
          icon={iconClose}
          style={style}
          {...other}
        />
      );
    } else if (status === 'complete') {
      return (
        <Icon
          description={iconDescription}
          className={`${prefix}--file-complete`}
          icon={iconCheckmark}
          style={style}
          {...other}
        />
      );
    } else {
      return null;
    }
  }
}

export default withUNCoreSettings(Filename);
