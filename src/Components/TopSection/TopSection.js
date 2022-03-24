// import modules
import styled from "styled-components";
import Lottie from "react-lottie";

// import components
import { Container } from "../Container";

// import data
import * as programmerAnimation from "../../Data/Animation/programmer.json";
import * as birdAnimation from "../../Data/Animation/bird.json";

const Section = styled("section")`
  width: 100%;
  height: 100vh;
  background-color: rgb(29, 29, 29);
  position: relative;
  z-index: 1;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 992px) {
    .container {
      justify-content: center;
    }
  }
`;

const BigText = styled("h1")`
  font-size: 5vw;
  font-family: Revamped;
  font-weight: bold;
  color: #fff;
  position: relative;
  top: 3vw;

  span {
    font-family: inherit;
    color: ${process.env.REACT_APP_RED_COLOR_HEX};
  }

  @media (max-width: 992px) {
    font-size: 10vw;
    top: 0;
    text-align: center;
  }
`;

const AnimationWrapper = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "start"};
  align-items: center;

  @media (max-width: 992px) {
    justify-content: ${(props) =>
      props.justifyContentMobile ? props.justifyContentMobile : "start"};
    align-items: ${(props) =>
      props.alignItemsMobile ? props.alignItemsMobile : "center"};
  }
`;

const Bird = styled("div")`
  width: 30vw;
  position: relative;
  top: -9vw;

  @media (max-width: 992px) {
    width: 45vw;
    top: -21vw;
  }
`;

const Programmer = styled("div")`
  width: 43vw;
  right: 0;

  @media (max-width: 992px) {
    width: 60vw;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const TopSection = () => {
  return (
    <Section>
      <Container className={"container"}>
        <BigText>
          Build <span>Mo</span>dern <br />
          Website
        </BigText>
      </Container>
      <AnimationWrapper>
        <Bird>
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: birdAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={"100%"}
            width={"100%"}
          />
        </Bird>
      </AnimationWrapper>
      <AnimationWrapper
        justifyContent={"right"}
        justifyContentMobile={"center"}
        alignItemsMobile={"end"}
      >
        <Programmer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: programmerAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={"100%"}
            width={"100%"}
          />
        </Programmer>
      </AnimationWrapper>
    </Section>
  );
};
