import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tile } from './Tile';

const id = '1';
const value = 'O';
const handleClick = jest.fn();

describe('<Tile />', () => {
  beforeEach(() => {
    render(
      <Tile
        id={id}
        value={value}
        handleOnClick={handleClick}
      />
    );
  });

  it('renders value', () => {
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveTextContent(value);
  });

  it('assigns id property', () => {
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveProperty('id', id);
  });

  it('call a given method when clicked', () => {
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
