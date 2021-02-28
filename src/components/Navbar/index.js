import React from "react";
import { FaBars } from "react-icons/fa";
import Pdf from "../Roice_Liu_resume_java.pdf";
import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLogo,
  NavMenu,
  NavLink,
  MobileIcon,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Roice Liu</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="#about">01. About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#experience">02. Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#work">03. Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#contact">04. Contact</NavLink>
          </NavItem>
          <NavBtn>
            <NavBtnLink href={Pdf} target="_blank" rel="noreferrer">
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
