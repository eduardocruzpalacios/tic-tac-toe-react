import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { OneVersusComputerGame } from './OneVersusComputerGame';

function getTilesEls() {
  return screen.getAllByRole('button').filter(e => e.textContent === '');
}

describe('<OneVersusComputerGame />', () => {
  beforeEach(() => {
    render(
      <OneVersusComputerGame />
    );
  });

  it('renders same number of buttons as array prop length', () => {
    const tileEls = getTilesEls();
    expect(tileEls).toHaveLength(9);
  });

  it('resets state when reset button is clicked', () => {
    const tileEls = getTilesEls();
    fireEvent.click(tileEls[0]);
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
    const tileEls = getTilesEls();
    fireEvent.click(tileEls[0]);
    for (let i = 1; i < tileEls.length; i++) {
      if (tileEls[i].textContent === '') {
        fireEvent.click(tileEls[i]);
        break;
      }
    }
    const tiles1Els = screen.getAllByText(/^x$/i);
    const tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(2);
    expect(tiles2Els).toHaveLength(2);
  });
});
