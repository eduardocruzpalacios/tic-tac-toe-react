import React from 'react';
import { Game } from '../../../components/organisms';
import { Title } from '../../../components/atoms';
import { HeaderStyled, MainStyled } from './styled';
import { useGlobalTheme } from '../../../common/ThemeContext';
import './MainPage.css';
import { Switch } from '../../atoms/Switch/Switch';

export const MainPage: React.FC = () => {
  const title = 'Tic tac toe';

  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <HeaderStyled className={theme}>
        <Switch></Switch>
        <Title value={title}></Title>
      </HeaderStyled>
      <MainStyled className={theme}>
        <Game />
      </MainStyled>
    </React.Fragment>
  );
};
