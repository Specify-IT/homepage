import styled from "styled-components";

const Element = styled.h2`
  padding-top: 20px;
`;

type H2Props = {
  text: string;
};

const H2 = ({text}: H2Props) => {
  return <Element>{text}</Element>
};

export default H2;