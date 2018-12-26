import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Card = ({
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
  const style = {
    backgroundImage: `url(${image})`,
  };

  const wrapperClasses = classNames('wfp--photo-card', {
    'wfp--photo-card--landscape': kind === 'landscape',
    'wfp--photo-card--landscape-light': kind === 'landscape-light',
    'wfp--photo-card--split': kind === 'split',
    'wfp--photo-card--hero': kind === 'hero',
    'wfp--photo-card--splash': kind === 'splash',
    'wfp--photo-card--splash-image': kind === 'splash-image',
    'wfp--photo-card--splash-compact': kind === 'splash-compact',
    'wfp--photo-card--related': kind === 'related',
    'wfp--photo-card--no-background': !image,
    'wfp--photo-card--link': isLink,
    [`${className}`]: className,
  });

  const content = (
    <React.Fragment>
      <div className="wfp--photo-card__background" style={style} />
      {image && kind === 'related' && <img src={image} alt={title} />}
      <div className="wfp--photo-card__info">
        <div>
          {(kind === 'landscape' || kind === 'hero') && (
            <div className="wfp--photo-card__info__background" style={style} />
          )}
          {metadata && (
            <p className="wfp--photo-card__info__metadata">{metadata}</p>
          )}
          {title &&
            (kind === 'hero' || kind === 'page-splash') && (
              <h2 className="wfp--photo-card__info__title">{title}</h2>
            )}
          {title &&
            kind !== 'hero' &&
            kind !== 'page-splash' && (
              <h3 className="wfp--photo-card__info__title">{title}</h3>
            )}
          {subTitle && (
            <p className="wfp--photo-card__info__subtitle">{subTitle}</p>
          )}
        </div>

        {kind === 'hero' ||
          kind === 'splash-image' ||
          (kind === 'splash-compact' && (
            <div className="wfp--photo-card__info__more">{more}</div>
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

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  isExternal: PropTypes.bool,
  isLink: PropTypes.bool,
  subTitle: PropTypes.node,
  title: PropTypes.node,
  metadata: PropTypes.string,
  more: PropTypes.node,
  kind: PropTypes.string,
  url: PropTypes.string,
};

Card.defaultProps = {
  isLink: true,
};

export default Card;
