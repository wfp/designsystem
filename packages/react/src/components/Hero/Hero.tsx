import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { HeroKind } from '../../types/utils';
/**
 * Hero are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */
type HeroProps = PropsWithChildren<{
  href?: string;
  image?: string;
  isExternal?: boolean;
  isLink?: boolean;
  subTitle?: React.ReactNode;
  title?: string | React.ReactNode;
  metadata?: string;
  more?: React.ReactNode;
  kind?: HeroKind;
  url?: string;
  className?: Argument;
}>;

const Hero: React.FC<HeroProps> = ({
  children,
  className,
  image,
  isExternal,
  isLink,
  metadata,
  more,
  subTitle,
  title,
  kind,
  url,
  ...other
}) => {
  const { prefix } = useSettings();

  const style =
    kind !== 'related'
      ? {
          backgroundImage: `url(${image})`,
        }
      : {};

  const wrapperClasses = classNames(`${prefix}--photo-card`, {
    [`${prefix}--photo-card--${kind}`]: kind,
    [`${prefix}--photo-card--no-background`]: !image,
    [`${prefix}--photo-card--link`]: isLink,
    [`${className}`]: className,
  });

  const content = (
    <React.Fragment>
      <div className={`${prefix}--photo-card__background`} style={style} />
      {image && kind === 'related' && <img src={image} alt={title} />}
      <div className={`${prefix}--photo-card__info`}>
        <div>
          {(kind === 'landscape' || kind === 'hero') && (
            <div
              className={`${prefix}--photo-card__info__background`}
              style={style}
            />
          )}
          {metadata && (
            <p className={`${prefix}--photo-card__info__metadata`}>
              {metadata}
            </p>
          )}
          {title && (kind === 'hero' || kind === 'splash-compact') && (
            <h2 className={`${prefix}--photo-card__info__title`}>{title}</h2>
          )}
          {title && kind !== 'hero' && kind !== 'splash-compact' && (
            <h3 className={`${prefix}--photo-card__info__title`}>{title}</h3>
          )}
          {subTitle && (
            <p className={`${prefix}--photo-card__info__subtitle`}>
              {subTitle}
            </p>
          )}
        </div>

        {kind === 'hero' ||
          kind === 'splash-image' ||
          (kind === 'splash-compact' && (
            <div className={`${prefix}--photo-card__info__more`}>{more}</div>
          ))}
      </div>
      {children}
    </React.Fragment>
  );

  return isLink ? (
    <a
      href={url}
      target={isExternal ? '_blank' : ''}
      className={wrapperClasses}
      {...other}>
      {content}
    </a>
  ) : (
    <div className={wrapperClasses} {...other}>
      {content}
    </div>
  );
};

export default Hero;
