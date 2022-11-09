import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useGlobalTheme } from '../../../common/ThemeContext';
import { MainStyled, NavStyled } from './styled';

export const Nav: React.FC = () => {
  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <NavStyled>
        <ul>
          <li>
            <Link to="/">Solo Game</Link>
          </li>
        </ul>
      </NavStyled>
      <MainStyled className={theme}>
        <Outlet />
      </MainStyled>
    </React.Fragment>
  );
};
