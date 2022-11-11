import React from 'react';
import { useGlobalTheme } from '../../../context/ThemeContext';
import { InputTextStyled } from './styled';
import { InputTextProps } from './InputTextType';

export const InputText: React.FC<InputTextProps> = ({
  name,
  value,
  action,
  length
}: InputTextProps) => {
  const { theme } = useGlobalTheme();
  return (
    <React.Fragment>
      <label htmlFor={name}>{name}</label>
      <InputTextStyled
        name={name}
        type="text"
        value={value}
        onChange={action}
        maxLength={length}
        className={theme}
      />
    </React.Fragment>
  );
};
