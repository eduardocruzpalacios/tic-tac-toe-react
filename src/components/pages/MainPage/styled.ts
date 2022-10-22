import Styled from 'styled-components';

const headerHeight = '180px';

export const HeaderStyled = Styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: ${headerHeight};
`;

export const MainStyled = Styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${headerHeight});
`;
