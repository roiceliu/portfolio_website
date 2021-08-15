import React from "react";
import Pdf from "../RoiceLiu_resume.pdf";
import {
  Icon,
  SidebarContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarLinks,
  SidebarMenu,
  SideBtnWrapper,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="about" onClick={toggle}>
            01. About
          </SidebarLinks>
          <SidebarLinks to="experience" onClick={toggle}>
            02. Experience
          </SidebarLinks>
          <SidebarLinks to="projects" onClick={toggle}>
            03. projects
          </SidebarLinks>
          <SidebarLinks to="contact" onClick={toggle}>
            04. Contact
          </SidebarLinks>
        </SidebarMenu>
        <SideBtnWrapper onClick={toggle}>
          <SidebarRoute href={Pdf} target="_blank" rel="noreferrer">
            Resume
          </SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
