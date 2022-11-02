import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

/** ContentSwitcher manipulates the content shown following an exclusive or “either/or” pattern. It is used to toggle between two or more content sections within the same space on screen. Only one section can be shown at a time.
 */
export default function ContentSwitcher({
  children,
  className,
  selectedIndex,
  small,
  onChange,
  ...other
}) {
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
}

ContentSwitcher.propTypes = {
  /** Specify the content of your ContentSwitcher */
  children: PropTypes.node,

  /** Specify an optional className to be added to your ContentSwitcher */
  className: PropTypes.string,

  /** Specify an `onChange` handler that is called whenever the ContentSwitcher changes which item is selected */
  onChange: PropTypes.func.isRequired,

  /** Specify a selected index for the initially selected content */
  selectedIndex: PropTypes.number,
};

ContentSwitcher.defaultProps = {
  selectedIndex: 0,
};
