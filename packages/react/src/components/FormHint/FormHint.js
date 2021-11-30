import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { InfoSolid16 } from '@wfp/icons-react';
import classNames from 'classnames';
import { settings } from '../../globals/js';
import Tooltip from '../Tooltip/Tooltip';

const { prefix } = settings;

/** FormHint allows you to add a longer explanation to an input element. */

const FormHint = ({ className, children, description, icon, ...other }) => {
  const formHintClasses = classNames(`${prefix}--form-hint`, className);
  return (
    <Tooltip content={children}>
      <div className={formHintClasses}>
        <InfoSolid16 width="15" height="15" description={children} />
      </div>
    </Tooltip>
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
};

FormHint.defaultProps = {
  icon: InfoSolid16,
};

export default FormHint;
