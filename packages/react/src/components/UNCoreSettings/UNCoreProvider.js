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
  prefix: propTypes.string,
  selectorTabbable: propTypes.string,
  selectorFocusable: propTypes.string,
};
