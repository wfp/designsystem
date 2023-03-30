import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface SelectItemGroupProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  label: string;
}

const SelectItemGroup: React.FC<SelectItemGroupProps> = ({
  children,
  className,
  disabled,
  label,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--select-optgroup`, className);
  return (
    <optgroup className={classes} label={label} disabled={disabled} {...other}>
      {children}
    </optgroup>
  );
};

// SelectItemGroup.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
//   disabled: PropTypes.bool,
//   label: PropTypes.string.isRequired,
// };

// SelectItemGroup.defaultProps = {
//   disabled: false,
//   label: 'Provide label',
// };

export default SelectItemGroup;
