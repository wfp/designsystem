import { useContext } from 'react';
import { AppContextInterface, UNCoreContext } from './UNCoreProvider';

export default function useTheme(): AppContextInterface {
  const settings = useContext(UNCoreContext);
  return settings;
}
