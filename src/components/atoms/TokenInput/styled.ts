import Styled from 'styled-components';

export const InputStyled = Styled.input`
  border: none;
  font-weight: bold;
  margin-left: 10px;
  outline: none;
  padding: 8px 0;
  text-align: center;
  width: 40px;
  &.dark {
    background-color: #ddd;
    color: #222;
  }
  &.light {
    background-color: #222;
    color: #ddd;
  }
`;
