// import modules
import styled from "styled-components";

export const Container = ({ children, className }) => {
  const ContainerWrapper = styled("div")`
    width: 100%;
    padding: 0 1rem;
  `;

  return (
    <ContainerWrapper className={`${className && className}`}>
      {children}
    </ContainerWrapper>
  );
};
