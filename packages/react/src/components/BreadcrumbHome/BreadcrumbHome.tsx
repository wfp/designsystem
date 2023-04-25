import * as React from 'react';
import classNames from 'classnames';
import { Home } from '@wfp/icons-react';
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
  const classes = classNames(`${prefix}--breadcrumb-home`, className);
  return (
    <Home
      //icon={iconHome}
      fill="#0b77c2"
      width="14"
      height="14"
      description={hometext}
      className={classes}
      {...other}
    />
  );
};

export default BreadcrumbHome;
