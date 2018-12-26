import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { iconInfoSolid } from '@wfp/icons';
import Icon from '../Icon';

import { Tooltip } from 'react-tippy';
import tooltipStyle from '../Tooltip';

import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

export default class FormHint extends Component {
  static propTypes = {
    /**
     * Specify an optional className to be applied to the wrapper node
     */
    className: PropTypes.string,

    /**
     * The tooltips content can be a string or an component
     */

    children: PropTypes.node,
    /**
     * Specify a custom icon for the hint
     */
    icon: PropTypes.object,
  };

  static defaultProps = {
    icon: iconInfoSolid,
  };

  render() {
    const { className, children, description, icon, ...other } = this.props;

    const formHintClasses = classNames(`${prefix}--form-hint`, className);

    return (
      <div className={formHintClasses}>
        <Tooltip
          // options
          title={children}
          position="top"
          trigger="click"
          {...other}
          {...tooltipStyle}>
          <Icon icon={icon} width="15" height="15" description={children} />
        </Tooltip>
      </div>
    );
  }
}
