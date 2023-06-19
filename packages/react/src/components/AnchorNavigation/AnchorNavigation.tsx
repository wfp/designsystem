import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface AnchorNavigationProps extends React.ComponentPropsWithRef<'div'> {
  /*
   * The title of the anchor navigation
   */
  title?: string;
}

const AnchorNavigation: React.FC<AnchorNavigationProps> = ({
  title,
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const wrapperClasses = classNames(`${prefix}--anchor-navigation`, className);
  return (
    <div className={wrapperClasses} {...other}>
      <div className={`${prefix}--anchor-header-title`}>{title}</div>
      <div className={`${prefix}--anchor-content`}>{children}</div>
    </div>
  );
};

export default AnchorNavigation;
