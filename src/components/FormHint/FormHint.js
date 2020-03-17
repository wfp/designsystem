import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { iconInfoSolid } from '@wfp/icons';
import Icon from '../Icon';

import { tooltipStyle } from '../Tooltip';

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
    /**
     * Specify a component for the tooltip, usually `@tippy.js/react`
     */
    TooltipComponent: PropTypes.func.isRequired,
  };

  static defaultProps = {
    icon: iconInfoSolid,
  };

  render() {
    const {
      className,
      children,
      description,
      icon,
      TooltipComponent,
      ...other
    } = this.props;

    const formHintClasses = classNames(`${prefix}--form-hint`, className);

    return (
      <div className={formHintClasses}>
        <Icon icon={icon} width="15" height="15" description={children} />
      </div>
    );
  }
}
