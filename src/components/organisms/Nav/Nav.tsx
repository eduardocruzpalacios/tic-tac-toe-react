import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalTheme } from '../../../context/ThemeContext';
import { NavStyled } from './styled';

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
            <Link to="/oneversuscomputer">1 vs Computer</Link>
          </li>
        </ul>
      </NavStyled>
    </React.Fragment>
  );
};
