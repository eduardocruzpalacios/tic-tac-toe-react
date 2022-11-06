import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TokenInput } from './TokenInput';

const name = 'name';
const value = 'X';
const action = jest.fn();
const length = 1;

describe('<TokenInput />', () => {
  beforeEach(() => {
    render(
      <TokenInput
        name={name}
        value={value}
        action={action}
        length={length}
      />
    );
  });

  it('renders input value', () => {
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveProperty('value', value);
  });

  it('assigns maxlength attribute', () => {
    const inputEl = screen.getByRole('textbox');
    expect(inputEl.getAttribute('maxlength')).toEqual(length.toString());
  });

  it('has input and label elements related', () => {
    const inputEl = screen.getByRole('textbox');
    const labelEl = screen.getByText(name);
    expect(inputEl.getAttribute('name')).toEqual(name);
    expect(labelEl.getAttribute('for')).toEqual(name);
  });

  it('calls a given method when changed', () => {
    const newValue = 'A';
    const inputEl = screen.getByRole('textbox');
    fireEvent.change(inputEl, { target: { value: newValue } });
    expect(action).toHaveBeenCalledTimes(1);
  });
});
