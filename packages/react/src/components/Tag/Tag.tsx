import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
//import { TagType } from '../../typesLegacy/utils';

const TYPES = {
  info: 'Info',
  error: 'error',
  success: 'Success',
  warning: 'Warning',
  custom: 'Custom',
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Specify the type of Tag @design
   */
  type: 'wfp' | 'info' | 'error' | 'success' | 'warning' | 'custom' | string;

  /**
   * LEGACY: Specify if the Tag should be wrapped if it is too long
   */
  wrap?: boolean;
}

/** Tag is used to label, categorize, or organize items using keywords that describe them. */

const Tag: React.FC<TagProps> = ({
  children,
  className,
  type = 'info',
  ...other
}) => {
  const { prefix } = useSettings();
  const tagClass = `${prefix}--tag--${type}`;
  const tagClasses = classNames(`${prefix}--tag`, tagClass, className);
  return (
    <span className={tagClasses} {...other}>
      {children || TYPES[type]}
    </span>
  );
};

Tag.displayName = 'Tag';

export default Tag;
