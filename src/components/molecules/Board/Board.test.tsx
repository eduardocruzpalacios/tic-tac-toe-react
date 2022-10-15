import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Board } from './Board';

const tiles = ['a', 'a', 'a', 'b', 'b', '', '', '', ''];
const handleClickTile = jest.fn();

describe('<Board />', () => {
  beforeEach(() => {
    render(
      <Board
        tiles={tiles}
        handleClickTile={handleClickTile}
      />
    );
  });

  it('renders same number of buttons as array prop length', () => {
    const buttonEls = screen.getAllByRole('button');
    expect(buttonEls).toHaveLength(9);
  });

  it('call a method every time a child is clicked', () => {
    const buttonEls = screen.getAllByRole('button');
    expect(handleClickTile).toHaveBeenCalledTimes(0);
    buttonEls.forEach((element, index) => {
      fireEvent.click(element);
      expect(handleClickTile).toHaveBeenCalledTimes((index + 1));
    });
  });
});
