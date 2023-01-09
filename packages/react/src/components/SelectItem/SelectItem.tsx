import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface SelectItemProps {
  value: any;
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

// SelectItem.propTypes = {
//   value: PropTypes.any.isRequired,
//   className: PropTypes.string,
//   disabled: PropTypes.bool,
//   hidden: PropTypes.bool,
//   text: PropTypes.string.isRequired,
// };

// SelectItem.defaultProps = {
//   disabled: false,
//   hidden: false,
//   value: '',
//   text: '',
// };

export default SelectItem;
