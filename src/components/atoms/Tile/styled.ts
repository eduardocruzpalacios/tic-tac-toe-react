import Styled from 'styled-components';

const size = 136;

export const TileStyled = Styled.button`
  border: 3px solid #000;
  font-size: ${size / 2}px;
  line-height: ${size}px;
  height: ${size}px;
  text-align: center;
  width: ${size}px;
  border-radius: 0;
  &:focus {
    outline: none;
  }
`;
