// import modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";

// import components
import { Container } from "../Container";
import { Menu } from "./Menu";

export const Navbar = () => {
  const Nav = styled("nav")`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;

    .navbar__container {
      display: flex;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__social__media {
      margin-left: 2rem;
    }
  `;

  const LogoText = styled("h2")`
    color: var(--white-color);
    font-family: Revamped;
    font-size: 2rem;
  `;

  const MenuIcon = styled("span")`
    display: flex;
    color: var(--white-color);
    font-size: 2rem;
    cursor: pointer;
  `;

  const [navMenu, setNavMenu] = useState(true);

  return (
    <Nav>
      <Container className={"navbar__container"}>
        <LogoText>Mahadi Dev</LogoText>
        <MenuIcon
          onClick={() => {
            setNavMenu((isOpen) => !isOpen);
          }}
        >
          {!navMenu && <BiMenuAltRight />}
          {navMenu && <VscClose />}
        </MenuIcon>
        {navMenu && <Menu />}
      </Container>
    </Nav>
  );
};
