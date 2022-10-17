import React from 'react';

import { useGlobalTheme, THEME } from '../../../common/ThemeContext';

export const Switch: React.FC = () => {
  const { setTheme, theme } = useGlobalTheme();

  const changeTheme = () => {
    if (setTheme) {
      setTheme(
        theme === THEME.light ? THEME.dark : THEME.light
      );
    }
  };

  return (
    <React.Fragment>
      <input
        onChange={changeTheme}
        id="themeSwitch"
        type="checkbox"
        name="themeSwitch" />
      <label htmlFor="themeSwitch">
        <span>Theme switch</span>
      </label>
    </React.Fragment>
  );
};
