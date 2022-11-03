import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface FormItemProps {
  className?: string;
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

  const classNames = classnames(
    `${prefix}--form-item`,
    {
      [`${prefix}--form-item--inline`]: inline,
      [`${prefix}--form-item--invalid`]: invalid,
    },
    className
  );

  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

export default FormItem;
