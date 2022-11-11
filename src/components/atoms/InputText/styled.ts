import Styled from 'styled-components';
import { blackColor, whiteColor } from '../../../common/styleUtils';

export const InputTextStyled = Styled.input`
  border: none;
  font-weight: bold;
  margin-left: 10px;
  outline: none;
  padding: 8px 0;
  text-align: center;
  width: 40px;
  &.dark {
    background-color: ${whiteColor};
    color: ${blackColor};
  }
  &.light {
    background-color: ${blackColor};
    color: ${whiteColor};
  }
`;
