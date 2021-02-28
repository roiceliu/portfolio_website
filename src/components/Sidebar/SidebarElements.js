import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  z-index: 999;
  background: #19181a;
  position: fixed;

  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  transition: all 0.2s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  background: transparent;
  /* centralize the icon: right, down */
  transform: translate(-100%, 70%);
`;

export const CloseIcon = styled(FaTimes)`
  color: #797979;
  font-size: 1.2rem;
`;

export const SidebarWrapper = styled.ul`
  background: #19181a;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLinks = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #797979;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: orange;
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarRoute = styled.a`
  border-radius: 10px;
  border: none;
  background: orange;
  padding: 16px 64px;
  color: black;
  white-space: nowrap;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #e5e5e5;
    color: black;
    transition: all 0.2s ease-in-out;
  }
`;
