import React from 'react';
import { Tile } from '../../../components/atoms';
import { BoardProps } from './BoardType';
import { BoardStyled } from './styled';

export const Board: React.FC<BoardProps> = ({ tiles, handleClickTile }: BoardProps) => {
  function renderTile(i: number) {
    return (
      <React.Fragment>
        <Tile
          id={i.toString()}
          value={tiles[i]}
          handleOnClick={handleClickTile}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <BoardStyled>
        {tiles.map((_, index) => (
          renderTile(index)
        ))}
      </BoardStyled>
    </React.Fragment>
  );
};
