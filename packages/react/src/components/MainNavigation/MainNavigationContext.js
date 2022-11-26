import React from 'react';
const MainNavigationContext = React.createContext({
  onChangeSub: () => {},
  activeMenuItem: undefined,
  openMobile: false,
  toggleMenu: () => {},
});
export default MainNavigationContext;
