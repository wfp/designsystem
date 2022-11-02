import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { CardKind } from '../../types/utils';

/**
 * Cards are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */
type CardProps = PropsWithChildren<{
  className?: Argument;
  image?: string;
  isExternal?: boolean;
  isLink?: boolean;
  subTitle?: React.ReactNode;
  title?: string | React.ReactNode;
  metadata?: string;
  children?: React.ReactNode;
  kind?: CardKind;
  url?: string;
  cardWidth?: string;
  cardHeight?: string;
}>;

const Card: React.FC<CardProps> = ({
  children,
  className,
  image,
  isExternal,
  isLink,
  metadata,
  subTitle,
  title,
  kind,
  url,
  cardWidth,
  cardHeight,
  ...other
}) => {
  const { prefix } = useSettings();
  const style =
    kind == 'overlay'
      ? {
          backgroundImage: `url(${image})`,
        }
      : {};

  const pagewidth = cardWidth ? cardWidth : '300px';
  const pageheight = cardHeight ? cardHeight : '260px';

  const wrapperClasses = classNames([`${prefix}--card-box`], {
    [`${prefix}--photo-cardnew--${kind}`]: kind,
    // 'wfp--photo-cardnew--no-background': !image,
    [`${prefix}--photo-cardnew--link`]: isLink,
    [`${className}`]: className,
  });

  const content = (
    <>
      {kind === 'overlay' ? (
        <div className={`${prefix}--photo-cardnew__background`} style={style} />
      ) : null}

      {image && kind === 'simple-card' ? (
        <img src={image} alt={title} className={`${prefix}--header-photo`} />
      ) : null}

      <div className={`${prefix}--photo-cardnew__info`}>
        <div>
          {kind === 'overlay' && (
            <div
              className={`${prefix}--photo-cardnew__info__background`}
              style={style}
            />
          )}
          {metadata && (
            <p className={`${prefix}--photo-cardnew__info__metadata`}>
              {metadata}
            </p>
          )}
          {title && (
            <h3 className={`${prefix}--photo-cardnew__info__title`}>{title}</h3>
          )}
          {subTitle && (
            <p className={`${prefix}--photo-cardnew__info__subtitle`}>
              {subTitle}
            </p>
          )}
        </div>
      </div>
      {children}
    </>
  );

  return isLink ? (
    <div
      className={wrapperClasses}
      style={{ width: pagewidth, minHeight: pageheight }}>
      <a
        href={url}
        target={isExternal ? '_blank' : ''}
        style={{ width: pagewidth, minHeight: pageheight }}
        {...other}>
        {content}
      </a>
    </div>
  ) : (
    <div
      className={wrapperClasses}
      {...other}
      style={{ width: pagewidth, minHeight: pageheight }}>
      {content}
    </div>
  );
};

export default Card;
