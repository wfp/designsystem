import { useContext } from 'react';
import { UNCoreContext, defaultUNContext } from '../components/UNCoreSettings';

export default function useSettings() {
  const settings = useContext(UNCoreContext);

  if (settings === undefined) {
    return defaultUNContext;
  }

  return settings;
}
