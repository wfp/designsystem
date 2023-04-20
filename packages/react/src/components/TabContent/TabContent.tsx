import React, { PropsWithChildren } from 'react';

interface TabContentProps {
  /**
   * Specify whether the TabContent is selected
   */
  selected: boolean;
  /**
   * Pass in content to render inside of the TabContent
   */
  children?: React.ReactNode;
}

const TabContent: React.FC<PropsWithChildren<TabContentProps>> = (props) => {
  const { selected = false, children, ...other } = props;

  return (
    <div {...other} data-selected={selected} hidden={!selected}>
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';

export default TabContent;
