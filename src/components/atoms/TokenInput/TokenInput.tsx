import React from 'react';
import { useGlobalTheme } from '../../../common/ThemeContext';
import { InputStyled } from './styled';
import { TokenInputProps } from './TokenInputType';

export const TokenInput: React.FC<TokenInputProps> = ({
  name,
  value,
  action,
  length
}: TokenInputProps) => {
  const { theme } = useGlobalTheme();
  return (
    <React.Fragment>
      <label htmlFor={name}>{name}</label>
      <InputStyled
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
