import useSettings from '../../hooks/useSettings';
import classNames from 'classnames';

export default function useTab(props) {
  const { prefix } = useSettings();

  const {
    className,
    disabled,
    handleTabClick = () => {}, // eslint-disable-line
    handleTabAnchorFocus = () => {}, // eslint-disable-line
    handleTabKeyDown = () => {}, // eslint-disable-line
    href,
    index = 0,
    label,
    selected,
    tabIndex,
    onClick = () => {}, // eslint-disable-line
    onKeyDown = () => {}, // eslint-disable-line
    //renderAnchor,
    //renderListElement,
    ...other
  } = props;

  const setTabFocus = (evt) => {
    const leftKey = 37;
    const rightKey = 39;
    if (evt.which === leftKey && handleTabAnchorFocus) {
      handleTabAnchorFocus(index - 1);
    } else if (evt.which === rightKey && handleTabAnchorFocus) {
      handleTabAnchorFocus(index + 1);
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

  return {
    liProps,
    anchorProps,
    selectedClasses,
  };
}
