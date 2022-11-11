import Styled from 'styled-components';
import { space120, space30 } from '../../../common/styleUtils';

export const SwitchContainerStyled = Styled.div`
  display: inline-block;
  position: absolute;
  right: ${space30};
  top: ${space30};
`;

export const HeaderStyled = Styled.header`
align-items: center;
  display: flex;
  justify-content: center;
  min-height: ${space120};
`;
