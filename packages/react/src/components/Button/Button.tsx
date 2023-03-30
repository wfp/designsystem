//import React, { useEffect, useState } from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';

import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import { ButtonKind, IIcon } from '../../typesLegacy/utils';

interface ButtonBaseProps {
  /**
   * Content of the Button @design
   */
  children?: React.ReactNode;
  /**
   * Specify whether the Button should be a small variant @design
   */
  small?: boolean;
  /**
   * Specify whether the Button should be a large variant
   */
  large?: boolean;
  /**
   * Specify the kind of Button you want to create @design
   */
  kind?: ButtonKind;
  /**
   * Optionally specify an href for your Button to become an element
   */
  href?: string;
  /**
   * Specify an `icon` to include in the Button through an object representing the SVG data of the icon, similar to the `Icon` component @design
   */
  icon?: IIcon | React.ReactNode;
  /**
   * Optionally specify an href for your Button to become an element @design
   */
  iconReverse?: boolean;
  // todo: revise iconDescription
  iconDescription?: string;
  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled?: boolean;
  tabIndex?: number;
  type?: 'button' | 'reset' | 'submit';
  useFlexbox?: boolean;
  id?: string;
}

interface ButtonButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<Button> {}

interface ButtonLinkProps
  extends ButtonBaseProps,
    React.LinkHTMLAttributes<Button> {
  href?: string;
  target?: string;
}

type ButtonProps = ButtonButtonProps | ButtonLinkProps;

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */
const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      children,
      className,
      disabled,
      small,
      large,
      kind = 'primary',
      href,
      iconReverse,
      tabIndex,
      type,
      useFlexbox,
      icon,
      iconDescription,
      onClick,
      id,
      ...other
    },
    ref
  ) => {
    const { prefix } = useSettings();
    const [count, setCount] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => endAnimation(), 500);
      return () => {
        clearTimeout(timer);
      };
    }, [count]);

    const buttonClasses = classNames(className, {
      [`${prefix}--btn`]: true,
      [`${prefix}--btn--sm`]: small,
      [`${prefix}--btn--lg`]: large,
      [`${prefix}--btn--icon-reverse`]: iconReverse,
      [`${prefix}--btn--flexbox`]: useFlexbox,
      [`${prefix}--btn--icon-only`]: icon && children === undefined,
      [`${prefix}--btn--primary`]: kind === 'primary',
      [`${prefix}--btn--danger`]: kind === 'danger',
      [`${prefix}--btn--accent`]: kind === 'accent',
      [`${prefix}--btn--secondary`]: kind === 'secondary',
      [`${prefix}--btn--navigation`]: kind === 'navigation',
      [`${prefix}--btn--ghost`]: kind === 'ghost',
      [`${prefix}--btn--inverse--primary`]: kind === 'inverse--primary',
      [`${prefix}--btn--inverse`]: kind === 'inverse',
      [`${prefix}--btn--danger--primary`]: kind === 'danger--primary',
      [`${prefix}--btn--danger--secondary`]: kind === 'danger--secondary',
      [`${prefix}--btn--tertiary`]: kind === 'tertiary',
      [`${prefix}--btn--animating`]: count,
    });

    const commonProps = {
      tabIndex,
      className: buttonClasses,
    };

    const Icon = icon;

    const buttonImage =
      icon && React.isValidElement(icon) ? (
        <span className={`${prefix}--btn__icon`}>{icon}</span>
      ) : icon ? (
        <Icon
          description={iconDescription}
          className={`${prefix}--btn__icon`}
        />
      ) : null;

    const endAnimation = () => {
      setCount(false);
    };

    const onClickAnimation = (e) => {
      if (onClick) {
        onClick(e);
      }
      setCount(true);
    };

    const button = (
      <button
        {...other}
        {...commonProps}
        disabled={disabled}
        type={type}
        onClick={onClickAnimation}
        ref={ref}
        id={id}>
        {iconReverse && buttonImage}
        {children}
        {!iconReverse && buttonImage}
      </button>
    );

    const anchor = (
      <a
        {...other}
        {...commonProps}
        href={href}
        role="button"
        onClick={onClickAnimation}
        ref={ref}
        id={id}>
        {iconReverse && buttonImage}
        {children}
        {!iconReverse && buttonImage}
      </a>
    );
    return href ? anchor : button;
  }
);

export default Button;
