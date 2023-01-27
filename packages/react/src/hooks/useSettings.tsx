import { useContext } from 'react';

import { defaultUNContext } from '../components/UNCoreSettings/defaults';
import { UNCoreContext } from '../components/UNCoreSettings/UNCoreProvider';

export default function useSettings() {
  const settings = useContext(UNCoreContext);

  if (settings === undefined) {
    return defaultUNContext;
  }

  return settings;
}
