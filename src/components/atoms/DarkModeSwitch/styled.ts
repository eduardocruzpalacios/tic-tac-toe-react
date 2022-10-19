import Styled from 'styled-components';

export const LabelStyled = Styled.label`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  user-select: none;
  transition: background-color 0.3s linear;
  width: 50px;
  &.dark {
    background-color: #ddd;
  }
  &.light {
    background-color: #222;
  }
`;

export const InputStyled = Styled.input`
  visibility: hidden;
`;
