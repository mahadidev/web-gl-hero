// import modules
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";

// import components
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { MenuAnimation } from "./MenuAnimation/MenuAnimation";

export const Menu = () => {
  const Menu = styled("div")`
    width: 100%;
    height: 100vh;
    background: var(--bg-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  `;

  const MenuItem = styled(Link)`
    width: 100%;
    color: var(--white-color);
    font-size: 2rem;
    padding: 0.7rem 0 0.7rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s ease-out;

    &:hover {
      opacity: 0.8;
    }
  `;

  useEffect(() => {
    MenuAnimation();
  });

  return (
    <>
      <Menu id={"menu"}>
        {/* <MenuItem to={"./"}>Home</MenuItem>
        <MenuItem to={"./"}>About</MenuItem>
        <MenuItem to={"./"}>Project</MenuItem>
        <MenuItem to={"./"}>Contact</MenuItem>

        <SocialMedia className={"navbar__social__media"} /> */}
        <MenuAnimation />
      </Menu>
    </>
  );
};
