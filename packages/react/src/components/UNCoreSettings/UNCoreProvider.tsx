import React, {
  useState,
  createContext,
  PropsWithChildren,
  useEffect,
} from 'react';
//import propTypes from 'prop-types';
import { defaultUNContext } from './defaults';

interface AppContextInterface {
  prefix: string;
  selectorTabbable: string;
  selectorFocusable: string;
  theme: string;
  setTheme: () => {};
  wrapperElement: HTMLElement;
}

export const UNCoreContext =
  createContext<AppContextInterface>(defaultUNContext);

/** A toggle is used to quickly switch between two possible states. They are commonly used for “on/off” switches */
type UNCoreProps = PropsWithChildren<{
  children?: React.ReactNode;
  initialTheme?: string;
}>;

// Detecting the default theme
const isBrowserDefaultDark = () =>
  window ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

export const UNCoreProvider: React.FC<UNCoreProps> = ({
  children,
  wrapperElement = document.body,
  prefix = 'wfp',
  initialTheme = 'auto',
  ...props
}) => {
  const setElementTheme = (theme: string) => {
    const prefixClass = `${prefix}--theme--`;
    const classes = wrapperElement.className
      .split(' ')
      .filter((c) => !c.startsWith(prefixClass));

    wrapperElement.className = classes.join(' ').trim();
    if (theme === 'auto') {
      isBrowserDefaultDark() ? 'dark' : 'light';
    }

    const newTheme =
      theme === 'auto' && isBrowserDefaultDark()
        ? 'dark'
        : theme === 'auto'
        ? 'light'
        : theme;
    wrapperElement.classList.add(`${prefix}--theme--${newTheme}`);
    return newTheme;
  };

  const getActualTheme = () => {
    const defaultTheme = getDefaultTheme();
    if (defaultTheme === 'auto')
      return isBrowserDefaultDark() ? 'dark' : 'light';

    return defaultTheme;
  };

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('theme');
    const defaultTheme = localStorageTheme || initialTheme;
    setElementTheme(defaultTheme);
    return defaultTheme;
  };

  const [themeState, setThemeState] = useState(getDefaultTheme());
  const [actualThemeState, setActualThemeState] = useState(getActualTheme());

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  const mqListener = (e) => {
    if (themeState === 'auto') {
      const newTheme = setElementTheme('auto');
      setActualThemeState(newTheme);
    }
  };

  const setTheme = (theme) => {
    const newTheme = setElementTheme(theme);
    setActualThemeState(newTheme);
    localStorage.setItem('theme', theme);
    setThemeState(theme);
  };

  const ctx = {
    ...defaultUNContext,
    ...props,
    prefix,
    theme: themeState,
    actualTheme: actualThemeState,
    setTheme,
  };
  return (
    <UNCoreContext.Provider value={ctx}>{children}</UNCoreContext.Provider>
  );
};
