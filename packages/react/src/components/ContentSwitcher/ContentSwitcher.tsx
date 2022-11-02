import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';

/** ContentSwitcher manipulates the content shown following an exclusive or “either/or” pattern. It is used to toggle between two or more content sections within the same space on screen. Only one section can be shown at a time.
 */

type ContentSwitcherProps = PropsWithChildren<{
  className?: Argument;
  selectedIndex?: number;
  small?: boolean;
  onChange: (data: any) => void;
}>;

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({
  children,
  className,
  selectedIndex,
  small,
  onChange,
  ...other
}) => {
  const { prefix } = useSettings();
  const [selectedIdx, setSelectedIndex] = useState(selectedIndex);

  const getChildren = (children) => {
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        index,
        onClick: handleChildChange,
        onKeyDown: handleChildChange,
        selected: index === selectedIdx,
      })
    );
  };

  const handleChildChange = (data) => {
    const { index } = data;
    if (selectedIdx !== index) {
      setSelectedIndex(index);
      onChange(data);
    }
  };

  const classes = classNames(`${prefix}--content-switcher`, className, {
    [`${prefix}--content-switcher--sm`]: small,
  });

  return (
    <div {...other} className={classes}>
      {getChildren(children)}
    </div>
  );
};

export default ContentSwitcher;
