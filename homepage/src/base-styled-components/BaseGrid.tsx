import styled from "styled-components";
import media from "../layout/media";

const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.25rem;
  row-gap: 1rem;

  ${media.md`
    grid-template-columns: 1fr;
    row-gap: 0.85rem;
  `};
`;

export default BaseGrid;