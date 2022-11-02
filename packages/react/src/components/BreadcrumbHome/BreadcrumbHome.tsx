import React from 'react';
import classnames from 'classnames';
import { Home } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

interface BreadcrumbHomeProps {
  hometext?: React.ReactNode;
  className?: string;
}

const BreadcrumbHome: React.FC<BreadcrumbHomeProps> = ({
  className,
  hometext,
  ...other
}) => {
  const { prefix } = useSettings();
  const classNames = classnames(`${prefix}--breadcrumb-home`, className);
  return (
    <Home
      //icon={iconHome}
      fill="#0b77c2"
      width="14"
      height="14"
      description={hometext}
      className={classNames}
      {...other}
    />
  );
};

export default BreadcrumbHome;
