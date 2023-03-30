import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  //TODO: Fix extend
  children: React.ReactNode;
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
  icon?: React.ComponentType | React.ElementType;
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
    ref: React.ForwardedRef<Element>
  ) => {
    const { prefix } = useSettings();

    const classes = classNames(`${prefix}--link`, className, {
      [`${prefix}--link--disabled`]: disabled,
      [`${prefix}--link--inline`]: inline,
      [`${prefix}--link--visited`]: visited,
      [`${prefix}--link--${size}`]: size,
    });

    const Tag = disabled ? 'p' : 'a';
    const rel = other.target === '_blank' ? 'noopener' : undefined;
    return (
      <Tag
        href={disabled ? undefined : href}
        className={classes}
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
