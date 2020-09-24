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

const Text = ({ children, className, kind }) => {
  const tagName = { name: textLookup[kind] ? textLookup[kind] : 'div' };
  const classNames = classnames({
    'wfp--text': true,
    [`${prefix}--story__${kind}`]: kind,
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
  ]),
};

export default Text;
