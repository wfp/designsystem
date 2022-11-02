import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/** The Story component adds a default style, formatting and spacing for a longer text with main focus on readability. */
type StoryProps = PropsWithChildren<{
  className?: Argument;
}>;

const Story: React.FC<StoryProps> = ({ children, className }) => {
  const { prefix } = useSettings();

  const wrapperclassNames = classNames({
    [`${prefix}--story`]: true,
    [`${className}`]: className,
  });
  return <div className={wrapperclassNames}>{children}</div>;
};

export default Story;
