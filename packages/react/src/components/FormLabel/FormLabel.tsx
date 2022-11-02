import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/** Form Label can be used whenever it is needed to show a label detached from a regular input. */
type FormLabelProps = PropsWithChildren<{
  id?: string;
  className?: Argument;
}>;

const FormLabel: React.FC<FormLabelProps> = ({
  className,
  children,
  id,
  ...other
}) => {
  const { prefix } = useSettings();

  const classNames = classnames(`${prefix}--label`, className);

  return (
    <label htmlFor={id} className={classNames} {...other}>
      {children}
    </label>
  );
};

export default FormLabel;
