import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import useSettings from '../../hooks/useSettings';

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
  caption: 'div',
  code: 'code',
};

/**
 *Text is a component for displaying paragraphs. You can use Text to standardize text across your web app. For longer sections or full articles use the <Story /> component instead.
 */

const Text = ({ children, className, kind, spacingTop, spacingBottom }) => {
  const { prefix } = useSettings();
  const tagName = { name: textLookup[kind] ? textLookup[kind] : 'div' };
  const classNames = classnames({
    [`${prefix}--text`]: true,
    [`${prefix}--text__${kind}`]: kind,
    [`${prefix}--text__spacing-top-${spacingTop}`]: spacingTop,
    [`${prefix}--text__spacing-bottom-${spacingBottom}`]: spacingBottom,
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
    'inline-highlight',
    'caption',
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