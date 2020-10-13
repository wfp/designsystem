import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
 * Cards are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */
const CardNew = ({
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
  cardWidth,
  cardHeight,
  ...other
}) => {
  const style =
    kind !== 'related'
      ? {
          backgroundImage: `url(${image})`,
        }
      : {};

  const pagewidth = cardWidth ? cardWidth : '300px';
  const pageheight = cardHeight ? cardHeight : '260px';

  const wrapperClasses = classNames('wfp--card-box', {
    [`wfp--photo-cardnew--${kind}`]: kind,
    'wfp--photo-cardnew--no-background': !image,
    'wfp--photo-cardnew--link': isLink,
    [`${className}`]: className,
  });

  const content = (
    <>
      <div className="wfp--photo-cardnew__background" />
      {image && kind === 'related' && <img src={image} alt={title} />}
      <div className="wfp--photo-cardnew__info">
        <div>
          {metadata && (
            <p className="wfp--photo-cardnew__info__metadata">{metadata}</p>
          )}
          {title && (
            <h3 className="wfp--photo-cardnew__info__title">{title}</h3>
          )}
          {subTitle && (
            <p className="wfp--photo-cardnew__info__subtitle">{subTitle}</p>
          )}
        </div>
      </div>
      {children}
    </>
  );

  return (
    <div
      className={wrapperClasses}
      {...other}
      style={{ width: pagewidth, minHeight: pageheight }}>
      {content}
    </div>
  );
};

CardNew.propTypes = {
  /**
   Additional className which will be added
 */
  className: PropTypes.string,
  /**
   The links target
*/
  href: PropTypes.string,
  /**
   An optimized photograph
 */
  image: PropTypes.string,
  /**
  External link flag
*/
  isExternal: PropTypes.bool,
  /**
  Render the Card as link
*/
  isLink: PropTypes.bool,
  /**
  A short sentence to explain the content of the node (max 180 characters) 
*/
  subTitle: PropTypes.node,
  /**
   A search-friendly title (ideally 50 characters, max 100) 
*/
  title: PropTypes.node,
  /**
  Additional metadatas
*/
  metadata: PropTypes.string,
  /**
  Additional more content
*/
  more: PropTypes.node,
  /**
  Kind of Card
*/
  kind: PropTypes.oneOf(['text-card']).isRequired,
  /**
  The URL where the content uploaded is located.
*/
  url: PropTypes.string,
};

CardNew.defaultProps = {
  isLink: false,
};

export default CardNew;
