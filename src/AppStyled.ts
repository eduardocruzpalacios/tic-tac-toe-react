import { createGlobalStyle } from 'styled-components';
import { blackColor, whiteColor } from './common/styleUtils';

export const UniversalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  &.dark {
    background-color: ${blackColor};
    color: ${whiteColor};
  }
  &.light {
    background-color: ${whiteColor};
    color: ${blackColor};
  }
`;
