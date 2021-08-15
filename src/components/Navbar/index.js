import React from "react";
import { FaBars } from "react-icons/fa";
import Pdf from "../RoiceLiu_resume.pdf";
import { animateScroll as scroll } from "react-scroll";
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
  const scrolltoHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/portfolio_website" onClick={scrolltoHome}>
          Roice Liu
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              spy={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              01. About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="experience"
              smooth={true}
              spy={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              02. Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              03. Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              smooth={true}
              spy={true}
              duration={800}
              exact="true"
              offset={-80}
            >
              04. Contact
            </NavLink>
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
