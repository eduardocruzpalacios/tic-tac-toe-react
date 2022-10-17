import { createContext, useContext } from 'react';

export enum THEME {
  // eslint-disable-next-line no-unused-vars
  dark = 'dark',
  // eslint-disable-next-line no-unused-vars
  light = 'light'
}

type GlobalTheme = {
  theme?: THEME;
  setTheme?: (theme: THEME) => void;
};

export const GlobalThemeContext = createContext<GlobalTheme>({});

export const useGlobalTheme = (): GlobalTheme => useContext(GlobalThemeContext);
