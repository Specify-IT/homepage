import styled from "styled-components";

const Element = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-brand-darker);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 1.5rem;
  padding: 0;
`;

type H1Props = {
  text: string;
};

const H1 = ({text}: H1Props) => {
  return <Element>{text}</Element>
};

export default H1; 