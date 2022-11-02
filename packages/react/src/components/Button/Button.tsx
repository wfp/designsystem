import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { ButtonKind, IIcon } from '../../types/utils';

type ButtonProps = PropsWithChildren<{
  className?: Argument;
  children?: React.ReactNode;
  small?: boolean;
  large?: boolean;
  kind?: ButtonKind | 'danger--secondary';
  href?: string;
  icon?: IIcon | React.ReactNode;
  iconReverse?: boolean;
  // todo: revise iconDescription
  iconDescription?: string;
  disabled?: boolean;
  allCaps?: boolean;
  tabIndex?: number;
  type?: 'button' | 'reset' | 'submit';
  useFlexbox?: boolean;
  onClick?: (e: any) => void;
}>;

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  small,
  large,
  kind,
  allCaps,
  href,
  iconReverse,
  tabIndex,
  type,
  useFlexbox,
  icon,
  iconDescription,
  onClick,
  ...other
}) => {
  const { prefix } = useSettings();
  const [count, setCount] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => endAnimation(), 500);
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
    [`${prefix}--btn--all-caps`]: allCaps,
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
      <Icon description={iconDescription} className={`${prefix}--btn__icon`} />
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
      ref={other.inputref}>
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
      ref={other.inputref}>
      {iconReverse && buttonImage}
      {children}
      {!iconReverse && buttonImage}
    </a>
  );
  return href ? anchor : button;
};

export default Button;
