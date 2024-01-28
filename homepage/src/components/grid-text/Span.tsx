import styled from "styled-components";

const Element = styled.span`
  padding-top: 20px;
`;

type SpanProps = {
  text: string;
};

const Span = ({text}: SpanProps): JSX.Element => {
  return <Element>{text}</Element>
};

export default Span;