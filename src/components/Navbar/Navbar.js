import React, { useState, useEffect } from "react";
import { THEME_STATE } from "../../context/reducer";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
  MobileButton,
  NavLogoImage,
  NavThemeSwitch,
  NavPlaceholder,
  NavThemeSwitchLabel,
  NavSocialLinks,
  SocialLink,
  SocialLinkLabel,
} from "./Navbar.elements";
import {
  BiX,
  BiMenu,
  BiHomeAlt,
  BiCode,
  BiCalendar,
  BiCommentDetail,
  BiMoon,
  BiSun,
  BiLinkExternal,
} from "react-icons/bi";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";
import { useStateValue } from "../../context/StateProvider";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { removeFocus } from "../../helpers/removeFocus";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileLogo, setMobileLogo] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [width, setWidth] = useState(50);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const [themeLS, setThemeLS] = useLocalStorage("theme", THEME_STATE.LIGHT);
  const [{ theme }, dispatch] = useStateValue();

  const handleClick = (e) => {
    e.preventDefault();
    setShowMobileMenu(!showMobileMenu);
  };

  //MOBILE LOGO----------------
  const handleMobileLogo = () => {
    if (window.innerWidth < 550) setMobileLogo(true);
    else setMobileLogo(false);
  };

  useEffect(() => {
    handleMobileLogo();
  }, []);

  window.addEventListener("resize", handleMobileLogo);
  //MOBILE LOGO-----------------

  const handleTheme = () => {
    if (themeLS === THEME_STATE.DARK) {
      setThemeLS(THEME_STATE.LIGHT);
    } else {
      setThemeLS(THEME_STATE.DARK);
    }
  };

  useEffect(() => {
    const seeForLocalStorage = () => {
      if (themeLS) {
        themeLS === THEME_STATE.DARK
          ? dispatch({
              type: "SET_THEME",
              theme: THEME_STATE.DARK,
            })
          : dispatch({
              type: "SET_THEME",
              theme: THEME_STATE.LIGHT,
            });
      }
    };

    seeForLocalStorage();
  }, [themeLS, dispatch]);

  const handlePlaceholder = (e) => {
    // console.log(e.target);
    // console.log(e.target.clientWidth);
    // console.log(e.target.offsetLeft);
    setWidth(e.target.clientWidth);
    setLeftOffset(e.target.offsetLeft);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" title="Sebastián Mathiuer">
          {/* <Logotipo width={325} /> */}
          {mobileLogo ? (
            <>
              {theme === THEME_STATE.DARK ? (
                <NavLogoImage
                  src="/images/Isotipo-negative-small.png"
                  alt="Sebastián Mathieur"
                />
              ) : (
                <NavLogoImage
                  src="/images/Isotipo-small.png"
                  alt="Sebastián Mathieur"
                />
              )}
            </>
          ) : (
            <>
              {theme === THEME_STATE.DARK ? (
                <NavLogoImage
                  src="/images/Logotipo-negative-small.png"
                  alt="Sebastián Mathieur"
                />
              ) : (
                <NavLogoImage
                  src="/images/Logotipo-small.png"
                  alt="Sebastián Mathieur"
                />
              )}
            </>
          )}
        </NavLogo>
        <NavMenu
          onClick={handleClick}
          show={showMobileMenu}
          onMouseEnter={(e) => setShowPlaceholder(true)}
          onMouseLeave={(e) => setShowPlaceholder(false)}
        >
          <NavPlaceholder
            width={width}
            left={leftOffset}
            show={showPlaceholder}
          />
          <NavItem onMouseEnter={(e) => handlePlaceholder(e)}>
            <NavLink to={"/"}>
              <BiHomeAlt />
              Inicio
            </NavLink>
          </NavItem>
          <NavItem onMouseEnter={(e) => handlePlaceholder(e)}>
            <NavLink to={"/projects"}>
              <BiCode />
              Proyectos
            </NavLink>
          </NavItem>
          <NavItem onMouseEnter={(e) => handlePlaceholder(e)}>
            <NavLink to={"/timeline"}>
              <BiCalendar />
              Timeline
            </NavLink>
          </NavItem>
          <NavItem onMouseEnter={(e) => handlePlaceholder(e)}>
            <NavLink to={"/contact"}>
              <BiCommentDetail />
              Contacto
            </NavLink>
          </NavItem>
          <NavItem
            onMouseEnter={(e) => setShowPlaceholder(false)}
            onMouseLeave={(e) => setShowPlaceholder(true)}
          >
            <NavButton
              onClick={(e) => {
                window.open("Sebastián_Mathieur_CV.pdf");
                removeFocus(e);
              }}
            >
              <BiLinkExternal />
              Descargar CV
            </NavButton>
          </NavItem>

          <NavItem>
            <NavSocialLinks>
              <SocialLink
                variant="github"
                href="https://github.com/puwiii/"
                target="_blank"
              >
                <RiGithubLine />
                <SocialLinkLabel>Mi Github</SocialLinkLabel>
              </SocialLink>
              <SocialLink
                variant="linkedin"
                href="https://www.linkedin.com/in/sebastian-mathieur/"
                target="_blank"
              >
                <RiLinkedinBoxLine />
                <SocialLinkLabel>Mi Linkedin</SocialLinkLabel>
              </SocialLink>
            </NavSocialLinks>
          </NavItem>
        </NavMenu>

        <NavThemeSwitch onClick={handleTheme} name="theme-btn">
          {theme === THEME_STATE.DARK ? <BiSun /> : <BiMoon />}
          <NavThemeSwitchLabel>
            {theme === THEME_STATE.DARK ? "light" : "dark"}
          </NavThemeSwitchLabel>
        </NavThemeSwitch>
        <MobileButton onClick={handleClick} name="hamburger-btn">
          {showMobileMenu ? <BiX /> : <BiMenu />}
        </MobileButton>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
