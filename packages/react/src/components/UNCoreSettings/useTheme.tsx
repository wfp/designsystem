import React, { useContext } from 'react';
import { UNCoreContext } from './UNCoreProvider';

export default function useTheme() {
  const settings = useContext(UNCoreContext);
  return settings;
}
