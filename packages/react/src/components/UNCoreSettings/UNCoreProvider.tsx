import React, { createContext, PropsWithChildren } from 'react';
//import propTypes from 'prop-types';
import { defaultUNContext } from './defaults';

interface AppContextInterface {
  prefix: string;
  selectorTabbable: string;
  selectorFocusable: string;
}

export const UNCoreContext =
  createContext<AppContextInterface>(defaultUNContext);

/** A toggle is used to quickly switch between two possible states. They are commonly used for “on/off” switches */
type UNCoreProps = PropsWithChildren<{
  children?: React.ReactNode;
}>;

export const UNCoreProvider: React.FC<UNCoreProps> = ({
  children,
  ...props
}) => {
  const ctx = { ...defaultUNContext, ...props };
  return (
    <UNCoreContext.Provider value={ctx}>{children}</UNCoreContext.Provider>
  );
};

/*export const UNCoreProvider: React.FC<UNCoreProps> = ({ children }) => {
  //const ctx = { ...defaultUNContext /*, ...props };
  return <div>dddd</div>;
  return (
    <UNCoreContext.Provider value={ctx}>{children}</UNCoreContext.Provider>
  );
};*/

/*
UNCoreProvider.propTypes = {
  prefix: propTypes.string,
  selectorTabbable: propTypes.string,
  selectorFocusable: propTypes.string,
};
*/
