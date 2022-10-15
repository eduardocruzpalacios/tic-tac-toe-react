import React from 'react';
import { ButtonProps } from './ButtonType';
import { ButtonStyled } from './styled';

export const Button: React.FC<ButtonProps> = ({
  value,
  handleOnClick
}: ButtonProps) => (
  <React.Fragment>
    <ButtonStyled onClick={handleOnClick}>
      {value && value}
    </ButtonStyled>
  </React.Fragment>
);
