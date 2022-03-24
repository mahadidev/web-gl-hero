// import modules
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled("nav")`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  .navbar__container {
    display: flex;
    padding-top: 1vw;
    padding-bottom: 1vw;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 992px) {
    .navbar__container {
      padding-top: 2vw;
      padding-bottom: 2vw;
    }
  }
`;

export const LogoText = styled(Link)`
  color: var(--white-color);
  font-family: Revamped;
  font-size: 2vw;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 992px) {
    font-size: 8vw;
  }
`;

export const MenuIcon = styled("span")`
  display: flex;
  color: var(--white-color);
  font-size: 2.5vw;
  cursor: pointer;

  @media (max-width: 992px) {
    font-size: 10vw;
  }
`;

export const Menu = styled("div")`
  width: 100%;
  height: 100vh;
  background: ${process.env.REACT_APP_BLACK_COLOR_HEX};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 2vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  clip-path: circle(0% at 100% 0%);

  .navbar__social__media {
    margin-top: 1vw;
  }

  @media (max-width: 992px) {
    .navbar__social__media {
      margin-top: 1.5vw;
    }
  }
`;

export const MenuLeft = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuItem = styled(Link)`
  color: var(--white-color);
  font-size: 3vw;
  padding: 1vw 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s ease-out;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 992px) {
    font-size: 10vw;
    padding: 1.5vw 0;
  }
`;

export const AnimatedArea = styled("div")`
  width: 100%;
  height: 100vh;
  position: absolute;
  right: 0;
  z-index: -1;
  cursor: grabbing;
`;
