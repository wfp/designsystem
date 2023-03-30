import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

export interface FormItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
  inline?: boolean;
}

const FormItem: React.FC<PropsWithChildren<FormItemProps>> = ({
  className,
  children,
  invalid,
  inline,
  ...other
}) => {
  const { prefix } = useSettings();

  const classes = classNames(
    `${prefix}--form-item`,
    {
      [`${prefix}--form-item--inline`]: inline,
      [`${prefix}--form-item--invalid`]: invalid,
    },
    className
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

export default FormItem;
