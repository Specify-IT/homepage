import styled from "styled-components";

const Ol = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Li = styled.li`
  padding: 0.875rem 0;
  font-weight: 600;
  color: var(--color-brand-dark);
  border-bottom: 1px solid var(--color-border);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-brand-light);
    flex-shrink: 0;
  }
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