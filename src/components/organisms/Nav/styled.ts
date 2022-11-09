import Styled from 'styled-components';
import { blackColor, space30, space60, whiteColor } from '../../../common/styleUtils';

export const NavStyled = Styled.nav`
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
        display: flex;
        font-weight: bold;
        height: inherit;
        justify-content: center;
        padding: 0 ${space30};
        text-decoration: none;
        transition: 0.5s ease-in-out;
      }
    }  
  }
  &.light {
    background-color: ${blackColor};
    & a {
      color: ${whiteColor};
    }
    & a:hover {
      background-color: ${whiteColor};
      color: ${blackColor};
    }
  }
  &.dark {
    background-color: ${whiteColor};
    & a {
      color: ${blackColor};
    }
    & a:hover {
      background-color: ${blackColor};
      color: ${whiteColor};
      }  
  }
`;
