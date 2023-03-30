import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** The Story component adds a default style, formatting and spacing for a longer text with main focus on readability. */

export interface StoryProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Story: React.FC<StoryProps> = ({ children, className, ...other }) => {
  const { prefix } = useSettings();

  const wrapperclassNames = classNames({
    [`${prefix}--story`]: true,
    [`${className}`]: className,
  });
  return (
    <div className={wrapperclassNames} {...other}>
      {children}
    </div>
  );
};

export default Story;
