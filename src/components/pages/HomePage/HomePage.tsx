import React from 'react';
import { Outlet } from 'react-router-dom';
import { useGlobalTheme } from '../../../context/ThemeContext';
import { Header, Nav } from '../../organisms';
import { MainStyled } from './styled';

export const HomePage: React.FC = () => {
  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <Header />
      <Nav />
      <MainStyled className={theme}>
        <Outlet />
      </MainStyled>
    </React.Fragment >
  );
};
