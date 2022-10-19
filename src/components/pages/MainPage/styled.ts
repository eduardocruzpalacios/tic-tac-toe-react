import Styled from 'styled-components';

const headerHeight = '80px';

export const HeaderStyled = Styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: ${headerHeight};
  min-height: ${headerHeight}x;
`;

export const MainStyled = Styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${headerHeight});
`;
