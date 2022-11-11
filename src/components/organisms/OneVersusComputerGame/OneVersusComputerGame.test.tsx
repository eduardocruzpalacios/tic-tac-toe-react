import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { OneVersusComputerGame } from './OneVersusComputerGame';

describe('<OneVersusComputerGame />', () => {
  beforeEach(() => {
    render(
      <OneVersusComputerGame />
    );
  });

  it('resets state when reset button is clicked', () => {
    const buttonEls = screen.getAllByRole('button');
    fireEvent.click(buttonEls[0]);
    let tiles1Els = screen.getAllByText(/^x$/i);
    let tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(1);
    expect(tiles2Els).toHaveLength(1);
    const resetButtonEl = screen.getByText(/reset/i);
    fireEvent.click(resetButtonEl);
    tiles1Els = screen.queryAllByText(/^x$/i);
    tiles2Els = screen.queryAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(0);
    expect(tiles2Els).toHaveLength(0);
  });

  it('has an AI that plays against the player', () => {
    const buttonEls = screen.getAllByRole('button');
    fireEvent.click(buttonEls[0]);
    for (let i = 1; i < buttonEls.length; i++) {
      if (buttonEls[i].textContent === '') {
        fireEvent.click(buttonEls[i]);
        break;
      }
    }
    const tiles1Els = screen.getAllByText(/^x$/i);
    const tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(2);
    expect(tiles2Els).toHaveLength(2);
  });
});
