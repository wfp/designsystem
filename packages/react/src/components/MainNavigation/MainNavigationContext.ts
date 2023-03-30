/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

type MainNavigationContextType = {
  onChangeSub: (id: string) => void;
  activeMenuItem: string | undefined;
  openMobile: boolean;
  toggleMenu: () => void;
};

const MainNavigationContext = React.createContext<MainNavigationContextType>({
  onChangeSub: () => {},
  activeMenuItem: undefined,
  openMobile: false,
  toggleMenu: () => {},
});
export default MainNavigationContext;
