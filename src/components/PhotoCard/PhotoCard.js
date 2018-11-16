import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const PhotoCard = ({ children, className, image, isExternal, metadata, subTitle, title, kind, url, ...other }) => {

  const style = {
    backgroundImage: `url(${image})`
  }

  const wrapperClasses = classNames('wfp--photo-card', {
    'wfp--photo-card--landscape': kind === 'landscape',
    'wfp--photo-card--landscape-light': kind === 'landscape-light',
    'wfp--photo-card--split': kind === 'split',
    'wfp--photo-card--hero': kind === 'hero',
    'wfp--photo-card--page-splash': kind === 'page-splash',
    [`${className}`]: className,
  });

  return (
    <a href={url} target={isExternal ? '_blank': ''} className={wrapperClasses} {...other}>
      <div className="wfp--photo-card__background" style={style}></div>
      <div className="wfp--photo-card__info">
        <div className="wfp--photo-card__info__background" style={style}></div>
        {metadata && <p className="wfp--photo-card__info__metadata">{metadata}</p>}
        {title && <h3 className="wfp--photo-card__info__title">{title}</h3>}
        {subTitle && <p className="wfp--photo-card__info__subtitle">{subTitle}</p>}
      </div>


      {children}
    </a>
  );
};

PhotoCard.propTypes = {
  title: PropTypes.string,
  metadata: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  isExternal: PropTypes.bool
};

export default PhotoCard;
