import Styled from 'styled-components';
import { blackColor, whiteColor } from '../../../common/styleUtils';

export const ButtonStyled = Styled.button`
  border-radius: 12px;
  border-style: solid;
  cursor: pointer;
  padding: 6px 12px;
  transition: 0.5s ease-in-out;
  &:focus {
    outline: none;
  }
  &.dark {
    border-color: ${whiteColor};
    &:hover {
      background-color: ${whiteColor};
      color: ${blackColor};
    }
  }
  &.light {
    border-color: ${blackColor};
    &:hover {
      background-color: ${blackColor};
      color: ${whiteColor};
    }
  }
`;
