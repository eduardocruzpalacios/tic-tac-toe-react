import React from 'react';
import { TokenInputProps } from './TokenInputType';

export const TokenInput: React.FC<TokenInputProps> = ({
  value,
  action,
  length
}: TokenInputProps) => (
  <React.Fragment>
    <input
      type="text"
      value={value}
      className="input"
      onChange={action}
      maxLength={length}
    />
  </React.Fragment>
);
