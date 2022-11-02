import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { TagType } from '../../types/utils';

const TYPES = {
  info: 'Info',
  error: 'error',
  success: 'Success',
  warning: 'Warning',
  custom: 'Custom',
};

type TagProps = PropsWithChildren<{
  type: TagType;
  wrap?: boolean;
  className?: Argument;
}>;

/** Tag is used to label, categorize, or organize items using keywords that describe them. */

const Tag: React.FC<TagProps> = ({ children, className, type, ...other }) => {
  const { prefix } = useSettings();
  const tagClass = `${prefix}--tag--${type}`;
  const tagClasses = classNames(`${prefix}--tag`, tagClass, className);
  return (
    <span className={tagClasses} {...other}>
      {children || TYPES[type]}
    </span>
  );
};

// export const types = Object.keys(TYPES);
export default Tag;
