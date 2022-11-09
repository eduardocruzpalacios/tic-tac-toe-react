import Styled from 'styled-components';
import { blackColor, whiteColor } from '../../../common/styleUtils';

export const ButtonStyled = Styled.button`
  border-radius: 12px;
  padding: 6px 12px;
  &.dark {
    border-color: ${whiteColor};
  }
  &.light {
    border-color: ${blackColor};
  }
`;
