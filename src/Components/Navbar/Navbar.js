// import modules
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import gsap from "gsap";

// import components
import { Container } from "../Container";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { MenuAnimation } from "./MenuAnimation/MenuAnimation";
import {
  Nav,
  LogoText,
  MenuIcon,
  Menu,
  MenuLeft,
  MenuItem,
  AnimatedArea,
} from "./NavbarStyled";

export const Navbar = () => {
  // animation
  const menuRef = useRef();
  const menuLeftRef = useRef();
  const menuOpenAnimation = () => {
    gsap.to(menuRef.current, {
      duration: 1,
      "clip-path": "circle(141.7% at 100% 0%)",
    });

    gsap.from(menuLeftRef.current, {
      duration: 1,
      delay: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  };
  const menuCloseAnimation = () => {
    gsap.to(menuRef.current, {
      duration: 1,
      "clip-path": "circle(0% at 100% 0%)",
    });
  };

  // navbar open-close
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    if (navMenu) {
      menuOpenAnimation();
    } else {
      menuCloseAnimation();
    }
  });

  return (
    <Nav>
      <Container className={"navbar__container"}>
        <LogoText to={"/"}>Mahadi Dev</LogoText>
        <MenuIcon
          onClick={() => {
            setNavMenu((isOpen) => !isOpen);
          }}
        >
          {!navMenu && <BiMenuAltRight />}
          {navMenu && <VscClose />}
        </MenuIcon>
      </Container>
      <Menu ref={menuRef}>
        <MenuLeft ref={menuLeftRef}>
          <MenuItem to={"./"}>Home</MenuItem>
          <MenuItem to={"./"}>About</MenuItem>
          <MenuItem to={"./"}>Project</MenuItem>
          <MenuItem to={"./"}>Contact</MenuItem>

          <SocialMedia className={"navbar__social__media"} />
        </MenuLeft>
        <AnimatedArea id={"animatedMenuArea"}>
          <MenuAnimation />
        </AnimatedArea>
      </Menu>
    </Nav>
  );
};
