import styled from "styled-components";
import media from "../layout/media";

const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.md`
    grid-template-columns: 1fr;
  `};
`;

export default BaseGrid;