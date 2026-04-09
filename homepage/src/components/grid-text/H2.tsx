import styled from "styled-components";

const Element = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-brand);
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin: 0 0 1.25rem;
  padding: 0;
`;

type H2Props = {
  text: string;
};

const H2 = ({text}: H2Props) => {
  return <Element>{text}</Element>
};

export default H2;