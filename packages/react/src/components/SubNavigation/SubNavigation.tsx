import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** The SubNavigation is a toogleable part of the MainNavigation */
const SubNavigation = ({ children, ...other }) => {
  return <div {...other}>{children}</div>;
};

type SubNavigationItemProps = PropsWithChildren<{
  className?: string;
}>;

const SubNavigationItem: React.FC<SubNavigationItemProps> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sub-navigation__item`, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

type SubNavigationHeaderProps = PropsWithChildren<{
  className?: string;
}>;

const SubNavigationHeader: React.FC<SubNavigationHeaderProps> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sub-navigation__header`, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

type SubNavigationFilterProps = PropsWithChildren<{
  className?: string;
}>;

const SubNavigationFilter: React.FC<SubNavigationFilterProps> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sub-navigation__filter`, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

type SubNavigationListProps = PropsWithChildren<{
  className?: string;
}>;

const SubNavigationList: React.FC<SubNavigationListProps> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sub-navigation__list`, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

type SubNavigationContentProps = PropsWithChildren<{
  className?: string;
}>;

const SubNavigationContent: React.FC<SubNavigationContentProps> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sub-navigation__content`, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

const SubNavigationTitle: React.FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sub-navigation__title`, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

export interface SubNavigationLinkProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SubNavigationLink: React.FC<SubNavigationLinkProps> = ({
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(`${prefix}--sub-navigation__link`, className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

type SubNavigationGroupProps = PropsWithChildren<{
  className?: string;
  columns?: number;
  title?: React.ReactNode;
  image?: string;
}>;

const SubNavigationGroup: React.FC<SubNavigationGroupProps> = ({
  children,
  columns,
  className,
  title,
  ...other
}) => {
  const { prefix } = useSettings();
  const classes = classNames(
    `${prefix}--sub-navigation__group`,
    {
      className,
    },
    { [`${prefix}--sub-navigation__group--columns`]: columns }
  );

  return (
    <div className={classes} {...other}>
      {title && (
        <h3 className={`${prefix}--sub-navigation__group__title`}>{title}</h3>
      )}
      <div>{children}</div>
    </div>
  );
};

export {
  SubNavigation,
  SubNavigationHeader,
  SubNavigationTitle,
  SubNavigationLink,
  SubNavigationFilter,
  SubNavigationContent,
  SubNavigationList,
  SubNavigationGroup,
  SubNavigationItem,
};
