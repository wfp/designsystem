import React, { useEffect, useRef, useState } from 'react';

import { StarSolid16 } from '@wfp/icons-react';

import Button from '../Button';
import Tag from '../Tag';

import { settings } from '../../globals/js';

const { prefix } = settings;

const CardExternal = (props) => {
  const myRef = useRef();
  const supportiveTextFontSize = 14;
  const supportiveTextLineHeight = 1.5;

  // Set a maximum of 3 lines of supportive text by default
  const [supportiveTextHeight, setsupportiveTextHeight] = useState(
    supportiveTextFontSize * supportiveTextLineHeight * 3
  );

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
    <div className={`${prefix}--card-ext`}>
      {/*
       * Label is optional.
       * It can be either 'neutral' (default) or 'success'
       */}
      <div
        className={`${prefix}--card-ext__label ${prefix}--card-ext__label--success`}>
        Label
      </div>
      <figure className={`${prefix}--card-ext__media`}>
        <img
          className={`${prefix}--card-ext__image`}
          src="http://www1.wfp.org/sites/default/files/images/yemen-hero-min.jpg"
          alt="Card picture"
        />
      </figure>
      {/* If card has actions, show a divider by adding a dedicated modifier handled with a boolean prop */}
      <div
        className={`${prefix}--card-ext__info-wrapper ${prefix}--card-ext__info-wrapper--with-divider`}>
        <div className={`${prefix}--card-ext__primary-title`}>
          {/* Subheading is optional */}
          <p className={`${prefix}--card-ext__subheading`}>Subheading</p>
          <p className={`${prefix}--card-ext__heading`}>Heading</p>
        </div>
        {/* Supportive text is optional */}
        <div
          className={
            props.truncated
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vitae congue magna. Mauris vitae velit lacinia, porttitor tellus sit
            amet, hendrerit ipsum. Vivamus sagittis leo ut erat eleifend, sed
            bibendum metus porttitor. Nam ac consectetur dui. Aliquam
            vestibulum, justo ac condimentum dignissim, odio sapien iaculis
            risus, ac rhoncus dolor metus a nulla. Suspendisse potenti. Donec
            lectus ante, mattis a tellus in, semper rhoncus metus. Ut pulvinar
            et nisi nec vulputate. Morbi in ante finibus tortor vehicula
            convallis congue vel justo.
          </p>
        </div>
        {/* Tags are optional */}
        <div className={`${prefix}--card-ext__tags`}>
          <Tag className={`${prefix}--card-ext__tag`} type="custom">
            Tag
          </Tag>
        </div>
      </div>
      {/* Better to allow only small buttons for alignment reasons */}
      <div className={`${prefix}--card-ext__actions`}>
        <Button
          className={`${prefix}--card-ext__action`}
          kind="ghost"
          small
          style={{ textTransform: 'uppercase' }}>
          Action 1
        </Button>
        <Button className={`${prefix}--card-ext__action`} kind="ghost" small>
          Action 2
        </Button>
        {/* Last action can be aligned to the right with a dedicated modifier handled with a boolean prop (alignToRight) */}
        {/* TODO: Provide the Star icon (outline version) from the kit */}
        <Button
          className={`${prefix}--card-ext__action ${prefix}--card-ext__action--align-to-right`}
          kind="ghost"
          small
          icon={StarSolid16}
          iconDescription="FavoriteOutline16"
        />
      </div>
    </div>
  );
};

export default CardExternal;
