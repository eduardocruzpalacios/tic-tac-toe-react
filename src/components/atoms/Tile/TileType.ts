type TileValue = 'O' | 'X';

export interface TileProps {
  key: number;
  value?: TileValue;
  handleOnClick: () => void;
}
