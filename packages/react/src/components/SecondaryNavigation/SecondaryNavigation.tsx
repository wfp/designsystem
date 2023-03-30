import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import useSettings from '../../hooks/useSettings';

type SecondaryNavigationTitleProps = PropsWithChildren<{
  className?: string;
}>;

const SecondaryNavigationTitle: React.FC<SecondaryNavigationTitleProps> = ({
  className,
  children,
}) => {
  const { prefix } = useSettings();

  const wrapperClasses = classNames(
    `${prefix}--secondary-navigation__title`,
    className
  );
  return <h1 className={wrapperClasses}>{children}</h1>;
};

/** The SecondaryNavigation shows the page title and and optional tab navigation. */
export interface SecondaryNavigationProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  pageWidth?: 'sm' | 'md' | 'lg' | 'full';
  wrapperClassName?: string;
  id?: string;
  additional?: React.ReactNode;
}

const SecondaryNavigation: React.FC<SecondaryNavigationProps> = ({
  additional,
  children,
  className,
  id,
  pageWidth,
  ...other
}) => {
  const { prefix } = useSettings();

  const wrapperClasses = classNames(
    `${prefix}--secondary-navigation`,
    className
  );

  return (
    <div id={id} className={wrapperClasses} {...other}>
      <Wrapper
        pageWidth={pageWidth}
        className={`${prefix}--secondary-navigation__wrapper`}>
        <div className={`${prefix}--secondary-navigation__list`}>
          {children}
        </div>
        {additional && (
          <div className={`${prefix}--secondary-navigation__additional`}>
            {additional}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export { SecondaryNavigationTitle, SecondaryNavigation };
