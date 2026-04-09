import styled from "styled-components";

const Element = styled.span`
  display: block;
  padding-top: 0;
  margin-bottom: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.75;
`;

type SpanProps = {
  text: string;
};

const Span = ({text}: SpanProps): JSX.Element => {
  return <Element>{text}</Element>
};

export default Span;