import Styled from 'styled-components';

const size = 64;

export const TileStyled = Styled.button`
  border-radius: 0;
  border-style: solid;
  border-width: 2px;
  font-size: ${size / 2}px;
  height: ${size}px;
  line-height: ${size}px;
  margin-left: -2px;
  margin-bottom: -2px;
  text-align: center;
  width: ${size}px;
  &:focus {
    outline: none;
  }
  &.dark {
    border-color: #ddd;
  }
  &.light {
    border-color: #222;
  }
`;
