import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

type FormProps = PropsWithChildren<{
  longForm?: boolean;
  className?: Argument;
}>;
/** A form is a group of related input controls that allows users to provide data or configure options. */
const Form: React.FC<FormProps> = ({
  className,
  children,
  longForm,
  ...other
}) => {
  const { prefix } = useSettings();

  const classNames = classnames(
    `${prefix}--form`,
    { [`${prefix}--form-long`]: longForm === true },
    className
  );

  return (
    <form className={classNames} {...other}>
      {children}
    </form>
  );
};

export default Form;
