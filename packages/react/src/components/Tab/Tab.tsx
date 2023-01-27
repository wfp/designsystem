import React from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';

interface TabProps {
  handleTabClick?: (
    index?: number,
    label?: string | React.ReactNode,
    evt?: any
  ) => void;
  handleTabAnchorFocus?: (index?: number) => void;
  handleTabKeyDown?: (
    index?: number,
    label?: string | React.ReactNode,
    evt?: any
  ) => void;
  href: string;
  index?: number;
  label?: React.ReactNode;
  role: string;
  selected: boolean;
  tabIndex: number;
  renderAnchor?: (props?: any) => React.ReactNode;
  renderContent?: () => React.ReactNode;
  renderListElement?: ((props?: any) => React.ReactNode) | React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (evt?: any) => void;
  onKeyDown?: (evt?: any) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  const { prefix } = useSettings();
  const {
    className,
    disabled,
    handleTabClick,
    handleTabAnchorFocus, // eslint-disable-line
    handleTabKeyDown,
    href,
    index,
    label,
    selected,
    tabIndex,
    onClick,
    onKeyDown,
    renderAnchor,
    renderListElement,
    ...other
  } = props;

  const setTabFocus = (evt) => {
    const leftKey = 37;
    const rightKey = 39;
    if (evt.which === leftKey) {
      props.handleTabAnchorFocus(props.index - 1);
    } else if (evt.which === rightKey) {
      props.handleTabAnchorFocus(props.index + 1);
    } else {
      return;
    }
  };

  const classes = classNames(
    `${prefix}--tabs__nav-item`,
    { [`${prefix}--tabs__nav-item--disabled`]: disabled },
    { [`${prefix}--tabs__nav-item--selected`]: selected },
    className
  );

  const selectedClasses = classNames(
    `${prefix}--tabs__nav-item`,
    `${prefix}--tabs__nav-item--selected`,
    className
  );

  const anchorProps = {
    className: 'wfp--tabs__nav-link',
    href: disabled ? undefined : href,
    label,
    role: 'tab',
    tabIndex,
    'aria-selected': selected,
    // ref: (e) => {
    //   tabAnchor = e;
    // },
  };

  //  {...other}
  const liProps = {
    tabIndex: -1,
    className: classes,
    onClick: (evt) => {
      if (!disabled) {
        handleTabClick(index, label, evt);
        onClick(evt);
      }
    },
    onKeyDown: (evt) => {
      if (!disabled) {
        setTabFocus(evt);
        handleTabKeyDown(index, label, evt);
        onKeyDown(evt);
      }
    },
    role: 'presentation',
    selected: selected,
    ...other,
  };

  return (
    <React.Fragment>
      {renderListElement ? (
        typeof renderListElement === 'function' ? (
          renderListElement({
            ...props,
            ...liProps,
            anchor: anchorProps,
            selectedClasses: selectedClasses,
          })
        ) : (
          <>{renderListElement}</>
        )
      ) : (
        <li {...liProps}>
          {renderAnchor ? (
            renderAnchor(anchorProps)
          ) : disabled ? (
            <span {...anchorProps}>{label}</span>
          ) : (
            <a {...anchorProps}>{label}</a>
          )}
        </li>
      )}
    </React.Fragment>
  );
};

export default Tab;
