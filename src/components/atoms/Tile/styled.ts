import Styled from 'styled-components';
import { blackColor, tileSize, whiteColor } from '../../../common/styleUtils';

export const TileStyled = Styled.button`
  border-radius: 0;
  border-style: solid;
  border-width: 2px;
  font-size: ${tileSize / 2}px;
  height: ${tileSize}px;
  line-height: ${tileSize}px;
  margin-left: -2px;
  margin-bottom: -2px;
  text-align: center;
  width: ${tileSize}px;
  &:focus {
    outline: none;
  }
  &.dark {
    border-color: ${whiteColor};
  }
  &.light {
    border-color: ${blackColor};
  }
`;
