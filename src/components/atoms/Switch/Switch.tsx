import React from 'react';
import { SwitchProps } from './SwitchType';

export const Switch: React.FC<SwitchProps> = ({
  value,
  name,
  handleOnChange
}: SwitchProps) => (
  <React.Fragment>
    <input
      onChange={handleOnChange}
      id={name}
      type="checkbox"
      name={name} />
    <label htmlFor={name}>
      <span>{value}</span>
    </label>
  </React.Fragment>
);
