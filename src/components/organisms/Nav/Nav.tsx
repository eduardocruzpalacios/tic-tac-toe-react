import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalTheme } from '../../../common/ThemeContext';
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
        </ul>
      </NavStyled>
    </React.Fragment>
  );
};
