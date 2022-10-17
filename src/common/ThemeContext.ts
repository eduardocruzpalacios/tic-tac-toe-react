import { createContext, useContext } from 'react';

export enum THEME {
  dark = 'dark',
  light = 'light'
}

type GlobalTheme = {
  theme?: THEME;
  setTheme?: (theme: THEME) => void;
};

const GlobalThemeContext = createContext<GlobalTheme>({
  theme: THEME.dark
});

export const useGlobalTheme = (): GlobalTheme => useContext(GlobalThemeContext);
