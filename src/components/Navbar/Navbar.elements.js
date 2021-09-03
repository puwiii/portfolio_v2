import styled from "styled-components";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color_background_400};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color_text_400 + "15"};
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 75px;
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
  height: 100%;
  max-width: 300px;
`;

export const NavLogoImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

export const NavMenu = styled.ul`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 100%;
  transition: left 234ms ease-in-out;

  @media screen and (max-width: 960px) {
    gap: 1.2em;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    width: 100%;
    height: calc(100vh - 75px);
    top: 75px;
    left: ${({ show }) => (show ? 0 : "-100%")};
    background: ${({ theme }) => theme.color_background_400};
    overflow-y: auto;
  }
`;

export const NavPlaceholder = styled.li`
  display: ${({ show }) => (show ? "block" : "none")};

  width: ${({ width }) => width + "px"};
  left: ${({ left }) => left + "px"};
  position: absolute;
  z-index: -1;
  top: 17px;
  background: ${({ theme }) => `${theme.color_text_400}17`};
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 7px;
  height: 40px;

  @media screen and (max-width: 960px) {
    display: none !important;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  letter-spacing: -0.5px;

  @media screen and (max-width: 960px) {
    height: auto;
  }
`;

export const NavLink = styled(Link)`
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  gap: 5px;
  color: ${({ theme }) => theme.color_text_400 + "aa"};
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: border-color 125ms ease-in-out, color 125ms linear;

  &:hover {
    border-color: ${({ theme }) => theme.color_text_400};
    color: ${({ theme }) => theme.color_text_400};
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 960px) {
    padding: 1em;

    &:hover {
      opacity: 0.8;
      border-color: transparent;
    }
  }
`;

export const NavLinkAnchor = styled.a`
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  gap: 5px;
  color: ${({ theme }) => theme.color_text_400 + "aa"};
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: border-color 125ms ease-in-out, color 125ms linear;

  &:hover {
    border-color: ${({ theme }) => theme.color_text_400};
    color: ${({ theme }) => theme.color_text_400};
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 960px) {
    padding: 1em;

    &:hover {
      opacity: 0.8;
      border-color: transparent;
    }
  }
`;

export const NavButton = styled(Button)`
  margin: 0 1em;
`;

export const MobileButton = styled.button`
  display: none;
  @media screen and (max-width: 960px) {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    justify-self: flex-end;
    padding: 5px;
    margin-left: 15px;
    color: ${({ theme }) => theme.color_text_400};
  }
`;

export const NavThemeSwitch = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  justify-self: flex-end;
  padding: 5px 12px;
  margin-left: 10px;
  color: ${({ theme }) => theme.color_text_400};
  border-radius: 3px;
  transition: background-color 125ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.color_text_400 + "22"};
  }
`;

export const NavThemeSwitchLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
`;
