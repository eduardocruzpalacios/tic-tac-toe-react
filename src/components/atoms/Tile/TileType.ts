import React from 'react';

export interface TileProps {
  id?: string;
  value?: string;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}
