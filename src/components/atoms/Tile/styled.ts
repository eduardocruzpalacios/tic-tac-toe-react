import Styled from 'styled-components';

const size = 136;

export const TileStyled = Styled.button`
  border: 3px solid #000;
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
