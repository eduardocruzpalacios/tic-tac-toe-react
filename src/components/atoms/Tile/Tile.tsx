import React from 'react';
import { TileProps } from './TileType';
import { TileStyled } from './styled';
import { useGlobalTheme } from '../../../context/ThemeContext';

export const Tile: React.FC<TileProps> = ({
  value,
  handleOnClick
}: TileProps) => {
  const { theme } = useGlobalTheme();

  return (
    <React.Fragment>
      <TileStyled onClick={() => handleOnClick()} className={theme}>
        {value && value}
      </TileStyled>
    </React.Fragment>
  );
};
