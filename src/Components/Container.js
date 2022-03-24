// import modules
import styled from "styled-components";

export const Container = ({ children, className }) => {
  const ContainerWrapper = styled("div")`
    width: 100%;
    padding: 0 1vw;

    @media (max-width: 768px) {
      padding: 0 2vw;
    }
  `;

  return (
    <ContainerWrapper className={`${className && className}`}>
      {children}
    </ContainerWrapper>
  );
};
