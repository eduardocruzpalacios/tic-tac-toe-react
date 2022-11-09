import Styled from 'styled-components';

const headerHeight = '180px';

export const MainStyled = Styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${headerHeight});
`;
