import React from 'react';
import propTypes from 'prop-types';
import { defaultUNContext } from './defaults';

export const UNCoreContext = React.createContext(defaultUNContext);

export const UNCoreProvider = ({ children, ...props }) => {
  const ctx = { ...defaultUNContext, ...props };
  return (
    <UNCoreContext.Provider value={ctx}>{children}</UNCoreContext.Provider>
  );
};

UNCoreProvider.propTypes = {
  /**
   * Set the prefix for all css classes, default is 'un'.
   */
  prefix: propTypes.string,
  selectorTabbable: propTypes.string,
  selectorFocusable: propTypes.string,
  /**
   * Enable customizations for touch displays
   */
  touch: propTypes.bool,
};
