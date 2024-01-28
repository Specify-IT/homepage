import styled from "styled-components";

const Span = styled.span`
  padding-top: 20px;
  font-weight: 600;
`;

type BProps = {
  text: string;
}

const B = ({text}: BProps) => {
  return <Span>{text}</Span>
};

export default B;