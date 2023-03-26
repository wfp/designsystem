import { PropsWithChildren } from 'react';
import * as React from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';
import type { LinkHTMLAttributes } from 'react';

export interface LinkProps extends React.LinkHTMLAttributes {
  /**
   * Adds an underline to the link element to better indicate that it is clickable in continuous text. @design
   */
  inline?: boolean;
  /**
   * Disables the link element. @design
   */
  disabled?: boolean;
  /**
   * Indicates that the link has been visited.
   */
  visited?: boolean;
  /**
   * Choose a size for the link element @design
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Use an icon with the link element @design
   */
  icon?: React.node;
  //write other extra props here...
}

const Link: React.FC<LinkProps> = React.forwardRef(
  (
    {
      children,
      className,
      href,
      disabled,
      inline,
      visited,
      icon: Icon,
      size,
      ...other
    },
    ref
  ) => {
    const { prefix } = useSettings();

    const classNames = classnames(`${prefix}--link`, className, {
      [`${prefix}--link--disabled`]: disabled,
      [`${prefix}--link--inline`]: inline,
      [`${prefix}--link--visited`]: visited,
      [`${prefix}--link--${size}`]: size,
    });

    const Tag = disabled ? 'p' : 'a';
    const rel = other.target === '_blank' ? 'noopener' : null;
    return (
      <Tag
        href={disabled ? null : href}
        className={classNames}
        rel={rel}
        ref={ref}
        {...other}>
        {children}
        {!inline && Icon && (
          <div className={`${prefix}--link__icon`}>
            <Icon />
          </div>
        )}
      </Tag>
    );
  }
);

Link.displayName = 'Link';

export default Link;
