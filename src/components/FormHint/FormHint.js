import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { iconInfoSolid } from '@wfp/icons';
import Icon from '../Icon';
import classNames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const FormHint = ({
  className,
  children,
  description,
  icon,
  TooltipComponent,
  ...other
}) => {
  const formHintClasses = classNames(`${prefix}--form-hint`, className);
  return (
    <div className={formHintClasses}>
      <Icon
        icon={iconInfoSolid}
        width="15"
        height="15"
        description={children}
      />
    </div>
  );
};

FormHint.propTypes = {
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

FormHint.defaultProps = {
  icon: iconInfoSolid,
};

export default FormHint;
