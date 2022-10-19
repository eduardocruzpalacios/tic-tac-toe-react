import React from 'react';
import { Game } from '../../../components/organisms';
import { Title, Switch } from '../../../components/atoms';
import { HeaderStyled, MainStyled } from './styled';
import { THEME, useGlobalTheme } from '../../../common/ThemeContext';

export const MainPage: React.FC = () => {
  const title = 'Tic tac toe';

  const { theme, setTheme } = useGlobalTheme();

  const changeTheme = () => {
    if (setTheme) {
      setTheme(
        theme === THEME.light ? THEME.dark : THEME.light
      );
    }
  };

  return (
    <React.Fragment>
      <HeaderStyled className={theme}>
        <Switch value={'Switch theme'} name={'themeSwitch'} handleOnChange={changeTheme}></Switch>
        <Title value={title}></Title>
      </HeaderStyled>
      <MainStyled className={theme}>
        <Game />
      </MainStyled>
    </React.Fragment>
  );
};
