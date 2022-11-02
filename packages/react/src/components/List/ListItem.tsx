import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import Icon from '../Icon';

type ListItemProps = PropsWithChildren<{
  kind?: 'checkmark' | 'cross';
  small?: boolean;
  className?: Argument;
  title?: string;
}>;

const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  title,
  kind,
  ...other
}) => {
  const classNames = classnames('wfp--list__element', className, {
    'wfp--list-item--checkmark': kind === 'checkmark',
    'wfp--list-item--cross': kind === 'cross',
  });
  return (
    <li className={classNames} {...other}>
      {kind === 'cross' && (
        <Icon
          className="wfp--list-item__icon"
          icon={{
            styles: '',
            viewBox: '0 0 320 512',
            width: '15',
            height: '15',
            svgData: {
              circles: '',
              ellipses: '',
              paths: [
                {
                  fill: 'currentColor',
                  d: 'M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z',
                },
              ],
              polygons: '',
              polylines: '',
              rects: '',
            },
          }}
        />
      )}
      {kind === 'checkmark' && (
        <Icon
          className="wfp--list-item__icon"
          icon={{
            styles: '',
            viewBox: '0 0 512 512',
            width: '13',
            height: '13',
            svgData: {
              circles: '',
              ellipses: '',
              paths: [
                {
                  fill: 'currentColor',
                  d: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
                },
              ],
              polygons: '',
              polylines: '',
              rects: '',
            },
          }}
        />
      )}
      {title && <span className="wfp--list__element__title">{title}</span>}
      <span className="wfp--list__element__content">{children}</span>
    </li>
  );
};

export default ListItem;
