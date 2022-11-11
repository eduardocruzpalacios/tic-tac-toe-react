import React from 'react';
import { Title } from '../../../components/atoms';
import { DarkModeSwitch } from '../../../components/molecules';
import { HeaderStyled, SwitchContainerStyled } from './styled';
import { useGlobalTheme } from '../../../context/ThemeContext';

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
