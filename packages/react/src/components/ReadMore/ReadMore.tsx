import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { CaretUp, CaretDown } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

const MoreLink = ({ handleToggleClick, link, text, showMore }) => {
  const { prefix } = useSettings();

  if (link) {
    const clonedLink = React.cloneElement(link, {
      onClick: handleToggleClick,
    });
    return clonedLink;
  } else {
    const Icon = showMore ? CaretUp : CaretDown;
    return (
      <Link
        className={`${prefix}--read-more__trigger`}
        size="sm"
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
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className?: string;
  /**
   * The content of the collapsed content (optional)
   */
  collapsed?: boolean;
  /**
   * A custom link for collapsing
   */
  collapseLink?: React.ReactNode;
  /**
   * Custom text for collapsing
   */
  collapseText?: React.ReactNode;
  /**
   * Disable the scroll into view on expanding
   */
  disableAutoscroll?: boolean;
  /**
   * A custom link for expanding
   */
  expandLink?: React.ReactNode;
  /**
   * Custom text for expanding
   */
  expandText?: React.ReactNode;
  /**
   * Enables the fade effect when the content is collapsed (optional) when enabled collapsed will be ignored
   */
  fade?: boolean;
  /**
   * The maximum height when the content is collapsed (optional)
   */
  maxHeight?: number;
}>;
/** ReadMore component is a simple way to keep longer content from cluttering up your page, giving you more control over how much content is displayed to visitor */
const ReadMore: React.FC<ReadMoreProps> = ({
  collapseLink,
  collapseText = 'Show less',
  children,
  collapsed,
  className,
  disableAutoscroll,
  expandLink,
  expandText = 'Show more',
  fade,
  maxHeight,
}) => {
  const { prefix } = useSettings();
  const [showMore, setShowMore] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);
  const readMoreRef = useRef<HTMLInputElement>(null);
  const readMoreFakeRef = useRef<HTMLInputElement>(null);

  const handleToggleClick = (e) => {
    e.preventDefault();
    const innerHeight = readMoreRef?.current?.clientHeight;

    if (!showMore && !disableAutoscroll)
      setTimeout(() => {
        if (readMoreFakeRef?.current)
          readMoreFakeRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
          });
      }, 50);

    setShowMore(!showMore);
    if (innerHeight) {
      setInnerHeight(innerHeight);
    }
  };

  const classes = classNames(className, {
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
    <div className={classes}>
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
