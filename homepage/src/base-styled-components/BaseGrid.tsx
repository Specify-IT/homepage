import styled from "styled-components";
import media from "../layout/media";

const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  ${media.md`
    grid-template-columns: 1fr;
    gap: 1rem;
  `};
`;

export default BaseGrid;