import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import Link from '../Link';
import { CaretUp, CaretDown } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

const MoreLink = ({ handleToggleClick, link, text, showMore }) => {
  const { prefix } = useSettings();

  if (link) {
    var clonedLink = React.cloneElement(link, {
      onClick: handleToggleClick,
    });
    return clonedLink;
  } else {
    const Icon = showMore ? CaretUp : CaretDown;
    return (
      <Link
        className={`${prefix}--read-more__trigger`}
        small
        onClick={handleToggleClick}>
        {text}
        <Icon
          width="10"
          height="10"
          description={showMore ? 'icon up' : 'icon down'}
        />
      </Link>
    );
  }
};

type ReadMoreProps = PropsWithChildren<{
  className?: Argument;
  collapsed?: boolean;
  collapseLink?: React.ReactNode;
  collapseText?: React.ReactNode;
  disableAutoscroll?: boolean;
  expandLink?: React.ReactNode;
  expandText?: React.ReactNode;
  fade?: boolean;
  maxHeight?: number;
}>;
/** ReadMore component is a simple way to keep longer content from cluttering up your page, giving you more control over how much content is displayed to visitor */
const ReadMore: React.FC<ReadMoreProps> = ({
  collapseLink,
  collapseText,
  children,
  collapsed,
  className,
  disableAutoscroll,
  expandLink,
  expandText,
  fade,
  maxHeight,
}) => {
  const { prefix } = useSettings();
  const [showMore, setShowMore] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);
  const readMoreRef = useRef();
  const readMoreFakeRef = useRef();

  const handleToggleClick = (e) => {
    e.preventDefault();
    const innerHeight = readMoreRef.current.clientHeight;

    if (!showMore && !disableAutoscroll)
      setTimeout(() => {
        readMoreFakeRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }, 50);

    setShowMore(!showMore);
    setInnerHeight(innerHeight);
  };

  const classNames = classnames(className, {
    [`${prefix}--read-more`]: true,
    [`${prefix}--read-more--expanded`]: showMore,
    [`${prefix}--read-more--fade`]: fade,
    [`${prefix}--read-more--max-height`]: maxHeight,
  });

  const contentStyle = !maxHeight
    ? {
        undefined,
      }
    : maxHeight && !showMore
    ? {
        maxHeight: maxHeight,
      }
    : {
        maxHeight: innerHeight + 20,
      };

  const collapseStyle = showMore
    ? {
        display: 'none',
      }
    : {
        display: 'block',
      };

  return (
    <div className={classNames}>
      <div className={`${prefix}--read-more__content`} style={contentStyle}>
        <div
          className={`${prefix}--read-more__fake-height`}
          ref={readMoreFakeRef}
          style={{ height: `${innerHeight + 30}px` }}></div>
        <div ref={readMoreRef}>
          {(showMore || !collapsed) && children}
          {collapsed && <div style={collapseStyle}>{collapsed}</div>}
        </div>
      </div>
      <MoreLink
        handleToggleClick={handleToggleClick}
        showMore={showMore}
        link={showMore ? collapseLink : expandLink}
        text={showMore ? collapseText : expandText}
      />
    </div>
  );
};

export default ReadMore;
