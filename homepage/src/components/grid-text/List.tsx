import styled from "styled-components";

const Ol = styled.ol`

`;

const Li = styled.li`
  padding: 0.5rem;
  font-weight: 600;
`;

type ListProps = {
  items: string[];
}
const List = ({items}: ListProps) => {
  return <Ol>
    {items.map((text: string, index: number) => {
      return <Li key={index}>{text}</Li>;
    })}
  </Ol>
};

export default List;