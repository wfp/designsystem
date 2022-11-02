/**
 * Modified from https://github.com/IBM/carbon-components-react/
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/** Value are typically used to show KPI values and additional information. */
type ValueProps = PropsWithChildren<{
  value?: React.ReactNode;
  secondaryValue?: React.ReactNode;
  title?: React.ReactNode;
  className?: Argument;
}>;

const Value: React.FC<ValueProps> = ({
  value,
  secondaryValue,
  className,
  title,
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classnames(`${prefix}--value`, className);
  return (
    <div className={classNames} {...other}>
      <h4 className={`${prefix}--value__title`}>{title}</h4>
      <div className={`${prefix}--value__primary-value`}>{value}</div>
      <div className={`${prefix}--value__secondary-value`}>
        {secondaryValue}
      </div>
    </div>
  );
};

export default Value;
