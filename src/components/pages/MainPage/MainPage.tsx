import React from 'react';
import { Header, SoloGame } from '../../organisms';
import { MainStyled } from './styled';
import { useGlobalTheme } from '../../../common/ThemeContext';

export const MainPage: React.FC = () => {
  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <Header />
      <MainStyled className={theme}>
        <SoloGame />
      </MainStyled>
    </React.Fragment>
  );
};
