import Styled, { createGlobalStyle } from 'styled-components';

const headerHeight = '80px';

export const HeaderStyled = Styled.header`
  line-height: ${headerHeight};
  min-height: ${headerHeight}x;
`;

export const MainStyled = Styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${headerHeight});
`;

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
