import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

const value = 'Reset';
const handleClick = jest.fn();

describe('<Button />', () => {
  beforeEach(() => {
    render(
      <Button
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

  it('call a given method when clicked', () => {
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
