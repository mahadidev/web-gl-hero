// import modules
import styled from "styled-components";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

export const SocialMedia = ({ className }) => {
  const SocialMediaItems = styled("div")`
    width: max-content;
    display: flex;
    justify-content: space-between;
  `;

  const SocialMediaItem = styled("a")`
    color: var(--black-color);
    display: flex;
    align-items: center;
    background: white;
    margin: 0.5rem;
    padding: 0.7rem;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover {
      opacity: 0.9;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  `;

  return (
    <SocialMediaItems className={`${className && className}`}>
      <SocialMediaItem href={"#"} target={"_blank"}>
        <FaFacebookF />
      </SocialMediaItem>
      <SocialMediaItem href={"#"} target={"_blank"}>
        <AiFillGithub />
      </SocialMediaItem>
      <SocialMediaItem href={"#"} target={"_blank"}>
        <FaLinkedinIn />
      </SocialMediaItem>
      <SocialMediaItem href={"#"} target={"_blank"}>
        <AiOutlineInstagram />
      </SocialMediaItem>
    </SocialMediaItems>
  );
};
