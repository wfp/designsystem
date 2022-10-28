import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

function Image({ image, title, kind, className }) {
  if (image && kind === 'simple-card')
    return <img src={image} alt={title} className={className} />;
  return null;
}

function Metadata({ prefix, metadata }) {
  if (metadata)
    return (
      <p className={`${prefix}--photo-cardnew__info__metadata`}>{metadata}</p>
    );
  return null;
}

function Title({ prefix, title }) {
  if (title)
    return <p className={`${prefix}--photo-cardnew__info__title`}>{title}</p>;
  return null;
}

function SubTitle({ prefix, subTitle }) {
  if (subTitle)
    return (
      <p className={`${prefix}--photo-cardnew__info__subtitle`}>{subTitle}</p>
    );
  return null;
}

/**
 * Cards are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */
const Card = (props) => {
  const {
    children,
    className,
    image,
    isExternal,
    isLink,
    title,
    kind,
    url,
    cardWidth,
    cardHeight,
    components = {},
    ...other
  } = props;
  const { prefix } = useSettings();

  const defaultComponents = { Image, Title, SubTitle, Metadata };

  const allComponents = {
    ...defaultComponents,
    ...components,
  };
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

      <allComponents.Image
        src={image}
        alt={title}
        kind={kind}
        className={`${prefix}--header-photo`}
      />

      <div className={`${prefix}--photo-cardnew__info`}>
        <div>
          {kind === 'overlay' && (
            <div
              className={`${prefix}--photo-cardnew__info__background`}
              style={style}
            />
          )}
          <allComponents.Metadata prefix={prefix} {...props} />
          <allComponents.Title prefix={prefix} {...props} />
          <allComponents.SubTitle prefix={prefix} {...props} />
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

Card.propTypes = {
  /**
   Additional className which will be added
 */
  className: PropTypes.string,
  /**
   An optimized photograph
 */
  image: PropTypes.string,

  /**
   Additional components overriding the default ones
 */
  components: PropTypes.object,

  /**
  isExternal if true, opens link in a different window
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
  kind: PropTypes.oneOf(['simple-card', 'overlay']).isRequired,
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
  isLink: true,
};

export default Card;
