import React from 'react';
import { Game } from '../../../components/organisms';
import { Title, DarkModeSwitch } from '../../../components/atoms';
import { HeaderStyled, MainStyled, SwitchContainerStyled } from './styled';
import { useGlobalTheme } from '../../../common/ThemeContext';

export const MainPage: React.FC = () => {
  const title = 'Tic tac toe';

  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <HeaderStyled className={theme}>
        <SwitchContainerStyled>
          <DarkModeSwitch />
        </SwitchContainerStyled>
        <Title value={title}></Title>
      </HeaderStyled>
      <MainStyled className={theme}>
        <Game />
      </MainStyled>
    </React.Fragment>
  );
};
