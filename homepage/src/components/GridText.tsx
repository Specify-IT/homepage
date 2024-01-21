import styled from "styled-components";
import { AlignItemsType, BaseContainer, BaseContainerProps, JustifyContentType } from "../base-styled-components/BaseContainer";
import media from "../layout/media";

type ContainerProps = {
} & BaseContainerProps;

const Container = styled(BaseContainer)<ContainerProps>`
  font-size: 2rem;;

  ${media.md`
    font-size: 1.5rem;
  `};
`;

type TextProps = {
  text: string;
  horizontal?: JustifyContentType;
  vertical?: AlignItemsType;
};

const GridText = ({text, horizontal = "center", vertical = "center"}: TextProps) => {
  return (
    <Container feather={false} horizontal={horizontal} vertical={vertical}>
      {text}
    </Container>
  );
};

export default GridText;