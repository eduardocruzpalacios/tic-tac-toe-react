import React from 'react';
import { TokenInputProps } from './TokenInputType';

export const TokenInput: React.FC<TokenInputProps> = ({
  name,
  value,
  action,
  length
}: TokenInputProps) => (
  <React.Fragment>
    <label htmlFor={name}>{name}</label>
    <input
      name={name}
      type="text"
      value={value}
      className="input"
      onChange={action}
      maxLength={length}
    />
  </React.Fragment>
);
