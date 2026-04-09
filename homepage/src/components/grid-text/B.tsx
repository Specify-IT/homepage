import styled from "styled-components";

const Span = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-weight: 700;
  color: var(--color-brand);
  font-size: 1.05rem;
`;

type BProps = {
  text: string;
}

const B = ({text}: BProps) => {
  return <Span>{text}</Span>
};

export default B;