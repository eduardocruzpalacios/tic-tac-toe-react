import Styled from 'styled-components';
import { blackColor, space120, space30, space60, whiteColor } from '../../../common/styleUtils';

export const MainStyled = Styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - ${space120} - ${space60});
`;

export const NavStyled = Styled.nav`
  background-color: ${blackColor};
  & ul {
    display: flex;
    height: ${space60};
    justify-content: center;
    list-style-type: none;
    position: relative;
    & li {  
      height: inherit;
      & a {
        align-items: center;
        color: ${whiteColor};
        display: flex;
        font-weight: bold;
        height: inherit;
        justify-content: center;
        padding: 0 ${space30};
        text-decoration: none;
        transition: 0.5s ease-in-out;
      }
      & a:hover {
        background-color: ${whiteColor};
        color: ${blackColor};
      }
    }  
  }
`;
