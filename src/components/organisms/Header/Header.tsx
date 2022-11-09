import React from 'react';
import { Title, DarkModeSwitch } from '../../../components/atoms';
import { HeaderStyled, SwitchContainerStyled } from './styled';
import { useGlobalTheme } from '../../../common/ThemeContext';

export const Header: React.FC = () => {
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
    </React.Fragment>
  );
};
