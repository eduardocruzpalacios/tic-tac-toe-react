import React from 'react';
import { ButtonProps } from './ButtonType';
import { ButtonStyled } from './styled';
import { useGlobalTheme } from '../../../context/ThemeContext';

export const Button: React.FC<ButtonProps> = ({
  value,
  handleOnClick
}: ButtonProps) => {
  const { theme } = useGlobalTheme();
  return (
    <React.Fragment>
      <ButtonStyled onClick={handleOnClick} className={theme}>
        {value && value}
      </ButtonStyled>
    </React.Fragment>
  );
};
