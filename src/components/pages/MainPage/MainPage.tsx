import React from 'react';
import { Game } from '../../../components/organisms';
import { Title, DarkModeSwitch } from '../../../components/atoms';
import { HeaderStyled, MainStyled } from './styled';
import { useGlobalTheme } from '../../../common/ThemeContext';

export const MainPage: React.FC = () => {
  const title = 'Tic tac toe';

  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <HeaderStyled className={theme}>
        <DarkModeSwitch />
        <Title value={title}></Title>
      </HeaderStyled>
      <MainStyled className={theme}>
        <Game />
      </MainStyled>
    </React.Fragment>
  );
};
