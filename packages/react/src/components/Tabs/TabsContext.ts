/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export interface TabsContextType {
  handleTabClick?: (onSelectionChange?: any) => void;
  handleTabKeyDown?: (onSelectionChange?: any) => void;
  handleTabAnchorFocus?: (onSelectionChange?: any) => void;
}

const TabsContext = React.createContext<TabsContextType>({
  handleTabClick: () => {},
  handleTabKeyDown: () => {},
  handleTabAnchorFocus: () => {},
});
export default TabsContext;
