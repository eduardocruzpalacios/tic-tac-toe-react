import React from 'react';

export interface BoardProps {
  tiles: string[];
  handleClickTile: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}
