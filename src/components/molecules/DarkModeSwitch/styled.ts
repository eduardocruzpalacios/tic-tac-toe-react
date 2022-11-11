import Styled from 'styled-components';
import { whiteColor, blackColor } from '../../../common/styleUtils';

export const LabelStyled = Styled.label`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  user-select: none;
  transition: background-color 0.3s linear;
  width: 50px;
  &.dark {
    background-color: ${whiteColor};
  }
  &.light {
    background-color: ${blackColor};
  }
`;

export const InputStyled = Styled.input`
  visibility: hidden;
`;
