import React from 'react';
import { THEME, useGlobalTheme } from '../../../common/ThemeContext';
import { InputStyled, LabelStyled } from './styled';

export const DarkModeSwitch: React.FC = () => {
  const name = 'themeSwitch';

  const { theme, setTheme } = useGlobalTheme();

  const changeTheme = () => {
    if (setTheme) {
      setTheme(theme === THEME.light ? THEME.dark : THEME.light);
    }
  };

  return (
    <React.Fragment>
      <InputStyled
        onChange={changeTheme}
        id={name}
        type="checkbox"
        name={name}
        data-testid="checkbox"
      />
      <LabelStyled
        htmlFor={name}
        className={theme}
        data-testid="label"
      ></LabelStyled>
    </React.Fragment>
  );
};
