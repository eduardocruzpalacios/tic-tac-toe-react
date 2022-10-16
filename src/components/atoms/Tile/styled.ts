import Styled from 'styled-components';

const size = 64;

export const TileStyled = Styled.button`
  border: 2px solid #000;
  margin-left: -2px;
  margin-bottom: -2px;
  border-radius: 0;
  font-size: ${size / 2}px;
  height: ${size}px;
  line-height: ${size}px;
  text-align: center;
  width: ${size}px;
  &:focus {
    outline: none;
  }
`;
