import styled from "styled-components";

const Element = styled.h1`
  margin: 2rem 0;
`;

type H1Props = {
  text: string;
};

const H1 = ({text}: H1Props) => {
  return <Element>{text}</Element>
};

export default H1; 