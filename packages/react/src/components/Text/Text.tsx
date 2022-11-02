import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { Spacing, TextKind } from '../../types/utils';

type TextProps = PropsWithChildren<{
  kind?: TextKind;
  children?: React.ReactNode;
  spacingTop?: Spacing;
  spacingBottom?: Spacing;
  className?: Argument;
}>;

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

const Text: React.FC<TextProps> = ({
  children,
  className,
  kind,
  spacingTop,
  spacingBottom,
}) => {
  const { prefix } = useSettings();
  const tagName = { name: kind ? textLookup[kind] : 'div' };
  const classNames = classnames({
    [`${prefix}--text`]: true,
    [`${prefix}--text__${kind}`]: kind,
    [`${prefix}--text__spacing-top-${spacingTop}`]: spacingTop,
    [`${prefix}--text__spacing-bottom-${spacingBottom}`]: spacingBottom,
    [`${className}`]: className,
  });
  return <tagName.name className={classNames}>{children}</tagName.name>;
};

export default Text;
