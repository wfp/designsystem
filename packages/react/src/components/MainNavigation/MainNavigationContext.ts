/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export interface MainNavigationContextType {
  onChangeSub: (action: string, i?: string, e?: any) => void;
  activeMenuItem?: string | null;
  openMobile: boolean;
  toggleMenu: () => void;
}

const MainNavigationContext = React.createContext<MainNavigationContextType>({
  onChangeSub: (e) => e,
  activeMenuItem: null,
  openMobile: false,
  toggleMenu: () => {},
});
export default MainNavigationContext;
