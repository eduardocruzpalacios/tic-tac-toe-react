import React from 'react';
import { TileProps } from './TileType';
import { TileStyled } from './styled';
import { useGlobalTheme } from '../../../context/ThemeContext';

export const Tile: React.FC<TileProps> = ({
  id,
  value,
  handleOnClick
}: TileProps) => {
  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <TileStyled id={id} onClick={handleOnClick} className={theme}>
        {value && value}
      </TileStyled>
    </React.Fragment>
  );
};
