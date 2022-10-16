import Styled from 'styled-components';

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
