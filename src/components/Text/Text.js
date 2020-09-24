import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import settings from '../../globals/js/settings';
const { prefix } = settings;

export const textLookup = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h1',
  subtitle: 'h3',
  p: 'p',
};

/**
 *Text is a component for displaying text. You can use Text to standardize text across your web app.
 */

const Text = ({ children, className, kind, spacingTop, spacingBottom }) => {
  const tagName = { name: textLookup[kind] ? textLookup[kind] : 'div' };
  const classNames = classnames({
    'wfp--text': true,
    [`${prefix}--story__${kind}`]: kind,
    [`${prefix}--story__spacing-top-${spacingTop}`]: spacingTop,
    [`${prefix}--story__spacing-bottom-${spacingBottom}`]: spacingBottom,
    [`${className}`]: className,
  });
  return <tagName.name className={classNames}>{children}</tagName.name>;
};

Text.propTypes = {
  /**
    The Text content
  */
  children: PropTypes.node,
  /**
    Additional className for Story
  */
  className: PropTypes.string,
  /**
    Additional className for Story
  */
  kind: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'title',
    'subtitle',
    'p',
    'i',
    'bold',
    'strong',
    'sup',
    'a',
    'code',
  ]),
  /**
    Override spacing on top
  */
  spacingTop: PropTypes.oneOf([
    '3xs',
    '2xs',
    'xs',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
  ]),
  /**
  Override spacing on bottom
*/
  spacingBottom: PropTypes.oneOf([
    '3xs',
    '2xs',
    'xs',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
  ]),
};

export default Text;
