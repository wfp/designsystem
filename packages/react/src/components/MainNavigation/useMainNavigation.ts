import { useContext } from 'react';

import MainNavigationContext, {
  MainNavigationContextType,
} from './MainNavigationContext';

export default function useMainNavigation(): MainNavigationContextType {
  const settings = useContext(MainNavigationContext);

  return settings;
}
