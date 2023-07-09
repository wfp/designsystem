/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
//import classNames from 'classnames';
//import useSettings from '../../hooks/useSettings';
import useTab from './useTab';

export interface TabProps extends React.ComponentPropsWithRef<'li'> {
  handleTabClick?: (
    index?: number,
    label?: string | React.ReactNode,
    evt?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTabAnchorFocus?: (index?: number) => void;
  handleTabKeyDown?: (
    index?: number,
    label?: string | React.ReactNode,
    evt?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  href?: string;
  index?: number;
  label?: React.ReactNode;
  role?: string;
  selected?: boolean;
  tabIndex?: number;
  renderAnchor?: (props?: object) => React.ReactNode;
  renderContent?: () => React.ReactNode;
  renderListElement?: ((props?: object) => React.ReactNode) | React.ReactNode;
  className?: string;
  disabled?: boolean;
  components?: {
    Tab?: React.ReactNode;
  };
  //onClick?: (evt?: Event) => void;
  //onKeyDown?: (evt?: Event) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  // const { prefix } = useSettings();
  const {
    // className,
    disabled,
    //  handleTabClick = () => {},
    // handleTabAnchorFocus = () => {}, // eslint-disable-line
    //  handleTabKeyDown = () => {},
    // href,
    // index = 0,
    label,
    //  selected,
    //  tabIndex,
    ///  onClick = () => {},
    //  onKeyDown = () => {},
    renderAnchor,
    renderListElement,
    //  ...other
  } = props;

  const { anchorProps, liProps, selectedClasses } = useTab(props);

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
