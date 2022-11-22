/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface LinkProps {
  href?: string;
  inline?: boolean;
  className?: string;
  disabled?: boolean;
  visited?: boolean;
  size?: 'sm' | 'md' | 'lg';
  renderIcon?: () => void | {};
}

const Link: React.FC<PropsWithChildren<LinkProps>> = React.forwardRef(
  (
    {
      children,
      className,
      href,
      disabled,
      inline,
      visited,
      renderIcon: Icon,
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

export default Link;
