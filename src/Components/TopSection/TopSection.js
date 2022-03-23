// import modules
import styled from "styled-components";

// import stylesheet
import "./TopSection.css";

const Section = styled("section")`
  width: 100%;
  height: 100vh;
  background-color: rgb(29, 29, 29);
`;

const BigText = styled("h1")`
  font-size: 10vw;
  font-family: Revamped;
  color: #fff;
`;

export const TopSection = () => {
  return <Section>{/* <BigText>Mahadi Dev</BigText> */}</Section>;
};
