import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import {
  Ellipsis,
  WarningOutline,
  Locked,
  Error,
  Checkmark,
  Menu,
  OverflowMenu,
} from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

type StepNavigationItemProps = PropsWithChildren<{
  className?: Argument;
  helperText?: React.ReactNode;
  index?: number;
  label?: string;
  role: string;
  selectedPage: number;
  page: number;
  status?: string;
  renderAnchor: (p: any) => {};
  onClick: (e: any) => {};
  handleTabClick: (ind: any, l: any, e: any) => {};
}>;

const StepNavigationItem: React.FC<StepNavigationItemProps> = ({
  className,
  handleTabClick,
  index,
  label,
  status,
  helperText,
  selectedPage,
  onClick,
  page,
  renderAnchor,
}) => {
  const { prefix } = useSettings();

  const classes = classNames(
    `${prefix}--step-navigation__nav-item`,
    { [`${prefix}--step-navigation__nav-item--before`]: page < selectedPage },
    {
      [`${prefix}--step-navigation__nav-item--selected`]: page === selectedPage,
    },
    { [`${prefix}--step-navigation__nav-item--${status}`]: status },
    className
  );

  const anchorProps = {
    className: `${prefix}--step-navigation__nav-link`,
    ref: (e) => {
      this.tabAnchor = e;
    },
  };

  const icon = {
    'not-started': { icon: Ellipsis },
    warning: { icon: WarningOutline },
    locked: { icon: Locked },
    skip: { icon: OverflowMenu },
    disabled: { icon: Error },
    complete: { icon: Checkmark },
    summary: { icon: Menu },
  };

  const Icon = icon[status]?.icon;
  return (
    <li
      tabIndex={-1}
      className={classes}
      onClick={(evt) => {
        if (status !== 'locked') {
          handleTabClick(index, label, evt);
          onClick(evt);
        }
      }}
      role="presentation">
      <>
        {renderAnchor ? (
          renderAnchor(anchorProps)
        ) : (
          <React.Fragment>
            <div className={`${prefix}--step-navigation__nav-item__indicator`}>
              {status && page !== selectedPage ? (
                <Icon width="14" height="14" description="Step Item" />
              ) : (
                <span>{page + 1}</span>
              )}
            </div>
            <div>
              <span className={`${prefix}--step-navigation__nav-item__text`}>
                {label}
              </span>
              {helperText && (
                <span
                  className={`${prefix}--step-navigation__nav-item__helper-text`}>
                  {helperText}
                </span>
              )}
            </div>
          </React.Fragment>
        )}
      </>
    </li>
  );
};

export default StepNavigationItem;
