import { useState } from 'react';

/**
 * useTogglable(): hook used to open/close boolean state.
 */
export const useTogglable = () => {
  const [isOpen, setState] = useState(false);
  const open = () => setState(true);
  const close = () => setState(false);

  return { isOpen, open, close };
};
