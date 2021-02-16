import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/**
 * Cards are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */
const Card = ({
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
  const style =
    kind == 'overlay'
      ? {
          backgroundImage: `url(${image})`,
        }
      : {};

  const pagewidth = cardWidth ? cardWidth : '300px';
  const pageheight = cardHeight ? cardHeight : '260px';

  const wrapperClasses = classNames('wfp--card-box', {
    [`wfp--photo-cardnew--${kind}`]: kind,
    // 'wfp--photo-cardnew--no-background': !image,
    'wfp--photo-cardnew--link': isLink,
    [`${className}`]: className,
  });

  const content = (
    <>
      <div className="wfp--photo-cardnew__background" style={style} />
      {image && kind === 'image-header' ?
      (
        <img src={image} alt={title} className="wfp--header-photo" />
      ): kind === 'image-header' && (
      <img src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/yemen-hero-min.jpg`} 
      alt={title} className="wfp--header-photo" />)
    }

      
      <div className="wfp--photo-cardnew__info">
        <div>
          {kind === 'overlay' && (
            <div
              className="wfp--photo-cardnew__info__background"
              style={style}
            />
          )}
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

Card.propTypes = {
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
  Kind of Card
*/
  kind: PropTypes.oneOf(['text-card', 'image-header', 'overlay']).isRequired,
  /**
  The URL where the content uploaded is located.
*/
  url: PropTypes.string,
  /**
   * override default card width with preferred width
   */
  cardWidth: PropTypes.string,

  /**
   * override default card width with preferred width
   */
  cardHeight: PropTypes.string,
};

Card.defaultProps = {
  isLink: false,
};

export default Card;
