import * as React from 'react';
import { useState, useEffect } from 'react';

import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import { ButtonKind } from '../../utils';

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
  //target?: string; // TODO: Remove
  /**
   * Specify an `icon` to include in the Button through an object representing the SVG data of the icon, similar to the `Icon` component @design
   */
  icon?: React.ReactNode | React.ComponentType<any>;
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
  target?: any;
  // type?: 'button' | 'reset' | 'submit';
  useFlexbox?: boolean;
  id?: string;
}

interface ButtonButtonProps
  extends ButtonBaseProps,
    React.ComponentPropsWithoutRef<'button'> {}

interface ButtonLinkProps
  extends ButtonBaseProps,
    React.ComponentPropsWithoutRef<'a'> {}

type ConditionalProps<T> = T extends { href: string }
  ? ButtonLinkProps
  : ButtonButtonProps;

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */

export type ButtonRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export const Button = React.forwardRef(
  <T extends { href?: string }>(
    props: ConditionalProps<T>,
    ref: React.Ref<
      T extends { href: string } ? HTMLLinkElement : HTMLButtonElement
    >
  ) => {
    const {
      children,
      className,
      disabled,
      small,
      large,
      kind = 'primary',
      iconReverse,
      tabIndex,
      useFlexbox,
      type = 'button',
      icon,
      iconDescription,
      onClick,
      id,
      ...other
    } = props;
    const { prefix } = useSettings();
    const [count, setCount] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => endAnimation(), 500);
      return () => {
        clearTimeout(timer);
      };
    }, [count]);
    console.log('ref: ', ref);

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
        type={type}
        onClick={onClickAnimation}
        ref={ref as React.Ref<HTMLButtonElement>}
        id={id}>
        {iconReverse && buttonImage}
        {children}
        {!iconReverse && buttonImage}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
