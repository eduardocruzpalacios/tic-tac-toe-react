import Styled from 'styled-components';

export const ButtonStyled = Styled.button`
  border-radius: 12px;
  padding: 6px 12px;
  &.dark {
    border-color: #ddd;
  }
  &.light {
    border-color: #222;
  }
`;
