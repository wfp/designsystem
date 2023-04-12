import { useContext } from 'react';

import { defaultUNContext } from '../components/UNCoreSettings/defaults';
import {
  AppContextInterface,
  UNCoreContext,
} from '../components/UNCoreSettings/UNCoreProvider';

export default function useSettings(): AppContextInterface {
  const settings = useContext(UNCoreContext);
  if (settings?.initialized === false) {
    console.warn('useSettings: UNCoreContext not initialized');
  }

  if (settings === undefined) {
    return defaultUNContext;
  }

  return settings;
}
