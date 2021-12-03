import { useContext } from 'react';
import { UNCoreContext, defaultUNContext } from '../components/UNCoreSettings';

export default function useSettings() {
  const settings = useContext(UNCoreContext);

  // If the function is called outside of a react component,
  // return the default context
  if (settings === undefined) {
    return defaultUNContext;
  }

  return settings;
}

useSettings();
