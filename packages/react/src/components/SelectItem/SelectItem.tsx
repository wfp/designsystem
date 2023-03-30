import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface SelectItemProps {
  value?: string | number;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  text: string;
}

const SelectItem: React.FC<SelectItemProps> = ({
  className,
  value,
  disabled,
  hidden,
  text,
  ...other
}) => {
  const { prefix } = useSettings();
  const selectItemClasses = classNames({
    [`${prefix}--select-option`]: true,
    [`${className}`]: className,
  });

  return (
    <option
      {...other}
      className={selectItemClasses}
      value={value}
      disabled={disabled}
      hidden={hidden}>
      {text}
    </option>
  );
};

export default SelectItem;
