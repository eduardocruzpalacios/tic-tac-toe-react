import Styled from 'styled-components';

const headerHeight = '180px';

const space = '30px';

export const SwitchContainerStyled = Styled.div`
  display: inline-block;
  position: absolute;
  right: ${space};
  top: ${space};
`;

export const HeaderStyled = Styled.header`
  min-height: ${headerHeight};
  padding-top: ${space};
`;

export const MainStyled = Styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${headerHeight});
`;
