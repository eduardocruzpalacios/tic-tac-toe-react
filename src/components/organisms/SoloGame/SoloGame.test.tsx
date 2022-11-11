import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SoloGame } from './SoloGame';

function getTilesEls() {
  return screen.getAllByRole('button').filter(e => e.textContent === '');
}

describe('<SoloGame />', () => {
  beforeEach(() => {
    render(
      <SoloGame />
    );
  });

  it('renders same number of buttons as array prop length', () => {
    const tileEls = getTilesEls();
    expect(tileEls).toHaveLength(9);
  });

  it('resets state when reset button is clicked', () => {
    const tileEls = getTilesEls();
    for (let i = 0; i < 4; i++) {
      fireEvent.click(tileEls[i]);
    }
    let tiles1Els = screen.getAllByText(/^x$/i);
    let tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(2);
    expect(tiles2Els).toHaveLength(2);
    const resetButtonEl = screen.getByText(/reset/i);
    fireEvent.click(resetButtonEl);
    tiles1Els = screen.queryAllByText(/^x$/i);
    tiles2Els = screen.queryAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(0);
    expect(tiles2Els).toHaveLength(0);
  });

  it('avoids updating board in case of draw', () => {
    const tileEls = getTilesEls();
    fireEvent.click(tileEls[2]);
    fireEvent.click(tileEls[0]);
    fireEvent.click(tileEls[3]);
    fireEvent.click(tileEls[1]);
    fireEvent.click(tileEls[4]);
    fireEvent.click(tileEls[5]);
    fireEvent.click(tileEls[7]);
    fireEvent.click(tileEls[6]);
    fireEvent.click(tileEls[8]);
    let tiles1Els = screen.getAllByText(/^x$/i);
    let tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(5);
    expect(tiles2Els).toHaveLength(4);
    fireEvent.click(tileEls[0]);
    tiles1Els = screen.getAllByText(/^x$/i);
    tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(5);
    expect(tiles2Els).toHaveLength(4);
  });

  it('avoids updating board in case of winning', () => {
    const tileEls = getTilesEls();
    fireEvent.click(tileEls[0]);
    fireEvent.click(tileEls[1]);
    fireEvent.click(tileEls[3]);
    fireEvent.click(tileEls[2]);
    fireEvent.click(tileEls[6]);
    let tiles1Els = screen.getAllByText(/^x$/i);
    let tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(3);
    expect(tiles2Els).toHaveLength(2);
    fireEvent.click(tileEls[4]);
    tiles1Els = screen.getAllByText(/^x$/i);
    tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(3);
    expect(tiles2Els).toHaveLength(2);
  });

  it('counts game time', () => {
    const counterEl = screen.getByText(/Play time/i);
    expect(counterEl).toHaveTextContent('0');
    setTimeout(() => {
      expect(counterEl).toHaveTextContent('3');
    }, 3000);
  });

  it('allows change tokens of players', () => {
    const tileEls = getTilesEls();
    fireEvent.click(tileEls[0]);
    fireEvent.click(tileEls[1]);
    fireEvent.click(tileEls[3]);
    fireEvent.click(tileEls[2]);
    let tiles1Els = screen.getAllByText(/^x$/i);
    let tiles2Els = screen.getAllByText(/^o$/i);
    expect(tiles1Els).toHaveLength(2);
    expect(tiles2Els).toHaveLength(2);
    const pjTokens = screen.getAllByRole('textbox');
    fireEvent.change(pjTokens[0], { target: { value: 'a' } });
    fireEvent.change(pjTokens[1], { target: { value: 'b' } });
    tiles1Els = screen.getAllByText(/^a$/i);
    tiles2Els = screen.getAllByText(/^b$/i);
    expect(tiles1Els).toHaveLength(2);
    expect(tiles2Els).toHaveLength(2);
  });
});
