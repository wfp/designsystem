import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tag from '../Tag';

import useSettings from '../../hooks/useSettings';

const CardExternal = ({
  label,
  labelStatus,
  interactive,
  image,
  heading,
  subHeading,
  caption,
  tag,
  children,
  className,
  ...other
}) => {
  const { prefix } = useSettings();
  const myRef = useRef();
  const supportiveTextFontSize = 14;
  const supportiveTextLineHeight = 1.5;

  // Set a maximum of 3 lines of supportive text by default
  const [supportiveTextHeight, setsupportiveTextHeight] = useState(
    supportiveTextFontSize * supportiveTextLineHeight * 3
  );

  // statusStyle apply different style(color, backgroundColor) based on its active state
  const statusStyle = labelStatus ? `success` : `neutral`;

  const wrapperClasses = classNames(`${prefix}--card-ext`, {
    [`${prefix}--card-ext--interactive`]: interactive,
    [`${className}`]: className,
  });

  /**
   * Get the height of the supportive text element.
   * This is useful to calculate a dynamic maximum amount of line text with final
   * ellipsis for the "supportive text" element, depending of the available
   * height.
   *
   * Cards' title has no limits in terms of line text, whereas we can decide to
   * truncate the supportive text at 3 number of lines. The multiline truncation
   * can be obtained by using the "line clamp" CSS property that truncates text
   * at a specific number of lines.
   * The problem is, if we place three cards on a Flexbox/Grid parent, these
   * cards will have the same height, depending on the highest of the three.
   * This means that if one card has a multiline title, the other two will grow
   * in height, showing a significant white space. To fill the latter cards'
   * white space we need to increase the number of their "supportive text" lines.
   * To do this we need to divide the "supportive text" element's height by its
   * font-size and line-height in order to get exact amount of line text that are
   * needed to fill the extra white space.
   *
   */
  useEffect(() => {
    setsupportiveTextHeight(myRef.current.offsetHeight);
  }, [myRef]);

  return (
    /* Also expose a custom classname prop */
    /**
     * A prop will establish if the card is either informative (default) or
     * interactive.
     * If interactive, a modifier will be added and an animation will be shown
     * on hover event ("${prefix}--card-ext--interactive").
     */
    <div className={wrapperClasses}>
      {/*
       * Label is optional.
       * It can be either 'neutral' (default) or 'success'
       */}
      {label && (
        <div
          className={`${prefix}--card-ext__label ${prefix}--card-ext__label--${statusStyle}`}>
          {label}
        </div>
      )}
      <figure className={`${prefix}--card-ext__media`}>
        <image
          className={`${prefix}--card-ext__image`}
          src={image}
          alt="Card picture"
        />
      </figure>
      {/* If card has actions, show a divider by adding a dedicated modifier handled with a boolean prop */}
      <div
        className={`${prefix}--card-ext__info-wrapper ${prefix}--card-ext__info-wrapper--with-divider`}>
        <div className={`${prefix}--card-ext__primary-title`}>
          {/* Subheading is optional */}
          {subHeading && (
            <p className={`${prefix}--card-ext__subheading`}>{subHeading}</p>
          )}
          {heading && (
            <p className={`${prefix}--card-ext__heading`}>{heading}</p>
          )}
        </div>
        {/* Supportive text is optional */}
        <div
          className={
            other.truncated
              ? `${prefix}--card-ext__supportive-text ${prefix}--card-ext__supportive-text--truncated`
              : `${prefix}--card-ext__supportive-text`
          }
          ref={myRef}>
          <p
            style={{
              WebkitLineClamp: Math.floor(
                supportiveTextHeight /
                  supportiveTextLineHeight /
                  supportiveTextFontSize
              ),
            }}>
            {caption}
          </p>
        </div>
        {/* Tags are optional */}
        {tag && (
          <div className={`${prefix}--card-ext__tags`}>
            <Tag className={`${prefix}--card-ext__tag`} type="custom">
              {tag}
            </Tag>
          </div>
        )}
      </div>
      {/* Better to allow only small buttons for alignment reasons */}
      {children}
    </div>
  );
};

CardExternal.propTypes = {
  /**
   label description for card if any
  */
  label: PropTypes.string,

  /**
   labelStatus is either true or false, it applies  for card if any
  */
  labelStatus: PropTypes.bool,
  image: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  caption: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.node,
  interactive: PropTypes.bool,
  className: PropTypes.string,
};

export default CardExternal;
