import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from './Switch';

const value = 'value';
const name = 'name';
const handleOnChange = jest.fn();

describe('<Switch />', () => {
  beforeEach(() => {
    render(
      <Switch
        value={value}
        name={name}
        handleOnChange={handleOnChange}
      />
    );
  });

  it('renders value', () => {
    const valueEl = screen.getByText(value);
    expect(valueEl).toBeInTheDocument();
  });

  it('assigns name property', () => {
    const switchEl = screen.getByRole('checkbox');
    expect(switchEl).toHaveProperty('name', name);
  });

  it('call a given method when clicked', () => {
    const switchEl = screen.getByRole('checkbox');
    fireEvent.click(switchEl);
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
