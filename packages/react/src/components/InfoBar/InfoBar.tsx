import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import Wrapper from '../Wrapper';
import useSettings from '../../hooks/useSettings';
import { ScreenSize } from '../../types/utils';

/** The InfoBar shows very important information on top of the page. */
type InfoBarProps = PropsWithChildren<{
  pageWidth?: ScreenSize;
  wrapperClassName?: string;
  className?: Argument;
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

export default InfoBar;
