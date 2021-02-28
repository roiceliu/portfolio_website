import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
  /* transparent, box-shadow */
  background: #19181a;
  height: 80px;
  width: 100%;
  /* this is for smooth scroll's bouncing offset, give next section to go top to the screen */
  margin-top: -80px;
  display: flex;
  justify-content: center; //horizontal alignment
  align-items: center;

  /* stay on the top the webpage */
  position: sticky;
  top: 0px;
  z-index: 10;

  /* smaller screen size like tablet/mobile size, the nav bar with stick out from side with transition animation  */
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3vw;
  height: 80px;
  width: 100%;
  //refrain the width if at very large screen
  max-width: 2000px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: #797979;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-self: flex-start;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #797979;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    /* centralize the icon: right, down */
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: flex-end;
  align-items: center;
  flex-basis: 550px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  /* this is for the snap underline highlight */
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: #797979;
  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  font-size: 18px;
  padding: 0 1rem;
  height: 100%;

  /* when the current link is clicked, and the page is at the link's component, action is made */
  &.active {
    border-bottom: 3px, solid, orange;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

export const NavBtnLink = styled.a`
  border-radius: 4px;
  padding: 10px 22px;
  color: #e5e5e5;
  border: 1px solid #e5e5e5;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: orange;
    color: #19181a;
    transition: all 0.2s ease-in-out;
  }
`;
