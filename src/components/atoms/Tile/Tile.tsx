import React from 'react';
import { TileProps } from './TileType';
import { TileStyled } from './styled';

export const Tile: React.FC<TileProps> = ({
  id,
  value,
  handleOnClick
}: TileProps) => (
  <React.Fragment>
    <TileStyled id={id} onClick={handleOnClick}>
      {value && value}
    </TileStyled>
  </React.Fragment>
);
