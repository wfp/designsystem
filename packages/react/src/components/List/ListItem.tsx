import * as React from 'react';
import classNames from 'classnames';
import { Cross, Check } from '@un/icons-react';

//export interface ListItemProps
// extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'title'> {
export interface ListItemProps
  extends Omit<React.ComponentPropsWithRef<'li'>, 'title'> {
  kind?: 'checkmark' | 'cross';
  small?: boolean;
  title?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  title,
  kind,
  ...other
}) => {
  const classes = classNames('wfp--list__element', className, {
    'wfp--list-item--checkmark': kind === 'checkmark',
    'wfp--list-item--cross': kind === 'cross',
  });
  return (
    <li className={classes} {...other}>
      {kind === 'cross' && <Cross className="wfp--list-item__icon" />}
      {kind === 'checkmark' && <Check className="wfp--list-item__icon" />}
      {title && <span className="wfp--list__element__title">{title}</span>}
      <span className="wfp--list__element__content">{children}</span>
    </li>
  );
};

export default ListItem;
