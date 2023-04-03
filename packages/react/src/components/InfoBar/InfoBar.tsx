import * as React from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import useSettings from '../../hooks/useSettings';
import { ScreenSize } from '../../typesLegacyBB/utils';

/** The InfoBar shows very important information on top of the page. */
type InfoBarProps = PropsWithChildren<{
  pageWidth?: ScreenSize;
  wrapperClassName?: string;
  className?: string;
  id?: string;
}>;

const InfoBar: React.FC<InfoBarProps> = ({
  children,
  className,
  id,
  pageWidth,
}) => {
  const { prefix } = useSettings();

  const wrapperClasses = classNames(`${prefix}--info-bar`, className);

  return (
    <div id={id} className={wrapperClasses}>
      <Wrapper pageWidth={pageWidth}>{children}</Wrapper>
    </div>
  );
};

InfoBar.displayName = 'InfoBar';

export default InfoBar;
