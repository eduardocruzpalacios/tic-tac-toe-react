import { createGlobalStyle } from 'styled-components';

export const UniversalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  &.dark {
    background-color: #222;
    color: #ddd;
  }
  &.light {
    background-color: #ddd;
    color: #222;
  }
`;
