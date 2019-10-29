/**
 * Modified from https://github.com/IBM/carbon-components-react/
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const Value = ({ value, secondaryValue, className, href, title, ...other }) => {
  const classNames = classnames(`${prefix}--value`, className);
  return (
    <div className={classNames} {...other}>
      <div className={`${prefix}--title`}>{title}</div>
      <div className={`${prefix}--primary-value`}>{value}</div>
      <div className={`${prefix}--secondary-value`}>{secondaryValue}</div>
    </div>
  );
};

Value.propTypes = {
  /**
   * Provide the content for the primary Value
   */
  value: PropTypes.node,

  /**
   * Provide the content for the secondary Value
   */
  secondaryValue: PropTypes.node,

  /**
   * Provide the content for the title
   */
  title: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,
};

export default Value;
