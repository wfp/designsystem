import * as React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

export interface SkeletonTextProps {
  /**
   * will generate multiple lines of text
   */
  paragraph?: boolean;
  /**
   * the number of lines in a paragraph
   */
  lineCount: number;
  /**
   * width (in px or %) of single line of text or max-width of paragraph lines
   */
  width?: string | number;
  /**
   * generates skeleton text at a larger size
   */
  heading?: boolean;
  className?: string;
}

const SkeletonText: React.FC<SkeletonTextProps> = ({
  paragraph = false,
  lineCount = 3,
  width = '100%',
  heading = false,
  className,
  ...other
}) => {
  const { prefix } = useSettings();

  const skeletonTextClasses = classNames(
    {
      [`${prefix}--skeleton__text`]: true,
      [`${prefix}--skeleton__heading`]: heading,
    },
    className
  );

  const widthNum = typeof width === 'string' ? parseInt(width, 10) : width;

  const widthPx = width.includes('px');
  const widthPercent = width.includes('%');

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (widthPercent && paragraph) {
    const lines: JSX.Element[] = [];
    for (let i = 0; i < lineCount; i++) {
      const randomWidth = getRandomInt(0, 75) + 'px';
      lines.push(
        <p
          className={skeletonTextClasses}
          style={{ width: `calc(${width} - ${randomWidth})` }}
          key={i}
          {...other}
        />
      );
    }
    return <div>{lines}</div>;
  }

  if (widthPx && paragraph) {
    const lines: JSX.Element[] = [];
    for (let j = 0; j < lineCount; j++) {
      const randomWidth = getRandomInt(widthNum - 75, widthNum) + 'px';
      lines.push(
        <p
          className={skeletonTextClasses}
          style={{ width: randomWidth }}
          key={j}
          {...other}
        />
      );
    }
    return <div>{lines}</div>;
  }
  return (
    <p className={skeletonTextClasses} style={{ width: width }} {...other} />
  );
};

SkeletonText.displayName = 'SkeletonText';

export default SkeletonText;
