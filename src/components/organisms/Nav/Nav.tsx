import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useGlobalTheme } from '../../../common/ThemeContext';
import { MainStyled, NavStyled } from './styled';

export const Nav: React.FC = () => {
  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <NavStyled className={theme}>
        <ul>
          <li>
            <Link to="/">Solo</Link>
          </li>
          <li>
            <Link to="/vsmachine">VS Machine</Link>
          </li>
        </ul>
      </NavStyled>
      <MainStyled className={theme}>
        <Outlet />
      </MainStyled>
    </React.Fragment>
  );
};
