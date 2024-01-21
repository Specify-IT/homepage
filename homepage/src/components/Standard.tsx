import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0.3rem;
  border-radius: 0.5rem;
  background-color: pink;
`;

type StandardProps = {
  children?: ReactNode;
};

const Standard = ({children}: StandardProps) => {
  return <Container>{children}</Container>
};

export default Standard;