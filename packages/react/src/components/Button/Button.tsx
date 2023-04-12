//import React, { useEffect, useState } from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';

import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import { ButtonKind /*, IIcon */ } from '../../utils';

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
  icon?: React.ComponentType | React.ElementType;
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
  // type?: 'button' | 'reset' | 'submit';
  useFlexbox?: boolean;
  id?: string;
}

interface ButtonButtonProps
  extends ButtonBaseProps,
    React.ComponentPropsWithRef<'button'> {}

interface ButtonLinkProps
  extends ButtonBaseProps,
    React.ComponentPropsWithRef<'a'> {}

//type ButtonProps = ButtonButtonProps | ButtonLinkProps;

type ConditionalProps<T> = T extends { href: string }
  ? ButtonLinkProps
  : ButtonButtonProps;

type ButtonProps<T extends { href?: string }> = ConditionalProps<T> &
  React.ComponentPropsWithRef<T extends { href: string } ? 'a' : 'button'>;

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */

export const Button = React.forwardRef(
  <T extends { href?: string }>(
    {
      children,
      className,
      disabled,
      small,
      large,
      kind = 'primary',
      iconReverse,
      tabIndex,
      useFlexbox,
      icon /*: Icon*/,
      iconDescription,
      onClick,
      id,
      ...other
    }: ButtonProps<T>,
    ref: React.Ref<
      T extends { href: string } ? HTMLAnchorElement : HTMLButtonElement
    >
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
      [`${prefix}--btn--${kind}`]: kind,
      [`${prefix}--btn--animating`]: count,
    });

    const commonProps = {
      tabIndex,
      className: buttonClasses,
    };

    let buttonImage: React.ReactNode = null;

    if (icon && React.isValidElement(icon)) {
      buttonImage = <span className={`${prefix}--btn__icon`}>{icon}</span>;
    } else if (icon) {
      const Icon = icon as any;
      buttonImage = (
        <Icon
          description={iconDescription}
          className={`${prefix}--btn__icon`}
        />
      );
    }

    /* const buttonImage = Icon ? (
      <Icon description={iconDescription} className={`${prefix}--btn__icon`} />
    ) : null;*/

    const endAnimation = () => {
      setCount(false);
    };

    const onClickAnimation = (e) => {
      if (onClick) {
        onClick(e);
      }
      setCount(true);
    };

    if (other.href) {
      const anchorProps = {
        ...other,
        href: other.href,
      } as React.AnchorHTMLAttributes<HTMLAnchorElement>;

      return (
        <a
          {...anchorProps}
          {...commonProps}
          role="button"
          onClick={onClickAnimation}
          ref={ref as React.Ref<HTMLAnchorElement>}
          id={id}>
          {iconReverse && buttonImage}
          {children}
          {!iconReverse && buttonImage}
        </a>
      );
    }

    const buttonProps = {
      ...other,
      disabled: disabled,
    } as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        {...buttonProps}
        {...commonProps}
        disabled={disabled}
        //  type={type}
        onClick={onClickAnimation}
        ref={ref as React.Ref<HTMLButtonElement>}
        id={id}>
        {iconReverse && buttonImage}
        {children}
        {!iconReverse && buttonImage}
      </button>
    );

    /*   const anchor = (
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
    );*/
    // return href ? anchor : button;
  }
);

Button.displayName = 'Button';

export default Button;
