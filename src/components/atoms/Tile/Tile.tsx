import React from 'react';
import { TileProps } from './TileType';
import { TileStyled } from './styled';

export const Tile: React.FC<TileProps> = ({
  key,
  value,
  handleOnClick
}: TileProps) => (
  <React.Fragment>
    <TileStyled key={key} onClick={handleOnClick}>
      {value && value}
    </TileStyled>
  </React.Fragment>
);
