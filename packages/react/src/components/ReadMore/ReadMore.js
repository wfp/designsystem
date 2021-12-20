import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import Link from '../Link';
import Icon from '../Icon';
import { CaretUpGlyph, CaretDownGlyph } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

const MoreLink = ({ handleToggleClick, link, text, showMore }) => {
  const { prefix } = useSettings();

  if (link) {
    var clonedLink = React.cloneElement(link, {
      onClick: handleToggleClick,
    });
    return clonedLink;
  } else {
    const Icon = showMore ? CaretUpGlyph : CaretDownGlyph;
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

/** ReadMore component is a simple way to keep longer content from cluttering up your page, giving you more control over how much content is displayed to visitor */
export default function ReadMore({
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
}) {
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
}

ReadMore.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,
  /**
   * The content of the expanded element
   */
  children: PropTypes.node.isRequired,
  /**
   * The content of the collapsed content (optional)
   */
  collapsed: PropTypes.node,

  /**
   * A custom link for collapsing
   */
  collapseLink: PropTypes.node,
  /**
   * Custom text for collapsing
   */
  collapseText: PropTypes.node,
  /**
   * Disable the scroll into view on expanding
   */
  disableAutoscroll: PropTypes.bool,
  /**
   * A custom link for expanding
   */
  expandLink: PropTypes.node,
  /**
   * Custom text for expanding
   */
  expandText: PropTypes.node,
  /**
   * Enables the fade effect when the content is collapsed (optional) when enabled collapsed will be ignored
   */
  fade: PropTypes.bool,
  /**
   * The maximum height when the content is collapsed (optional)
   */
  maxHeight: PropTypes.number,
};

ReadMore.defaultProps = {
  expandText: 'Read more',
  collapseText: 'Read less',
};
