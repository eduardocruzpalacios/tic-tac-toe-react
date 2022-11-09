import Styled from 'styled-components';
import { space120, space60 } from '../../../common/styleUtils';

export const MainStyled = Styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${space120} - ${space60});
`;
